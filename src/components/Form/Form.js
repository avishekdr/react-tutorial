import { Fragment, useState } from 'react';
import { Button } from '../Button/Button';
import { ErrorModal } from '../ErrorModal/ErrorModal';
import style from './Form.module.css';

export function Form(props) {

    const [formData, setFormData] = useState({ name: '', age: '' }),
        handleFormChange = field => event => setFormData(prvState => {
            return { ...prvState, [field]: event.target.value }
        }), [errorMessage, setErrorMessage] = useState(null);

    const handleFormSubmit = event => {
        event.preventDefault();
        if(Object.keys(formData).some(key => !formData[key])) {
            return setErrorMessage('All fields are required');
        }
        if(!Number.isInteger(+formData.age)) { return setErrorMessage('Invalid age value') }
        if(+formData.age < 1) { return setErrorMessage('Age should be above 1 years') }
        props.addInput(formData);
        setFormData({ name: '', age: '' });
    };

    const handleError = () => setErrorMessage(null);

    return (
        <Fragment>
        {
            errorMessage && <ErrorModal message={errorMessage} onConfirm={handleError} />
        }
        <form autoComplete='off' className={style['input-form']} onSubmit={handleFormSubmit}>
            <label htmlFor='name' className={`mb-1 ${style['input-form__field-label']}`}>Name</label>
            <input type='text' id='name' value={formData.name} className={`mb-1 ${style['input-form__field']}`} onChange={handleFormChange('name')} />
            <label htmlFor="age" className={`mb-1 ${style['input-form__field-label']}`}>Age</label>
            <input type='text' id='age' value={formData.age} className={`mb-1 ${style['input-form__field']}`} onChange={handleFormChange('age')} />
            <Button type='submit'>Add Data</Button>
        </form>
        </Fragment>
    );
}
