import React from 'react';
import { setFilter } from 'Redux/contactSlice';
import { useSelector,useDispatch } from 'react-redux';

const SearchForm = () => {
    const dispatch = useDispatch()
    const values = useSelector(state=>state.contacts.filter)
      
      return(
  <label>
    Find Contacts by Name
    <input type="text" value={values} onChange={e=> dispatch(setFilter(e.target.value))} />
  </label>)
};


export default SearchForm;