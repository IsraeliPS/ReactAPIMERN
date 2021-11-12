// import React, { Fragment } from 'react'
import React from 'react'
import PropTypes from 'prop-types'

const PrimeraApp = ({saludo, subtitulo}) => {
    // const saludo ="Hola koders"
    
    return (
        <>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </>
        )
}
PrimeraApp.protoTypes={
    saludo:PropTypes.string.isRequired
}
PrimeraApp.protoTypes={
    subtitulo:"subtitulo"
}
export default PrimeraApp;