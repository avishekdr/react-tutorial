import './Expenses.css';
import { Card } from '../UI/Card';
import {ExpenseItem} from './ExpenseItem';
import { ExpenseFilter } from './ExpenseFilter';
import { useState } from 'react';

export function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2022'),
        filterChangeHandler = year => setSelectedYear(year),
        filteredExpense = props.items.filter(expense => { return expense.date.getFullYear().toString() === selectedYear});

    return (
        <Card className="expenses">
            <ExpenseFilter selected={selectedYear} onChangeFilter={filterChangeHandler} />
            {
                filteredExpense.length === 0 ? <p>No items found</p> :
                filteredExpense.map(item =>
                    <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
                )
            }
        </Card>
    );
}
