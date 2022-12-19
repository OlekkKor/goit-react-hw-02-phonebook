import css from './Filter.module.css';

export const Filter = ({onInputChange }) => { 
    return (
        <input className={css.filter} type='text' onChange={(e) => onInputChange(e.target.value)}/>
    )
}