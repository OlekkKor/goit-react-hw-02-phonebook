import css from './Filter.module.css';

export const Filter = ({onInputChange }) => { 
    return (
        <>
        <h5 className={css.filterHeader}>Find contacts by name</h5>
        <input className={css.filter} type='text' onChange={(e) => onInputChange(e.target.value)}/>
        </>
    )
}