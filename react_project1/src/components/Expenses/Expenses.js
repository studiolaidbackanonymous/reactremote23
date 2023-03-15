import { React, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  console.log("expenses.js");
  console.log(filteredExpenses);

  return (
    <Card className="expenses">
      <ExpensesFilter
        onSelectedYear={filterChangeHandler}
        selected={filteredYear}
      />
      <ExpensesList filteredItems={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
