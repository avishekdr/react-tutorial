import './ExpenseItem.css';

export function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>Date</div>
            <div className="expense-item__description">
                <h2>Car Insuarance</h2>
                <div className="expense-item__price">$ 200</div>
            </div>
        </div>
    );
}