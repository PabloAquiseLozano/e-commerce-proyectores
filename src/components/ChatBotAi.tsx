import React, { useEffect, useRef } from "react";
import { CharacterPreview } from "@/components/features/Character";
import { ScrollArea } from "@/components/ui/ScrollArea.tsx";
import { MessageList } from "@/components/features/Messages";
import { useVapi, vapi, VapiButton } from "@/components/features/Assistant";
import axios from "axios";
import { TranscriptMessage } from "@/lib/types/conversation.type";
import { WhatsappConfig } from "@/config";

interface Props {
  showModal: boolean;
}

interface WspMessage {
  sender: "bot" | "user";
  message: string;
}

export const ChatBotAi = ({ showModal }: Props): React.ReactNode => {
  const scrollAreaRef = useRef<any>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    const viewport = viewportRef.current;
    if (viewport) {
      viewport.scrollTop = viewport.scrollHeight;
    }
  };

  const {
    toggleCall,
    start,
    stop,
    messages,
    callStatus,
    activeTranscript,
    audioLevel,
  } = useVapi();

  useEffect(() => {
    vapi.on("message", scrollToBottom);
    return () => {
      vapi.off("message", scrollToBottom);
    };
  });

  const sendMessagesToWhatsapp = async (wspMessage: WspMessage) => {
    try {
      const response = await axios.post(
        `https://graph.facebook.com/v17.0/${WhatsappConfig.PHONE_NUMBER_ID}/messages`,
        {
          messaging_product: "whatsapp",
          to: WhatsappConfig.RECIPIENT_PHONE_NUMBER,
          type: "text",
          text: { body: `${wspMessage.sender}: ${wspMessage.message}` },
        },
        {
          headers: {
            Authorization: `Bearer ${WhatsappConfig.ACCESS_TOKEN_WSP}`,
            "Content-Type": "application/json",
          },
        },
      );
      console.log("Message send:", response.data);
    } catch (error) {
      console.error("sendMessagesToWhatsappError: ", error);
    }
  };

  const wspMessagesMap = (message: TranscriptMessage): WspMessage => ({
    sender: message.role === "assistant" ? "bot" : "user",
    message: message.transcript,
  });

  useEffect(() => {
    (async () => {
      if (showModal) {
        await start();
      } else {
        const _messages: TranscriptMessage[] = (
          messages as TranscriptMessage[]
        ).filter((message) => {
          return (
            ["assistant", "user"].includes(message?.role) &&
            message.type === "transcript"
          );
        });

        const wspMessages: WspMessage[] = _messages.map((message) =>
          wspMessagesMap(message),
        );

        console.log("wspMessages: ", wspMessages);

        stop();

        const promises = wspMessages.map((__message) =>
          sendMessagesToWhatsapp(__message),
        );

        await Promise.all(promises);
      }
    })();
  }, [showModal]);

  return (
    <div className="w-full max-h-[80%] m-auto grid grid-cols-1 sm:grid-cols-2 grid-rows-[auto,1fr] sm:grid-rows-1 gap-6">
      <div className="w-full">
        <CharacterPreview />
      </div>
      <div className="w-full h-auto bg-white rounded-[1em]">
        <div
          id="card"
          className="text-slate-950 dark:text-slate-50 w-full relative"
        >
          <div id="card-content" className="p-3 pt-0">
            <ScrollArea
              ref={scrollAreaRef}
              viewportRef={viewportRef}
              className="h-[60vh] flex flex-1 p-4"
            >
              <div className="flex flex-1 flex-col min-h-[80vh] justify-end">
                <MessageList
                  messages={messages}
                  activeTranscript={activeTranscript}
                />
              </div>
            </ScrollArea>
          </div>
          <div
            id="card-footer"
            className="flex justify-center absolute bottom-0 left-0 right-0 py-4"
          >
            <VapiButton
              audioLevel={audioLevel}
              callStatus={callStatus}
              toggleCall={toggleCall}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
