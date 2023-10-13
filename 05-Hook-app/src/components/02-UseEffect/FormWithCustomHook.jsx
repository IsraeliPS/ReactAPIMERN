import React, { useEffect } from 'react'
import { useForm } from '../../Hooks/useForm'
import '../styles.css'

export const FormWithCustomHook = () => {
  const {name, email, password , onInputChange, onResetForm} = useForm({
    name: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    console.log('email cambio')
  }, [email])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
      <hr />
      <div className='form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Tu nombre'
          autocomplete='off'
          value={name}
          onChange={onInputChange}
        />
        <input
          type='text'
          name='email'
          className='form-control'
          placeholder='Tuemail@gmail.com'
          autocomplete='off'
          value={email}
          onChange={onInputChange}
        />
        <input
          type='password'
          name='password'
          className='form-control'
          placeholder='*******'
          autocomplete='off'
          value={password}
          onChange={onInputChange}
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Guardar
      </button>
    </form>
  )
}
