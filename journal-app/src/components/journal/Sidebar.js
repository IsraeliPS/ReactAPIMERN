import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth'

import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(startLogout())
  }

  return (
    <aside className='journal__sidebar'>
      <div className='journal__sidebar-navbar'>
        <h3>
          <i className='fas fa-moon' />
          <span> Israeli</span>
        </h3>

        <button
          className='btn'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className='journal__new-entry'>
        <i className='far fa-calendar-plus fa-5x' />
        <p>New Entry</p>
      </div>

      <JournalEntries />

    </aside>
  )
}
