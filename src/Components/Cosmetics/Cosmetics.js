import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';



const Cosmetics = () => {
    const cosmetics = [
        {id:1 , name: 'Alta' , price: 100},
        {id:2 , name: 'Nail-polish' , price: 250},
        {id:3 , name: 'fake-nails' , price: 300},
        {id:4 , name: 'Lipstick' , price: 700},
        {id:5 , name: 'eyeshadow' , price: 500},
    ]
    return (
        <div>
            <h1>Welcome to my cosmetics store!</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    key={cosmetic.id}
                    cosmetic = {cosmetic}
                    ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;