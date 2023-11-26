import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../Button";
import { Close, FileLink } from "../icons";
import { useForm } from "react-hook-form";

export function ContactDialog() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button text="Contact us" variant="header" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col w-[600px] p-lg justify-center items-center gap-md rounded-md border-solid border-gray-3 bg-gray-2 shadow-contact">
          <Dialog.Title className="flex self-stretch justify-between items-center">
            <p className="display-xs text-gray-white text-left">
              Contact Support
            </p>
            <Dialog.Close asChild>
              <button>
                <Close />
              </button>
            </Dialog.Close>
          </Dialog.Title>
          <Dialog.Description className="text-sm-regular text-gray-4">
            We appreciate your feedback. It helps us improve our website for a
            better user experience.
          </Dialog.Description>
          <form
            className="flex-col justify-center items-start gap-md"
            onSubmit={handleSubmit(onSubmit)}
          >
            <textarea className="flex w-[536px] h-[160px] px-xs py-xxs items-center rounded-sm border border-solid border-gray-3 resize-none bg-gray-2 text-sm-regular text-gray-white" />
            <label className="flex items-center gap-xxs hover:cursor-pointer">
              <FileLink />
              <p className="text-sm-regular text-gray-4">
                Attach images or files
              </p>
              <input
                type="file"
                name="file"
                {...register("upload", {})}
                hidden
              />
            </label>
            <div className="flex-row justify-between items-start self-stretch  flex-nowrap">
              <p className="caption text-gray-4 ">
                You can also email us at{" "}
                <span
                  className="text-primary hover:cursor-pointer"
                  onClick={() => window.open("mailto:team@keywordsai.co")}
                >
                  team@keywordsai.co.
                </span>
              </p>
              <Button text="Submit" variant="secondary" />
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
