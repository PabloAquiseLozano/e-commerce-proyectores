import { CharacterDetails } from "./CharacterDetails.tsx";

function CharacterPreview() {
  return (
    <div>
      <div className="border rounded-lg w-full mb-5 h-auto p-2">
        <h1 className="text-[1.1em] text-center w-full text-white font-bold mb-3">
          Detalles del pedido
        </h1>
        <CharacterDetails />
      </div>
    </div>
  );
}

export { CharacterPreview };
