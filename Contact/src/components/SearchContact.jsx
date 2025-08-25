import React, { useState } from 'react'

export const SearchContact = ({onSearchContact}) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = (event) =>{
        console.log(event.target.value);
        setInputValue(event.target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length<=1) return;
        
        onSearchContact(inputValue.trim());

        setInputValue('');
        

    }




  return (
    <div className='header'>
       <div className="header-content"> 
    <img src='./logo.png' alt='logo ETECSA'/>
    <div className='header-titles'>
  <h1 className="main-title">DIRECTORIO</h1>
  <p>Contactos</p>
  </div>
  </div> 
    <form className='search-form' onSubmit={onSubmit}>
        <input
        type="text" 
        className="search-input"
        placeholder="Buscar Contacto"
        value={inputValue}
        onChange={ (event)=>onInputChange(event) }
        />
    </form>
     
    </div>
  )
}
