import React from 'react';
import { add, multiply, sub } from '../../utilities/calculate';

const Shoes = () => {
    const first = 12;
    const second = 13;
    const sum = add(first, second);
    const multiplication = multiply(first, second);
    return (
        <div>
            <h3>This is Shoes Compo</h3>
            <p>ADD: {sum}</p>
            <p>Multiplication : {multiplication}</p>

        </div>
    );
};

export default Shoes;