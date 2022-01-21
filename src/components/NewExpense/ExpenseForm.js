import './ExpenseForm.css';
import { useState } from 'react';

function ExpenseForm(props) {
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [openedForm, setOpenedForm] = useState(0);

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const expense = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveData(expense);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    setOpenedForm(0);
  };

  const openFullForm = (e) => {
    e.preventDefault();
    setOpenedForm(1);
  };

  const closeForm = (e) => {
    e.preventDefault();
    setOpenedForm(0);
  };

  if (openedForm === 0) {
    return (
      <form onSubmit={openFullForm}>
        <div className="new-expense__controls"></div>
        <div className="new-expense__actions new-expense__actions-centered">
          <button>Add Expense</button>
        </div>
      </form>
    );
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={closeForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
