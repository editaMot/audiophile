import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { useClickOutside } from "../../hooks/useClickOutside.js";
import "./Modal.scss";

const ModalContext = createContext();

const Modal = ({ children }) => {
  const [openName, setOpenName] = useState("");
  const location = useLocation();

  const closeModal = () => setOpenName("");

  useEffect(() => {
    closeModal();
  }, [location.pathname]);

  const openModal = (name) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ openName, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ children, opens: opensWindowName }) => {
  const { openModal } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => openModal(opensWindowName) });
};

const Window = ({ children, name, centered = false }) => {
  const { openName, closeModal } = useContext(ModalContext);

  const ref = useClickOutside(closeModal, centered);

  if (name !== openName) return null;

  return createPortal(
    <div className="overlay">
      <div className={`modal ${centered && "center"}`} ref={ref}>
        <div className="content">
          {cloneElement(children, { onCloseModal: closeModal })}
        </div>
      </div>
    </div>,
    document.body
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
