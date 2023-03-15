import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const intialExpenses = [];

const App = () => {
  const [expenses, setExpenses] = useState(intialExpenses);
  // //under the hood ref
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement(Expenses, { expenses: expensesItems })
  // );

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevState) => {
      return [newExpense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
