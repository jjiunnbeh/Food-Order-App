import { useEffect, useRef } from 'react';
import {createPortal} from 'react-dom';


function Modal({children, active, onClose, className = '' })
{
    const dialogRef = useRef();
    useEffect(() => {
        const modal = dialogRef.current;
        if(active)
        {
            modal.showModal();
        }
        return () => modal.close();

    }   , [active]);

    return createPortal(
        <dialog ref={dialogRef} className={`modal ${className}`} onClose={onClose}>
            {children}
        </dialog>,
        document.getElementById('modal')
    );

}

export default Modal;