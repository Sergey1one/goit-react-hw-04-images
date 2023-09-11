
import  React, {  useState } from "react";
import Searchbar from "./Searchbar";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { fetchImg } from '../services/serviceAPI'
import { AppContainer } from "./App.styled";
import { LoadMoreBtn } from "components/LoadMoreBtn/LoadMoreBtn";
import { Loader } from "./Loader/Loader";


let page = 1;

export default function App() {
  const [searchField, setSearchField] = useState('')
  const [items, setItems] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const[status,setStatus]=useState('idle')
  

  const formSubmitHandler = async inputData => {
    page = 1;
    console.log(inputData)
    if (inputData.trim() === '') {
      toast.error('You cannot search by empty field, try again.');
      return;
    }
    
      try {
        setStatus( 'pending' );
        const { totalHits, hits } = await fetchImg(inputData, page);
        if (hits.length < 1) {
          setStatus( 'idle' );
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        setItems(hits);
        setSearchField(inputData)
        setTotalItems(totalHits)
        setStatus('resolved')
          
            }
      catch (error) {
       setStatus('rejected')  ;
         }
  }

   
  

  const onLoadMore = async() => {
    setStatus( 'pending') ;
    try {
      const { hits } = await fetchImg(searchField, (page += 1));
     
      setItems(prev => [...prev, ...hits]);
      setStatus('resolved')
    
    }
    catch {
      console.log("Error")
    }
    
  }

    if (status === 'idle') {
      return (
        <AppContainer>
          <Searchbar searchField={searchField} onSubmit={formSubmitHandler} />
           <ToastContainer  position="top-center"
autoClose={5000} theme="colored"/>
        </AppContainer>
      )
    }

    if (status === 'pending') {
      return (
       <AppContainer>
          <Searchbar searchField={searchField} onSubmit={formSubmitHandler} />
         
          <ImageGallery galleryItems={items} />
          <Loader/>
        
        </AppContainer> 
      )
    }

    if (status === 'resolved') {
       return (
       <AppContainer>
          <Searchbar searchField={searchField} onSubmit={formSubmitHandler} />
           <ImageGallery galleryItems={items} />
           {totalItems > 12 && totalItems>items.length&&
             <LoadMoreBtn onClick={onLoadMore} /> }
          
        </AppContainer> 
      )
    }

    if (status === 'rejected') {
      return (
         <AppContainer>
          <Searchbar searchField={searchField} onSubmit={formSubmitHandler} />
          <p>SHIT HAPPENS </p>
        </AppContainer> 
      )
    }
    }
  

