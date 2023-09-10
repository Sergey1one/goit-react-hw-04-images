import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"
import { ImageGalleryContainer } from "./ImageGallery.styled"


export const  ImageGallery =({galleryItems})=>{


   
    return (<ImageGalleryContainer>{galleryItems.map(item => {
        return (
            <ImageGalleryItem key={ item.id} item={item} />
    )})}
          
      
</ImageGalleryContainer>)
    }
