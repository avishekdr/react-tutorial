import { useState } from 'react';
import './ExpenseForm.css';

export function ExpenseForm(props) {
    const [userInput, setUserInput] = useState({ title: '', amount: 0, date: '' }),
        titleChangeHandler = (event) => setUserInput((prevState) => { return { ...prevState, title: event.target.value } }),
        amountChangeHandler = (event) => setUserInput((prevState) => { return { ...prevState, amount: event.target.value } }),
        dateChangeHandler = (event) => setUserInput((prevState) => { return { ...prevState, date: event.target.value } });

    const submitHandler = (event) => {
        event.preventDefault();
        props.onSaveExpenseData(userInput);
        setUserInput({title:'',amount:0,date:''});
    };

    return (
        <form onSubmit={submitHandler}>
            {JSON.stringify(userInput)}
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={userInput.title} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={userInput.amount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-01-01" value={userInput.date} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
