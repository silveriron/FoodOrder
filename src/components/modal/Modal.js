import ReactDOM from "react-dom";
import style from "./Modal.module.css";

const Backdrop = () => {
  return <div className={style.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={style.overlay}>
      <div>{props.children}</div>
    </div>
  );
};

const potalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, potalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        potalElement
      )}
    </>
  );
};

export default Modal;
