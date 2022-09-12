import './Expenses.css';
import { Card } from '../UI/Card';
import { ExpensesList } from './ExpensesList';
import { ExpenseFilter } from './ExpenseFilter';
import { ExpensesChart } from './ExpensesChart';
import { useState } from 'react';

export function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2022'),
        filterChangeHandler = year => setSelectedYear(year),
        filteredExpense = props.items.filter(expense => { return expense.date.getFullYear().toString() === selectedYear });

    return (
        <Card className="expenses">
            <ExpenseFilter selected={selectedYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpense} />
            <ExpensesList items={filteredExpense} />
        </Card>
    );
}
