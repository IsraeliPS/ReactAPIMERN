import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
      <div
        className='journal__entry-picture'
        style={{
          backgroundImage: 'url(https://laderasur.com/content/uploads/2020/11/payachatas-desde-chucuyo-atardecer-c.gif)',
          backgroundSize: 'cover'
        }}
      />
      <div className='journal__entry-body'>
        <p className='journal__entry-title'>
          Un nuevo día
        </p>
        <p className='journal__entry-content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className='journal__entry-date-box'>
        <span> Monday</span>
        <h4>28</h4>
      </div>
    </div>
  )
}
