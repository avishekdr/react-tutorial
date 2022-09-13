import { useState } from 'react';
import { Button } from '../Button/Button';
import style from './Form.module.css';

export function Form(props) {

    const [formData, setFormData] = useState({ name: '', age: '' }),
        handleFormChange = field => event => setFormData(prvState => {
            return { ...prvState, [field]: event.target.value }
        });

    const handleFormSubmit = event => {
        event.preventDefault();
        props.addInput(formData);
        setFormData({ name: '', age: '' });
    };

    return (
        <form autoComplete='off' className={style['input-form']} onSubmit={handleFormSubmit}>
            <label htmlFor='name' className={`mb-1 ${style['input-form__field-label']}`}>Name</label>
            <input type='text' id='name' value={formData.name} className={`mb-1 ${style['input-form__field']}`} onChange={handleFormChange('name')} />
            <label htmlFor="age" className={`mb-1 ${style['input-form__field-label']}`}>Age</label>
            <input type='text' id='age' value={formData.age} className={`mb-1 ${style['input-form__field']}`} onChange={handleFormChange('age')} />
            <Button type='submit'>Add Data</Button>
        </form>
    );
}
