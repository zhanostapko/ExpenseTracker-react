import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
  const dataSaveHandler = (enteredExpenseSaveData) => {
    const expenseData = {
      ...enteredExpenseSaveData,
      id: Math.random().toString(),
    };
    props.onSavedDataApp(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={dataSaveHandler}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
