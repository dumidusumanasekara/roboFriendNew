import React from 'react';
import Card from './Card';

export const CardList = ({ robots }) => {

    const cardsArray = robots.map((user,i) => {
        return (
            <Card key={robots.id}
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
                street={robots[i].address.street}
                suit={robots[i].address.suite}
                city={robots[i].address.city}
                zipcode={robots[i].address.zipcode}
                />
         );
    })

    return(
        <div>
            {cardsArray}
        </div>
    );
}

export default CardList;