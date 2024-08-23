import React, { useState } from 'react';
import './BudgetInput.css'

const BudgetInput = () => {
const [budgetInitialValue, setBudgetInitialValue] = useState(0);

    return (
        <div>
        <input type='number' className='budget-input' defaultValue={budgetInitialValue}/>
        </div>
    )
}

export default BudgetInput;