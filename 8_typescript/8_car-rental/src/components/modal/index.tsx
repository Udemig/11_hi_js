import { FC } from "react";
import { ICar } from "../../types";
import Images from "./images";
import formatData from "../../utils/formatData";
import { motion, AnimatePresence } from "motion/react";

type Props = {
  isOpen: boolean;
  car: ICar;
  close: () => void;
};

const Modal: FC<Props> = ({ isOpen, car, close }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] grid place-items-center z-20">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.1, opacity: 0 }}
            className="bg-white p-6 relative max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto"
          >
            <button
              onClick={close}
              className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full"
            >
              <img src="/close.svg" alt="X" />
            </button>

            {/* fotoğraflar */}
            <Images car={car} />

            {/* bilgiler */}
            {formatData(car).map(([key, value]) => (
              <p className="flex justify-between gap-20">
                <span className="capitalize">{key}</span>
                <span className="font-semibold capitalize">
                  {value === "Y" ? "Yes" : value == "No" ? "Yok" : value || "-"}
                </span>
              </p>
            ))}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
