import { useCallback, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

type ToastProps = {
  message: string;
  isError: boolean;
  close: () => void;
};

const Toast: React.FC<ToastProps> = ({ message, isError, close }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      close();
    }, 4000);

    return () => clearTimeout(timer);
  }, [close]);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (isVisible && e.target instanceof Element) {
        if (!e.target.closest(".toast-container")) {
          close();
        }
      }
    },
    [isVisible, close] // Include isVisible and close in the dependency array
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div
      className={`fixed bottom-5 right-5 p-3 rounded-md shadow-md bg-white border border-black z-50 gap-5`}
    >
      <div className="flex justify-between items-center">
        <div className={`text-${isError ? "red" : "green"}-500 mx-5`}>{message}</div>
        <button onClick={close} className="text-black hover:text-gray-800">
          <MdClose />
        </button>
      </div>
    </div>
  );
};

export default Toast;
