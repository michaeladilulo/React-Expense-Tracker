import NavBar from './components/NavBar/NavBar';
import BalanceForm from './components/BalanceForm/BalanceForm'
import './App.css'

function App() {

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
                <span className='budget-amount'>$</span><span className='budget-amount'>0</span>
              </div>
              
              <BalanceForm />
            </div>
        </div>
      </div>
    </>
  )
}

export default App
