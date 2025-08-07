type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const BaseModal = ({ open, onClose, children }: Props) => {
  if (!open) return null;
  return (
    <div
      className="fixed z-[1000] top-0 left-0 min-w-screen  bg-[#000000B2] min-h-screen w-full h-full flex-1  flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative min-w-screen min-h-screen w-full h-full flex justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default BaseModal;
