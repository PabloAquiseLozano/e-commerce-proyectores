import { useState } from "react";
import { ModalComponent } from "@/components/ModalComponent.tsx";
import { ChatBotAi } from "@/components/ChatBotAi.tsx";

export const FloatingOpenToChatBot = () => {
  const [showModalAssistant, setShowModalAssistant] = useState<boolean>(false);

  const onSetShowModalAssistant = () =>
    setShowModalAssistant(!showModalAssistant);

  return (
    <>
      <div
        onClick={() => onSetShowModalAssistant()}
        className="fixed bottom-[7%] right-[5%] cursor-pointer transition ease-in-out hover:transition hover:ease-in-out hover:scale-125 z-30"
      >
        <div className="relative">
          <div className="bg-white p-3 rounded-[5px] shadow mb-2">
            ¿Tienes alguna duda?
          </div>
          <img
            src="/planti-v3.webp"
            width={170}
            height={300}
            className="h-auto object-contain"
            alt="planti tu asistente virtual"
          />
        </div>
      </div>
      <ModalComponent
        showModal={showModalAssistant}
        onShowModal={onSetShowModalAssistant}
      >
        <ChatBotAi showModal={showModalAssistant} />
      </ModalComponent>
    </>
  );
};
