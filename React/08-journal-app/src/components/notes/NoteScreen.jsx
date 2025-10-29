import React, { useEffect, useRef } from 'react'
import { NotesAppBar } from './NotesAppBar'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { activeNote, startDeleting } from '../../action/notes'

export const NoteScreen = () => {


  const dispatch = useDispatch();
  const {active:note} = useSelector(state=>state.notes)
  const [formValues,handleInputChange, reset] = useForm(note);
  const {body,title}=formValues
  const activeID = useRef(note.id) //aqui se guarda el id actual y cuando cambie este id sera comparado debajo pero como se usa el useRef se mantiene el id viejo guardado en el activeID
  const url = note.url
  useEffect(() => {
    if(note.id !== activeID.current){ //se usa el useEffect para cuando cambie la nota se actualice el estado 
      reset(note)
      activeID.current=note.id
    }
     
  }, [note, reset])
  

  useEffect(() => {
    dispatch(activeNote(formValues.id,{...formValues}))
  
  }, [formValues, dispatch])
  
   


  const handleDelete = () => {
    
    dispatch(startDeleting(formValues.id))
  }


  return (
    <div className='notes__main-content'>
        
        
        <NotesAppBar/>

        <div className='notes__content'>
            <input 
            type="text"
            placeholder='Some awesome title'
            className='notes__title-input' 
            value={title}
            onChange={handleInputChange}
            name='title'
            />
            

            <textarea 
            placeholder='What happened today'
            className='notes__textarea'
            value={body}
            onChange={handleInputChange}
            name='body'
            ></textarea>

            {
            url 
            &&(<div className='notes__image'>
                <img src={url} alt="imagen" />
            </div>)
            }
        </div>

        <button 
        className='btn btn-danger'
        onClick={handleDelete}
        >
          Delete
          </button>





    </div>
  )
}
