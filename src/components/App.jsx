
import  React, { Component } from "react";
import Searchbar from "./Searchbar";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { fetchImg } from '../services/serviceAPI'
import { AppContainer } from "./App.styled";
import { LoadMoreBtn } from "components/LoadMoreBtn/LoadMoreBtn";
import { Loader } from "./Loader/Loader";


let page = 1;

export default class App extends Component{
  state = {
    searchField: '',
    items: [],
    totalHits:0,
    status:'idle'
  }


  

  formSubmitHandler = async inputData => {
    page = 1;
    if (inputData.trim() === '') {
      toast.error('You cannot search by empty field, try again.');
      return;
    }
    
      try {
        this.setState({ status: 'pending' });
        const { totalHits, hits } = await fetchImg(inputData, page);
        if (hits.length < 1) {
          this.setState({ status: 'idle' });
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        
          this.setState({
            items: hits,
            searchField: inputData,
            totalHits: totalHits,
            status: 'resolved',
          });
            }
      catch (error) {
        this.setState({ status: 'rejected' });
         }
  }

   
  

  onLoadMore = async() => {
    this.setState({ status: 'pending' });
    try {
      const { hits } = await fetchImg(this.state.searchField, (page += 1));
      this.setState(prevState => ({
        items: [...prevState.items, ...hits],
        status:'resolved'
     }))
    }
    catch {
      console.log("Error")
    }
    
  }


  render() {
    const { searchField, items, status,totalHits } = this.state;

    if (status === 'idle') {
      return (
        <AppContainer>
          <Searchbar searchField={searchField} onSubmit={this.formSubmitHandler} />
           <ToastContainer  position="top-center"
autoClose={5000} theme="colored"/>
        </AppContainer>
      )
    }

    if (status === 'pending') {
      return (
       <AppContainer>
          <Searchbar searchField={searchField} onSubmit={this.formSubmitHandler} />
         
          <ImageGallery galleryItems={items} />
          <Loader/>
        
        </AppContainer> 
      )
    }

    if (status === 'resolved') {
       return (
       <AppContainer>
          <Searchbar searchField={searchField} onSubmit={this.formSubmitHandler} />
           <ImageGallery galleryItems={items} />
           {totalHits > 12 && totalHits>items.length&&
             <LoadMoreBtn onClick={this.onLoadMore} /> }
          
        </AppContainer> 
      )
    }

    if (status === 'rejected') {
      return (
         <AppContainer>
          <Searchbar searchField={searchField} onSubmit={this.formSubmitHandler} />
          <p>SHIT HAPPENS </p>
        </AppContainer> 
      )
    }
    }
//     return(
    
//       <>
//    <AppContainer>
//           <Searchbar searchField={ searchField}  onSubmit={this.formSubmitHandler}/>

  
          
//           <ImageGallery galleryItems={items} />

//           <button type="button" onClick={this.onLoadMore}>Load more...</button>
//             <ToastContainer
//           position="top-center"
// autoClose={5000}
// theme="colored"/>
//         </AppContainer>
      
    // <GlobalStyle />
    // </>
  //   )
  }
