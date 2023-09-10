import { ModalWindow, Overlay } from "./Modal.styled"
import { Component } from "react"
import { createPortal } from "react-dom";

const ModalRoot = document.querySelector('#modal-root');


export class Modal extends Component{
    componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown',this.handleKeyDown)
    }

    
    handleKeyDown = (e) => {
        if (e.code === "Escape") {
            this.props.onClose()
        }
    }

    handleBackDropClick = (e) => {
        if (e.target === e.currentTarget) {
            this.props.onClose()
        }
    }

    render() {
        return (createPortal(
             <Overlay  onClick={this.handleBackDropClick}>
            <ModalWindow>
                    {this.props.children}
                   
                
  </ModalWindow>
</Overlay>,ModalRoot
         )
        
    )
    }
}

