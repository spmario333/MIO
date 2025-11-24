import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Navbar } from '../ui/Navbar'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { messages } from '../../helpers/calendar-messages-es'
import { CalendarEvent } from './CalendarEvent'
import { CalendarModal } from './CalendarModal'
import { useDispatch, useSelector } from 'react-redux'
import { uiOpenModal } from '../../actions/ui'
import { eventClearActiveEvent, eventSetActive, eventStartLoading } from '../../actions/events'
import { AddNewFab } from '../ui/AddNewFab'
import { DeleteEventFab } from '../ui/DeleteEventFab'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/es'

moment.locale('es')
const localizer = momentLocalizer(moment)

// const events = [{
//   title: 'cumpleaños del jefe',
//   start:moment().toDate(),
//   end: moment().add(2,'hours').toDate(),
//   bgcolor: '#fafafa',
//   note:'Comprar cake',
//   user:{
//     _id: '123',
//     name:'Mario'

//   }
// }]




export const CalendarScreen = () => {


  const dispatch = useDispatch()
  const { events, active } = useSelector(state => state.calendar)
  const { uid } = useSelector(state => state.auth)

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')

  useEffect(() => {

    dispatch(eventStartLoading())

  }, [dispatch])


  const onDoubleClick = (e) => {
    dispatch(uiOpenModal())
  }

  const onSelectEvent = (e) => {

    dispatch(eventSetActive(e))
  }
  const onViewChange = (e) => {

    setLastView(e)
    localStorage.setItem('lastView', e) //esta funcionalidad esta guardada en una prop q el evento es guardar la vista q cambio por ejemplo si quieres ver el calendario por semana cambias a semana y el evento te devuelve en consola por ejemplo week,.... al guardar el localstorage sabemos cual fue la ultima vista
  }

  const eventStyleGetter = (event, start, end, isSelected) => {

    const style = {
      backgroundColor: (uid === event.user._id) ? '#367CF7' : '#3c3c4dff',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white'
    }


    return {
      style
    }
  }

  const onSelectSlot = (e) => {
    dispatch(eventClearActiveEvent())
  }




  return (
    <div className='calendar-screen'>
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onSelectSlot={onSelectSlot}
        selectable={true}
        onView={onViewChange}
        view={lastView}
        components={{
          event: CalendarEvent
        }}
      />
      {(active) &&

        <DeleteEventFab />}
      <AddNewFab />
      <CalendarModal />
    </div>
  )
}


