import * as ToastPrimitive from "@radix-ui/react-toast";

export const Toast = ({
  title,
  content,
  children,
  open,
  setOpen,
  ...props
}) => {
  return (
    <>
      <ToastPrimitive.Root
        className="ToastPrimitiveRoot"
        open={open}
        onOpenChange={setOpen}
      >
        <ToastPrimitive.Title className="ToastPrimitiveTitle">
          Scheduled: Catch up
        </ToastPrimitive.Title>
        <ToastPrimitive.Description asChild>
          asdasdas
        </ToastPrimitive.Description>
        <ToastPrimitive.Action
          className="ToastPrimitiveAction"
          asChild
          altText="Goto schedule to undo"
        >
          <button className="Button small green">Undo</button>
        </ToastPrimitive.Action>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport className="fixed bottom-0 right-0 flex flex-col p-[25px] gap-2.5 w-[390px] max-w-full m-0 list-none z-[2147483647] outline-none" />
    </>
  );
};
