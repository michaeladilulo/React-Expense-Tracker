import { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import BalanceForm from './components/BalanceForm/BalanceForm'
import ExpenseInput from './components/ExpenseInput/ExpenseInput'
import BudgetInput from './components/BudgetInput/BudgetInput'
import './App.css'

function App() {
  const [amount, setAmount] = useState(() => {
    const data = window.localStorage.getItem('EXPENSE_APP');
    return data ? JSON.parse(data) : 0;
  })

  useEffect(() => {
    window.localStorage.setItem('EXPENSE_APP', JSON.stringify(amount))
  }, [amount]);

  return (
    <>
      <NavBar />
      <div className='application-container'>
        <div className='application-container-elements'>
          <h2>Best Budget Tracker In Tech</h2>
          <div className='application-container-subheader'>
            <h3>Expense Tracker</h3>
          </div>
            <div className='modal-balance-form-container'>
              <div className='budget-amount-container'>
                <p className='budget-amount-title'>Budget:</p>
                <span className='budget-amount'>$</span><span className='budget-amount'>{amount}</span>
              </div>
              
              <BalanceForm amount={amount} setAmount={setAmount}/>
            </div>
      <div className='expense-budget-input-container'>
        <ExpenseInput />
        <BudgetInput />
        </div>
        </div>
      </div>
    </>
  )
}

export default App
