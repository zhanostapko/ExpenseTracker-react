import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return props.items.map((item) => (
    <ul className="expenses-list">
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    </ul>
  ));
};

export default ExpensesList;
