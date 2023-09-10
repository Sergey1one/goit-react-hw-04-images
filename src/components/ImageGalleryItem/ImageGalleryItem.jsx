import { Modal } from "components/Modal/Modal";
import { Component, useState } from "react"
import { ImageContainer,Image, ImageModal } from "./ImageGalleryItem.styled";


export default function ImageGalleryItem({item}) {
    const [showModal, setShowModal] = useState(false);
const { webformatURL, tags,largeImageURL } = item

    const toggleModal=() => {
      console.log(`b ${showModal}`)
        setShowModal(!showModal)
        console.log(showModal)
       
    }
 return (
            <>
                <ImageContainer>
                    <Image src={webformatURL} alt={tags} onClick={ toggleModal} />   
                    
                    {showModal && <Modal onClose={toggleModal}  >
                        <ImageModal src={largeImageURL} alt={tags} /></Modal>
                        }
                </ImageContainer>

            </>
        )    
    
}



class OLDImageGalleryItem extends Component {

    state = {
        showModal: false,
    }

    toggleModal = () => {
    this.setState(({showModal})=>({showModal:!showModal}))
}

    render() {
        const{showModal}=this.state
        const { item } = this.props;
        const { webformatURL, tags,largeImageURL } = item
        return (
            <>
                <ImageContainer>
                    <Image src={webformatURL} alt={tags} onClick={ this.toggleModal} />   
                    
                    {showModal && <Modal onClose={this.toggleModal}  >
                        <ImageModal src={largeImageURL} alt={tags} /></Modal>
                        }
                </ImageContainer>

            </>
        )
    }

}

// export default ImageGalleryItem