import style from './Button.module.css';

export function Button(props) {
    return <button type={props.type || 'button'} className={style.button} onClick={props.onClick}>{props.children}</button>
}
