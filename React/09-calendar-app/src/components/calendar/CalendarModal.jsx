import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import DateTimePicker from 'react-datetime-picker'
import moment from 'moment'
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { uiCloseModal } from '../../actions/ui';
import { eventAddNew, eventClearActiveEvent, eventUpdated } from '../../actions/events';




const customStyles = {
    content: {
        top             :'50%',
        left            :'50%',
        right           :'auto',
        bottom          :'auto',
        marginRight     :'-50%',
        transform       :'translate(-50%, -50%)'
    }
}

ReactModal.setAppElement('#root')

const now = moment().minutes(0).seconds(0).add(1,'hours') //momento actual , min en 0 , sec en 0 y añadir una hora despues a la hora actual ese es la horade salida
const nowPlus1 = now.clone().add(1,'hours')

const initEvent = {
    title:'',
    notes: '',
    start:now.toDate(),
    end: nowPlus1.toDate(),
  }

export const CalendarModal = () => {

  const dispatch = useDispatch()
  const {modalOpen} = useSelector(state=>state.ui)
  const {active} = useSelector(state=>state.calendar)



  const [titleValid, setTitleValid] = useState(true)
  const [dateStart, setDateStart] = useState(now.toDate())
  const [dateEnd, setDateEnd] = useState(nowPlus1.toDate())
  const [formValues, setFormValues] = useState(initEvent)


  const {title,notes, start, end} = formValues;

  
    useEffect(() => {
      if (active) {
        setFormValues(active)
      }else{
        setFormValues(initEvent)
      }
    }, [active,setFormValues])
    




    const closeModal = () =>{
      dispatch(uiCloseModal())
      dispatch(eventClearActiveEvent())
      setFormValues(initEvent)
    }

    const handleStartDateChange = (e) =>{
      setDateStart(e)
      setFormValues({
        ...formValues,
        start : e
      })
    }

    const handleEndDateChange = (e) =>{
      setDateEnd(e)
      setFormValues({
        ...formValues,
        end : e
      })
    }

    const handleInputChange = ({target})=>{
        setFormValues({
            ...formValues,
        [target.name]:target.value
        })

        
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const momentStart = moment(start)
        const momentEnd = moment(end)

        if (momentStart.isSameOrAfter(momentEnd)) {
            return Swal.fire('Error','La fecha 2 tiene que ser mayor que la 1','error')
        }
        if (title.trim().length<2) {
            setTitleValid(false)
        }
        if (active) {

          dispatch(eventUpdated(formValues))
          
        }else {

          dispatch(eventAddNew({
              ...formValues,
              id: new Date().getTime(),
              user: {
                  _id: '123',
                  name: 'Mario',
              }
          }))

        }

        setTitleValid(true )
        closeModal()

    }




  return (
    <ReactModal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={200}
        className='modal'
        overlayClassName='modal-fondo'
    >
        <h1> {(active)
        ?'Editar evento'
        :'Nuevo Evento'}
         </h1>
            <hr />
            <form 
            className="container"
            onSubmit={handleSubmit}
            >

                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker
                    className='form-control'
                    onChange={handleStartDateChange}
                    value={dateStart}
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker
                    className='form-control'
                    onChange={handleEndDateChange}
                    value={dateEnd}
                    minDate={dateStart} //validar fecha final mayor q inicial
                    />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className= {`form-control ${!titleValid && 'is-invalid'}`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={title}
                        onChange={handleInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={notes}
                        onChange={handleInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
    </ReactModal>
  )
}
