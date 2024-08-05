import { useContext } from "react";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./Modal";
import successIcon from "../assets/success.svg";
import errorIcon from "../assets/error.svg";

function PopUpModal() {
  const handleClose = () => {
    if (userCtx.progress === "success") {
      window.location.reload();
    }
    else
    {
        userCtx.hideCheckOut();

    }
    
  };
  const userCtx = useContext(UserProgressContext);
  return (
    <Modal
      active={userCtx.progress === "success" || userCtx.progress === "fail"}
      onClose={
        userCtx.progress === "success" || userCtx.progress === "fail"
          ? handleClose
          : null
      }
    >
      <p className={userCtx.progress === 'success' ? 'successful' : 'fail'}>
        {userCtx.progress === 'success' ? <img
          className="successful-checkout"
          src={successIcon}
          alt={userCtx.progress}
        />: <img className="fail-checkout" src={errorIcon} alt={userCtx.progress}/>}
      </p>

      <h2 className="checkout-status">
        Your checkout was{" "}
        {userCtx.progress === "success" ? "successful." : "unsuccessful."}
      </h2>
      <p className="pop-up-button"><button onClick={handleClose}>Close</button></p>
      
    </Modal>
  );
}

export default PopUpModal;
