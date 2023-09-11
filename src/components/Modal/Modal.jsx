import { ModalWindow, Overlay } from "./Modal.styled"
import { useEffect} from "react"
import { createPortal } from "react-dom";

const ModalRoot = document.querySelector('#modal-root');


export function Modal({children,onClose}) {


    useEffect(() => {
        const  handleKeyDown = (e) => {
        if (e.code === "Escape") {
            onClose()
        }
        } 
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown',handleKeyDown)
        }
    },[onClose])


    const handleBackDropClick = (e) => {
        console.log(onClose)
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    
        return (createPortal(
             <Overlay onClick={handleBackDropClick} >
            <ModalWindow>
                  {children}
                   
                
  </ModalWindow>
</Overlay>,ModalRoot
         )
        
    )
    }



