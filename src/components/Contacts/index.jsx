import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux'
import { removeContact } from '../../Redux/contactSlice';
const Contact =({name,number,id})=>{
    const dispatch = useDispatch()
    
    return (
        <li>
            {name}:{number}
            <button type="button" onClick={()=>dispatch(removeContact(id))}>Delete</button>
        </li>
    )
};
Contact.protoType = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  };
  
  export default Contact;