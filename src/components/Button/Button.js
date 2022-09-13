import style from './Button.module.css';

export function Button(props) {
    return <button type={props.type} className={style.button}>{props.children}</button>
}
