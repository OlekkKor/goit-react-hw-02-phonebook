import css from './ContactList.module.css';


export const ContactList = ({ filter, data, deleteToDo, filteredContacts }) => {


if (filter){

    const filteredContact = filteredContacts();

    return (
        <ul className={css.list}>
          {filteredContact.map(({ name, number ,id }) => (
            <li className={css.item} key={id}>
                {name}: {number} 
              <button type="button" onClick={() => deleteToDo(id)}>delete</button>
            </li>
          ))}
        </ul>
      );

} else {

  return (
    <ul className={css.list}>
      {data.map(({ name, number ,id }) => (
        <li className={css.item} key={id}>
            {name}: {number} 
          <button type="button" onClick={() => deleteToDo(id)}>delete</button>
        </li>
      ))}
    </ul>
    
  );
    }
};
