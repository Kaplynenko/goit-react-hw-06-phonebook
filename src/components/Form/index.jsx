import {useState} from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const Form=({addContact,arrayContact}) =>{
  const [number,setNumber]=useState('')
  const [name,setName]=useState('')
 
  
    const handleChange = event => {
      
      
      const { name, value } = event.target;
      
      switch (name) {
        case 'name':
          setName(value);
          break;
  
        case 'number':
          setNumber(value);
          break;
  
        default:
          return;
      }
    };
  
  const handleSubmit = e => {
    e.preventDefault();
    const uId = nanoid(7);
    const eventNameValue = e.target[0].value;
    const filterName = arrayContact.find(
      e => e.name === eventNameValue
    );

    
     filterName? alert(`${eventNameValue} is already in Contacts`)
      : addContact({ uId, name,number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('')
  };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Name</h2>
          <input
            
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />

          <h2>Number</h2>
          <input
            
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />

          <button type="submit">
            Add contact
          </button>
        </div>
      </form>
    );
  }

Form.propType = {
  addContact: PropTypes.func.isRequired,
  arrayContact: PropTypes.array.isRequired,
};
export default Form;