import React from 'react';



export const Card = ({ id, name, email, street, suite, city, zipcode}) => {
    return (
        <div  className="w-30 bg-light-green dib tc br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?size=200x200`} alt='Robo' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <div className='tl bg-near-white br3 pa2'>
                    <h3>Address: </h3>
                    <p>Street: {street}</p>
                    <p>Suite: {suite}</p>
                    <p>City: {city}</p>
                    <p>zip: {zipcode}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;