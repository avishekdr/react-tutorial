import { Card } from '../Card/Card';
import { Button } from '../Button/Button';
import style from './ErrorModal.module.css';

export function ErrorModal(props) {
    return (
        <div className={style.backdrop}>
            <div className={style.modal}>
                <Card>
                    <div className={style.message}>{props.message}</div>
                    <div className='text-right'><Button onClick={props.onConfirm}>OK</Button></div>
                </Card>
            </div>
        </div>
    );
}
