import Modal from "./Modal";
import { useContext, useState } from "react";
import { CartContext } from "../store/CartContext";
import FormInput from "./FormInput";
import UserProgressContext from "../store/UserProgressContext";
import { BASE_URL } from "../utilities/cosntant";
import Cart from "./Cart";


function CheckOut()
{
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        street: '',
        zip: '',
        city: '',
    });
    const handleChange=(event)=>
    {
        const {name, value} = event.target;
        setFormData((prevData)=>(
            {
                ...prevData,
                [name] : value,
             }
        )

        )
    }

    const handleSubmit = ()=>
    {
        event.preventDefault();
        try
        {
            const response = fetch(`${BASE_URL}/api/orders`, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({items: cartCtx.items, customer: formData})} )

        }
        catch(error)
        {
            console.log(error)
        }

    }

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
                <FormInput label='Full Name' type='text' id='fullName' onChange={handleChange} value={formData.fullName}/>
                <FormInput label='Email-Address' type='email' id='email' onChange={handleChange} value={formData.email} />
                <FormInput label='Street' type='text' id='street' onChange={handleChange} value={formData.street} />
                <div className="row">
                    <FormInput label='Zip Code' type='text' id='zip' onChange={handleChange} value={formData.zip} />
                    <FormInput label='City' type='text' id='city'  onChange={handleChange} value={formData.city} />
                </div>
                <p className="modal-actions">
                    <button onClick={handleClose}>Close</button>
                    <button type="submit" onSubmit={handleSubmit}>Submit</button>
                </p>

            </form>
        </Modal>
    );

}

export default CheckOut;