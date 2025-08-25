
import React, { useState } from 'react';
import { SearchContact } from './SearchContact';
import { contact } from '../data/contact';


//componente de contactos 

export const ContactGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showEmergency, setShowEmergency] = useState(false); // Nuevo estado
  const [selectedCenter, setSelectedCenter] = useState('');
  const [codigo, setCodigo] = useState('');
  
 
  

//manejo de la busqueda 
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
    setShowEmergency(false); // Ocultar emergencias al realizar nueva búsqueda
  };
  

  
  const getFilteredContacts = () => {
    if(!searchTerm.trim()) return contact;

    return contact.filter(contact => {
      return (
        contact.name.toLowerCase().includes(searchTerm) || 
        (contact.firstNum && contact.firstNum.includes(searchTerm)) ||
        (contact.secondNum && contact.secondNum.includes(searchTerm)) ||
        (contact.center.toLowerCase().includes(searchTerm))
      )
      
    });
  };

  const getEmergencyContact = () => {
    return contact.filter(contact => contact.jefe === true && contact.center===selectedCenter && contact.id!==codigo );
  }

  const filteredContacts = getFilteredContacts();
  const emergencyContacts = getEmergencyContact();

  return (
    <>
      <SearchContact onSearchContact={handleSearch} />
      
      
      
      {/* Lista principal de contactos filtrados */}
      {<div className="contact-grid">
        {filteredContacts.map(contact => (
          <div key={contact.id} className="contact-card" onClick={() =>  (setSelectedCenter(contact.center),setCodigo(contact.id))}>
            <h3>{contact.name}</h3>
            <p>Teléfono: {contact.firstNum}</p>
            <p>Fijo: {contact.secondNum}</p>
            <p>Unidad Org: {contact.center}</p>
            <p>Cargo: {contact.position}</p>
            <p>Identificador: {contact.id}</p>
            <p>
             Correo: <a href={`mailto:${contact.user}`+'@etecsa.cu'} className="email-link">{contact.user}</a>
            </p>

       {/* Botón para mostrar/ocultar contactos de emergencia */}
      <button id="btn-abrir-modal" onClick={() => setShowEmergency(!showEmergency)}>
        {showEmergency ? 'Ocultar' : 'Mostrar'} Contactos de Emergencia
      </button>
        



      
     



          </div>
        ))}
         {     
         
        
         
        showEmergency && (
          <div className='container-modal'>
        <dialog open id='modal' className="emergency-grid">

          <h2>Contactos de Emergencia</h2>
          <button id="btn-cerrar-modal" onClick={() => setShowEmergency(!showEmergency)}>
              {showEmergency ? 'Ocultar' : 'Mostrar'} Contactos
              </button> 
          {emergencyContacts.map(contact => (
            <div key={`emergency-${contact.id}`} className="emergency-card">
              <h3>{contact.name}</h3>
              {contact.firstNum && <p>Teléfono: {contact.firstNum}</p>}
              {contact.secondNum && <p>Fijo: {contact.secondNum}</p>}
              <p>Unidad Org: {contact.center}</p>
              <p>Cargo: {contact.position}</p>
              <p>Identificador: {contact.id}</p>
              <p>
             Correo: <a href={`mailto:${contact.user}`+'@etecsa.cu'} className="email-link">{contact.user}</a>
            </p>
              
            


            </div>
          ))}
        
        </dialog>
        </div>
      )}
        
        {filteredContacts.length === 0 && (
          <p>No se encontraron contactos con "{searchTerm}"</p>
        )}
      </div>}
    </>
  );
};