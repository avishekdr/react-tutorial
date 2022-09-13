import { Button } from '../Button/Button';
import style from './Form.module.css';

export function Form() {
    return (
        <form autoComplete='off' className={style['input-form']}>
            <label htmlFor='name' className={`mb-1 ${style['input-form__field-label']}`}>Name</label>
            <input type='text' id='name' className={`mb-1 ${style['input-form__field']}`} />
            <label htmlFor="age" className={`mb-1 ${style['input-form__field-label']}`}>Age</label>
            <input type='number' id='age' className={`mb-1 ${style['input-form__field']}`} />
            <Button type='submit'>Add Data</Button>
        </form>
    );
}
