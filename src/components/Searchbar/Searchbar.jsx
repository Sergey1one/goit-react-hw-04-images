
import React, {useState} from "react";

import { toast, ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {SearchbarComp, SearchBtn, SearchBtnLabel, SearchForm,SearchField} from './Searchbar.styled'


export default function Searchbar({ onSubmit }) {
    const [inputData, setInputData] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (inputData.trim() === '') {
           return   toast("😱 Try to type something ")
           
}
        onSubmit(inputData);
        setInputData('')
    }

    const changeQuery = ({target}) => {
        setInputData(target.value)
    }
    


 return (
     <SearchbarComp>
         <SearchForm onSubmit={onFormSubmit}>
             <SearchBtn type="submit">
      <SearchBtnLabel>Search</SearchBtnLabel>
    </SearchBtn>  
         
             <SearchField type='text'
                 name='input'
                 placeholder='Search images and photos'
                 autoFocus
                 value={inputData}
                 onChange={changeQuery}
                 autoComplete='off'></SearchField>
         </SearchForm>
         <ToastContainer/>
         </SearchbarComp>)
          
                
}




