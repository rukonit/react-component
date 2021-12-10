import ExpenseForm from "./ExpenseForm";
import react, { useState } from "react";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [formVisibility, setFormVisibility] = useState(true);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    props.onNewExpense(expenseData);
  };

  const toggleForm = () => {
    setFormVisibility(!formVisibility);
  };

  return (
    <div className="new-expense">
      {formVisibility ? (
        <button onClick={toggleForm}>Added New Expense</button>
      ) : (
        <ExpenseForm
          onToggle={toggleForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
