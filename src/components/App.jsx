import { useState,useEffect} from 'react';
import Form from './Form/index';
import ContactList from './ContactList';
import Container from './Container';
import SearchForm from './SearchForm';

// const uId = nanoid();

const App =()=> {
 
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? []
      
    );
  });
 const [filter,setFilter]=useState('')
 useEffect(() => {
  window.localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);
  

  const addContact = contact => {
    setContacts(prevState => [contact, ...prevState]);
  };

  const changeFilter = (e )=> {
    setFilter(e.target.value);
  };

  const getVisibleEl = () => {
    
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(e =>
      e.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteEl = elem => {
    setContacts(contacts.filter(e => e.uId !== elem))
    }
  

  
    const visibleEl = getVisibleEl();

    return (
      <div>
        <Container>
          <h1>Phonebook</h1>
          <Form addContact={addContact} arrayContact={contacts} />

          <h2>Contacts</h2>
          <SearchForm onChange={changeFilter} />
          <ContactList contactArrey={visibleEl} onDeleteEl={deleteEl} />
        </Container>
      </div>
    );
  }


export default App;
