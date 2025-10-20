import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
        
        
        <NotesAppBar/>

        <div className='notes__content'>
            <input 
            type="text"
            placeholder='Some awesome title'
            className='notes__title-input' />

            <textarea 
            placeholder='What happened today'
            className='notes__textarea'
            ></textarea>

            <div className='notes__image'>
                <img src="https://www.uteca.edu.mx/wp-content/uploads/2025/05/mi-vecino-totoro-5053-scaled.webp" alt="imagen" />
            </div>
        </div>





    </div>
  )
}
