import { Fragment } from 'react';
import style from './User.module.css';

export function User(props) {
    return (
        <div className={style.item} style={props.style}>
            <div>Name: {props.name}</div>
            <div>Age: {props.age} yrs.</div>
        </div>
    );
}
