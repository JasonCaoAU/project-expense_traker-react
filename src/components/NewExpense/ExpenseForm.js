import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //methid one via using one state
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDated: "",
  //   });

  //   const titleChangeHandler = (e) => {
  //       //method 1
  //     // setUserInput({
  //     //   ...userInput,
  //     //   enteredTitle: e.target.value,
  //     // });
  //     // method2
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredTitle: e.target.value };
  //     });
  //   };
  //   const amountChangeHandler = (e) => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredAmount: e.target.value };
  //     });
  //   };
  //   const dateChangeHandler = (e) => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredDate: e.target.value };
  //     });
  //   };
  //method two via using multiple states
  const [enteredTile, setEnteredTile] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTile(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTile,
      amount: Number(enteredAmount),
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    props.OnSaveExpenseData(expenseData);
    setEnteredTile("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTile}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="1978-01-01"
            max="2222-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel} >Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
