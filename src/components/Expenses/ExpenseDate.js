import { Card } from '../UI/Card';
import './ExpenseDate.css';

export function ExpenseDate(props) {
    const [month, date, year] = [
        props.date.toLocaleString('en-US', { month: 'long' }),
        props.date.toLocaleString('en-US', { day: '2-digit' }),
        props.date.getFullYear()
    ];
    return (
        <Card className="expense-date">
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{date}</div>
            <div className='expense-date__year'>{year}</div>
        </Card>
    );
}
