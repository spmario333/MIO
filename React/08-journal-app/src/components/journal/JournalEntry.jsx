import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div className='journal__entry-picture' style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(https://i.pinimg.com/originals/6f/2d/74/6f2d74aec2d79085f3c4bea507929fed.jpg)'
            }}></div>
            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    Un nuevo Día
                </p>
                <p className='journal__entry-content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
            </div>
    </div>
  )
}
