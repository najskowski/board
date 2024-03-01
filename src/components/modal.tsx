type ModalProps = {
  title: string;
  children: React.ReactNode;
}

export const LinksModal = ({ title, children }: ModalProps) => {
  return (
    <div className="absolute left-0 top-0 w-screen h-screen bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div className="p-5 rounded-md border border-neutral-800 bg-neutral-900">
        <h1 className="font-bold text-xl">{title}</h1>
        <div className="mt-3">
          {children}
        </div>
      </div>
    </div>
  );
};
