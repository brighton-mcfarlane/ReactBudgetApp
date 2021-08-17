import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from 'react';
function Expense(props) {
    const[filteredYear, setFilteredYear] = useState('2020');
    function selectionEventHandler(enteredSelection) {
        setFilteredYear(enteredSelection);
  }
  return (
    <div>
      <Card className="expense">
        <ExpensesFilter selected ={filteredYear} onSelection={selectionEventHandler} />

        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
}
export default Expense;
