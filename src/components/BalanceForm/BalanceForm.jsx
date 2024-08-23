import React from 'react';
import Modal from 'react-modal';
import './BalanceForm.css'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

const BalanceForm = ({ amount, setAmount }) => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const handleSubmit = (event) => {
      event.preventDefault();

      try {
        const value = event.target[0].value;
        setAmount(value)

      } catch (error) {
        console.error(error);
      }
    }
  
    return (
      <div className='balance-form-container'>
        <button className='balance-form-modal-button' onClick={openModal}>Set Starting Budget</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Please Add Budget</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form onSubmit={handleSubmit}>
            <div className='add-budget-container'>
              <input type='number' defaultValue={amount}/>
              <button type='submit'>Add Budget</button>
            </div>
          </form>
        </Modal>
      </div>
    );
}

export default BalanceForm;