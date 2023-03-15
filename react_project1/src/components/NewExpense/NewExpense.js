import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpenses = (props) => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };

  const OpenFormHandler = () => {
    setIsOpenForm(true);
  };

  const closeFormHandler = () => {
    setIsOpenForm(false);
  };

  return (
    <div className="new-expense">
      {!isOpenForm && (
        <button onClick={OpenFormHandler}>Add New Expense</button>
      )}
      {isOpenForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={closeFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpenses;
