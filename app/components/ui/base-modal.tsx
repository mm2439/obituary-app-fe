type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const BaseModal = ({ open, onClose, children }: Props) => {
  if (!open) return null;
  return (
    <div
      className="fixed z-[1000] top-0 left-0 w-screen  bg-[#000000B2] h-screen  flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative mx-auto max-w-[1280px] flex justify-center items-center w-full h-full mobile:w-[360px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-[#E7EEF3] rounded-[16px] p-[24px] max-w-full  max-h-[90vh] overflow-auto shadow-lg">
          <button
            type="button"
            aria-label="Zapri"
            onClick={onClose}
            className="absolute top-4 right-4 z-10"
            style={{ background: "none", border: "none", padding: 0 }}
          >
            <img
              src="/circle_cross.png"
              alt="Zapri"
              className="w-[32px] h-[32px] cursor-pointer"
            />
          </button>
          <div className="w-full h-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BaseModal;
