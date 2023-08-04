import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import Image from "next/image";
import {
  FaBootstrap,
  FaCss3,
  FaExternalLinkAlt,
  FaHtml5,
  FaJs,
  FaPhp,
  FaReact,
  FaShoppingCart,
  FaWordpress,
} from "react-icons/fa";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose, modalContent }: any) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient z-50 h-full !mt-28"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 p-6 gap-6">
          <Image
            src={modalContent.image}
            alt={modalContent.title}
            width={600}
            height={900}
            className="rounded-lg md:col-span-1 w-full"
          />
          <div className="md:col-span-1">
            <div className="">
              <h3 className="h4 mb-4">{modalContent.title}</h3>
              <h4 className="h5 font-thin mb-4">Description</h4>
              <p className="mb-6">{modalContent.description}</p>
              <h4 className="h5 font-thin mb-4">Technologies</h4>
              <div className="flex gap-4 text-4xl mb-6">
                {modalContent.technologies.map((technology: any) => {
                  switch (technology) {
                    case "WordPress":
                      return <FaWordpress />;
                    case "React":
                      return <FaReact />;

                    case "PHP":
                      return <FaPhp />;
                    case "JavaScript":
                      return <FaJs />;
                    case "HTML":
                      return <FaHtml5 />;
                    case "CSS":
                      return <FaCss3 />;
                    case "Bootstrap":
                      return <FaBootstrap />;
                    case "WooCommerce":
                      return <FaShoppingCart />;
                    default:
                      return <p className="mb-6">{technology}</p>;
                  }
                })}
              </div>
              <a
                href={modalContent.url}
                target="_blank"
                className="flex items-center gap-2 text-sm"
              >
                External link <FaExternalLinkAlt />
              </a>
              <button
                className="p-3 px-6 bg-grey-light ml-auto text-black rounded-lg absolute bottom-4 right-4"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
