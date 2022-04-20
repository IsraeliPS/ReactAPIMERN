import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
      <NotesAppBar />

      <div className='notes__content'>
        <input
          type='text'
          placeholder='Some awesome title'
          className='notes__title-input'
        />

        <textarea
          placeholder='What happened today?'
          className='notes__textarea'
        />

        <div className='notes__image'>
          <img
            src='https://encolombia.com/wp-content/uploads/2021/12/Paisaje-Natural.jpg'
            alt='some image'
          />
        </div>

      </div>
    </div>
  )
}
