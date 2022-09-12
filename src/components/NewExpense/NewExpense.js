import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm';

export function NewExpense(props) {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, date: new Date(enteredExpenseData.date),
            id: Math.random().toString()
        };
        props.getNewExpense(expenseData);
    };
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}
