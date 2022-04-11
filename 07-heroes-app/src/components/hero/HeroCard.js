import React from 'react'
import { Link } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages'

export const HeroCard = ({ id, superhero, publisher, alterEgo, firstAppearance, characters }) => {
  return (
    <div className='col animate__animated animate__pulse'>
      <div className='card'>
        <div className='row no-gutters '>
          <div className='col-4'>
            <img src={heroImages(`./${id}.jpg`)} className='card-img ' alt={superhero} />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>{superhero}</h5>
              <p className='card-text'>{alterEgo}</p>
              {
                  (alterEgo !== characters) &&
                    <p className='text-muted'>{characters}</p>
              }
              <p className='card-text'>
                <small className='text-muted'>{firstAppearance}</small>
              </p>
              <Link to={`/hero/${id}`}>
                Más...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
