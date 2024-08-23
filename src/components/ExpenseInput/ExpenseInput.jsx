import React, { useState } from 'react';
import './ExpenseInput.css'

const ExpenseInput = () => {
const [expenseInitialValue, setExpenseInitialValue] = useState(0);

    return (
        <div>
        <input type='number' className='expense-input' defaultValue={expenseInitialValue}/>
        </div>
    )
}

export default ExpenseInput;