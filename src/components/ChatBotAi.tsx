import React, { useEffect, useRef } from "react";
import { CharacterPreview } from "@/features/Character";
import { ScrollArea } from "@/components/ui/ScrollArea.tsx";
import { MessageList } from "@/features/Messages";
import { useVapi, vapi, VapiButton } from "@/features/Assistant";

interface Props {
  showModal: boolean;
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

  useEffect(() => {
    (async () => {
      if (showModal) {
        await start();
      } else {
        stop();
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
