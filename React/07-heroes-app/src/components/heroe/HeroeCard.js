import React from 'react'
import { Link } from 'react-router-dom'


export const HeroeCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
  return (
    <div className='col animate__animated animate__pulse'>
        
        <div className='card'>
            
            <div className='row no-gutters'>

                <div className='col-4'>
                
                    <img src={`/assets/${id}.jpg`} className='card-img' alt={superhero}/>

                </div>

                <div className='card-body'>

                    <h5 className='card-title'>{superhero}</h5>
                    <p className='card-text'>{alter_ego}</p>

                    {
                    
                    (alter_ego !== characters) && <p className='text-muted'>{characters}</p>
                    
                    }

                    <p className='card-text'>
                        <small className='text-muted'> {first_appearance} </small>
                    </p>    

                    <Link to={`/heroes/${id}`} >Mas...</Link>


                </div>


            </div>

        </div>

    </div>
  )
}
