import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../action/notes'

export const NotesAppBar = () => {

  const dispatch = useDispatch()
  const {active} = useSelector(state=>state.notes)

  const handleSave=()=>{

    dispatch(startSaveNote(active))
  }


  const handlePicture = () =>{
      document.querySelector('#fileSelector').click()
  }
  const handleFileChange = (e) =>{
    const file =e.target.files[0]
    console.log( file)
    if (file) {
      dispatch(startUploading(file))
      
    }
  }


  return (
    <div className='notes__appbar'>
        <span>19 de octubre 2025</span>
        <input 
        type="file"
        style={{display:'none'}}
        onChange={handleFileChange}
        id='fileSelector'
        name='file'
        
        />
        <div>
            <button 
            className='btn'
            onClick={handlePicture}
            >
                Picture
            </button>
            <button 
            className='btn'
            onClick={handleSave}
            >
                Save
            </button>
        </div>
    </div>
  )
}
