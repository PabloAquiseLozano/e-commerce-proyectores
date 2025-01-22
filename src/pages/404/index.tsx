import { useNavigate } from "react-router";
import { Button } from "@headlessui/react";

export const Page404 = () => {
  const navigate = useNavigate();

  const navigateToInitialPage = () => navigate("/");

  return (
    <div className="w-full min-h-[100svh] grid place-items-center">
      <div className="m-auto w-auto h-auto flex flex-col justify-center items-center gap-2">
        <h1 className="text-[4em] font-bold">404</h1>
        <p className="text-[1.2em] font-light mb-3">
          Lo sentimos, la página que visitaste no existe.
        </p>
        <Button
          type="button"
          onClick={() => navigateToInitialPage()}
          className="bg-primary text-white px-4 py-2 rounded-[.5em]"
        >
          Ir a pagina de inicio
        </Button>
      </div>
    </div>
  );
};
