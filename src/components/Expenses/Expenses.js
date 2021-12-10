import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import React, { useState } from "react";
import "../Expenses/Expenses.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  //.
  const filterChangeHandler = (filterYear) => {
    setSelectedYear(filterYear);

   };

  const filteredExpeses = props.items.filter((item) => {
    return item.date.getFullYear() == selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        <ExpenseChart expenses={filteredExpeses} />
        <ExpensesList items={filteredExpeses} />
      </Card>
    </div>
  );
};

export default Expenses;
