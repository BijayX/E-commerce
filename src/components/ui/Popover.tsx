const Popover: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  buttonText: string;
}> = ({ isOpen, onClose, title, message, buttonText }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{message}</p>
        <button
          className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-black"
          onClick={onClose}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};
export default Popover;
