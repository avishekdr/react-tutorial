import style from './Card.module.css';

export function Card(props) {
    return <div className={`mb-1 ${style.card}`}>{props.children}</div>
}
