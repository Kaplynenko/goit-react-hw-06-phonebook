import React from 'react';
import Contact from '../Contacts/index';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';
const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items)
  const filter =useSelector(state=>state.contacts.filter)
    const styles = useStyles()

    const getVisibleEl = () => {
    
        const normalizedFilter = filter.toLowerCase();
    
        return contacts.filter(e =>
          e.name.toLowerCase().includes(normalizedFilter)
        );
      };
      const visibleEl = getVisibleEl();


  return (
    <ul className={styles.list}>
      {visibleEl.map(({ uId, name, number }) => {
       
       return (
          
          <Contact
            key={uId}
            name={name}
            number={number}
            id={uId}
            
          />
        );
      })}
    </ul>
  );
};


export default ContactList;