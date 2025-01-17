import { useState } from "react";
import { ChatBotAi } from "@/components/ChatBotAi.tsx";
import { ModalComponent } from "@/components/ModalComponent.tsx";
import { Button } from "@headlessui/react";
import { Products } from "@/data-list";

function App() {
  const [showModalAssistant, setShowModalAssistant] = useState<boolean>(false);

  const onSetShowModalAssistant = () =>
    setShowModalAssistant(!showModalAssistant);

  return (
    <main className="w-[100vw] h-[100svh]">
      <div
        onClick={() => onSetShowModalAssistant()}
        className="fixed bottom-[7%] right-[5%] cursor-pointer transition ease-in-out hover:transition hover:ease-in-out hover:scale-125"
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
      <div
        id="card-header"
        className="w-full h-[4em] shadow flex justify-between place-items-center bg-neutral-900 text-white"
      >
        <div className="flex items-center justify-start gap-[1em] px-4 sm:px-10">
          <img
            src="/logo.png"
            alt="logo"
            width={70}
            height={30}
            className="object-contain"
          />
          <span className="text-[1.5em]">Eterna verde</span>
        </div>
        <div className="p-6">
          <ul className="list-none hidden sm:flex justify-end gap-[1em]">
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Productos</li>
            <li>Contacto</li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[70vh] bg-gray-200 grid grid-cols-[1fr,auto] px-10 sm:px-20">
        <div className="w-full h-full flex flex-col justify-center">
          <div className="texts mb-6">
            <h1 className="text-[3em] font-bold leading-[1.2em]">
              Las mejores plantas
            </h1>
            <h2 className="text-[2em]">Para tu hogar</h2>
          </div>
          <div className="btn">
            <Button className="flex min-w-[200px] text-center bg-green-600 rounded-full p-3 px-10 text-white">
              Ver productos
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/plantas1.png"
            alt="banner plantas"
            width={450}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
      <div className="w-full p-6 mb-[2em]">
        <div className="title">
          <h2 className="text-[3em] font-bold text-center mb-8">
            Nuestro productos
          </h2>
        </div>
        <div className="w-[80%] m-auto flex justify-center flex-wrap gap-6">
          {Products.map((product, index) => (
            <div
              key={index}
              className="card bg-gray-200 p-3 rounded-[1em] w-[280px] h-[280px] grid grid-rows-[auto,1fr]"
            >
              <div>
                <img
                  src={product.img}
                  alt="plantas"
                  className="w-full h-[170px] object-cover"
                />
              </div>
              <div className="title flex justify-between items-center">
                <span className="font-medium text-[1.1em]">{product.name}</span>
                <span className="font-bold text-[1.2em] text-green-600">
                  S/ {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="w-full h-auto py-4 bg-neutral-900 text-white grid place-items-center">
        <div className="w-[80%] m-auto flex justify-between items-center flex-wrap gap-6">
          <div>CopyRight 2025 - Eterna verde</div>
          <div>
            Desarrollado por <strong>Los libertadores fabio y mirella</strong>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
