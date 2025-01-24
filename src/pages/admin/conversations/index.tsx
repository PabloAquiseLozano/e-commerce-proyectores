import { WrapperContainer } from "@/components/ui/WrapperContainer.tsx";
import { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import moment from "moment";
import { isEmpty, orderBy } from "lodash";
import { conversationsRef } from "@/firebase/collections/conversations.ts";
import { ChatSkeleton } from "@/components/ui/ChatSkeleton.tsx";

export const ConversationsPage = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchConversations = async () => {
    const unsubscribe = onSnapshot(
      conversationsRef,
      (snapshot) => {
        const _conversations = snapshot.docs.map(
          (doc): Conversation =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as Conversation,
        );

        setConversations(orderBy(_conversations, "createAt", "desc"));
      },
      (error) => {
        console.error("ErrorFetchConversations:", error);
      },
    );

    return unsubscribe;
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        await fetchConversations();
      } catch (e) {
        console.error("ErrorFetchConversations:", e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="w-full">
      <WrapperContainer>
        <div>
          <h1 className="text-[2em] font-medium text-center mt-5">
            Conversaciones con clientes
          </h1>
        </div>
        <div className="w-full flex flex-wrap justify-center gap-5 px-[2em] py-[4em]">
          {loading ? (
            <div className="flex flex-wrap gap-5 justify-center">
              <ChatSkeleton />
              <ChatSkeleton />
              <ChatSkeleton />
            </div>
          ) : (
            conversations
              .filter((conversation) => !isEmpty(conversation.messages))
              .map((conversation, index) => (
                <div
                  key={index}
                  className="card w-full sm:w-[23em] h-[23em] border-black border-[1px] rounded-[.5em] grid grid-rows-[auto,1fr] overflow-hidden"
                >
                  <div className="bg-gray-800 text-white p-1 px-2 flex justify-between items-center text-[.8em]">
                    <div className="">
                      Fecha:{" "}
                      {moment(
                        conversation.createAt,
                        "YYYY-MM-DD HH:mm:ss",
                      ).format("DD/MM/YYYY HH:mm")}
                    </div>
                    <div className="">ID: {conversation.id}</div>
                  </div>
                  <ul className="conversation px-4 py-4 bg-[#aaaaaa] w-full h-full overflow-y-auto">
                    {conversation.messages.map((message, index) => (
                      <div key={index}>
                        {message.sender === "bot" ? (
                          <li className="flex justify-start gap-2 mb-3">
                            <div className="flex flex-col items-center">
                              <img
                                src="/bot.png"
                                alt="avatar"
                                className="w-[1.7em] h-[1.7em] rounded-full object-cover"
                              />
                              <span className="text-[.7em] font-bold text-center leading-[1em]">
                                Mary (Bot)
                              </span>
                            </div>
                            <div className="text-[.82em] bg-[#ffffff] text-black p-2 py-1 rounded-[.7em]">
                              {message.message}
                            </div>
                          </li>
                        ) : (
                          <li className="flex justify-end gap-2 mb-3">
                            <div className="text-[.82em] bg-[#e3ffc9] text-black p-2 py-1 rounded-[.7em]">
                              {message.message}
                            </div>
                            <div className="flex flex-col items-center">
                              <img
                                src="/avatar.jpg"
                                alt="avatar"
                                className="w-[1.7em] h-[1.7em] rounded-full object-cover"
                              />
                              <span className="text-[.7em] text-center font-bold">
                                Cliente
                              </span>
                            </div>
                          </li>
                        )}
                      </div>
                    ))}
                  </ul>
                </div>
              ))
          )}
        </div>
      </WrapperContainer>
    </div>
  );
};
