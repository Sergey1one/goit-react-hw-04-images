
import React, { Component, useState } from "react";
import {  Formik } from 'formik';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {SearchbarComp, SearchBtn, SearchBtnLabel, SearchForm,SearchField} from './Searchbar.styled'


export default function Searchbar(input) {
    const [inputData, setInputData] = useState('');

    const onFormSubmit = () => {
        console.log(input)
    }
    


 return (
            <SearchbarComp>
            <Formik initialValues={{ input: '' }}
            onSubmit={onFormSubmit}> 
                    <SearchForm> 
                         <SearchBtn type="submit">
      <SearchBtnLabel>Search</SearchBtnLabel>
    </SearchBtn>
                        <SearchField type='text' name='input' placeholder='Search images and photos'
                            autoFocus
                        autoComplete='off'></SearchField>
                        
                
</SearchForm>
                </Formik>
                 <ToastContainer
          position="top-center"
autoClose={5000}
theme="colored"/>
                </SearchbarComp>)
}




// class Searchbar23 extends Component {

//     state = {
//         inputData: ''
//     }
    
    
//     onFormSubmit = ({input},{resetForm}) => {
       
//         this.props.onSubmit(input)
//          resetForm();
//     }
//     render() {
//         return (
//             <SearchbarComp>
//             <Formik initialValues={{ input: '' }}
//             onSubmit={this.onFormSubmit}> 
//                     <SearchForm> 
//                          <SearchBtn type="submit">
//       <SearchBtnLabel>Search</SearchBtnLabel>
//     </SearchBtn>
//                         <SearchField type='text' name='input' placeholder='Search images and photos'
//                             autoFocus
//                         autoComplete='off'></SearchField>
                        
                
// </SearchForm>
//                 </Formik>
//                  <ToastContainer
//           position="top-center"
// autoClose={5000}
// theme="colored"/>
//                 </SearchbarComp>)
//     }
// }

// export default Searchbar