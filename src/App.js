import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";
import uuid from "uuid/v4";

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "car payment", amount: 400 },
  { id: uuid(), charge: "credit card bill", amount: 1200 }
];

const App = () => {
  // State values
  const [expenses, setExpenses] = useState(initialExpenses);

  const [charge, setCharge] = useState("");

  const [amount, setAmount] = useState("");

  //Functionality
  const handleCharge = e => {
    console.log(`charge:${e.target.value}`)
    setCharge(e.target.value);
  };
  const handleAmount = e => {
    console.log(`amount:${e.target.value}`) 
    setAmount(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <Alert />
      <h1> Budget Calculator </h1>
      <div>
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
        <ExpenseList expenses={expenses} />
      </div>
      <h1>
        Total Spending:{" "}
        <span>
          $
          {expenses.reduce((acc, curr) => {
            return acc + curr.amount;
          }, 0)}
        </span>
      </h1>
    </div>
  );
};

export default App;
