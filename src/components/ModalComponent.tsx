import React from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

interface Props {
  showModal: boolean;
  onShowModal: () => void;
  children: React.ReactNode;
}

export const ModalComponent = ({ showModal, onShowModal, children }: Props) => {
  return (
    <Dialog
      open={showModal}
      onClose={() => onShowModal()}
      className="relative z-40 w-[80%]"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="block sm:flex w-full min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative w-auto sm:w-full mx-6 transform overflow-hidden rounded-lg bg-gray-700 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="w-full mt-3 text-center sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-white font-semibold flex justify-center items-center gap-2 text-[1.5em] mb-3"
                  >
                    <img
                      src="/avatar.jpg"
                      alt="avatar"
                      className="w-[50px] h-[50px] rounded-full object-cover"
                    />{" "}
                    <span className="text-[1.5em]">Mary</span>
                  </DialogTitle>
                  <div className="w-full">{children}</div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
