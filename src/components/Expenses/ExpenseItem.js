import './ExpenseItem.css';
import { ExpenseDate } from './ExpenseDate';
import { Card } from '../UI/Card';
import { useState } from 'react';
export function ExpenseItem(props) {
    
    const [title, setTitle] = useState(props.title), clickHandler = () => setTitle(String(Math.random()));
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">$ {props.amount}</div>
                <button onClick={clickHandler}>Change</button>
            </div>
        </Card>
    );
}
