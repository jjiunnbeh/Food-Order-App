import Modal from "./Modal";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import FormInput from "./FormInput";
import UserProgressContext from "../store/UserProgressContext";


function CheckOut()
{
    const cartCtx = useContext(CartContext);
    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
      );
    const userProgressContext = useContext(UserProgressContext)
    const handleClose = ()=>
      {
        userProgressContext.hideCheckOut();
      }

    return (
        <Modal active={userProgressContext.progress === 'checkout'} onClose={handleClose}>
            <form>
                <h2>CheckOut</h2>
                <p>Total: S$ {cartTotal}</p>
                <FormInput label='Full Name' type='text' id='full-name' />
                <FormInput label='Email-Address' type='email' id='email'/>
                <FormInput label='Street' type='text' id='street' />
                <div>
                    <FormInput label='Zip Code' type='text' id='zip'/>
                    <FormInput label='City' type='text' id='city' />
                </div>

                <p className="modal-actions">
                    <button onClick={handleClose}>Close</button>
                    <button type="submit" onSubmit={()=>{}}>Submit</button>
                </p>

            </form>
        </Modal>
    );

}

export default CheckOut;