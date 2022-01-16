import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/components.css';

import {v4 as uuid} from 'uuid';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import CardForm from './components/CardForm';
import CardList from './components/CardList';

function App() {

  const CONTACTS_KEY = 'contacts';
  const [contacts, setContactList] = useState([]); 

  const addContacts = (data) => {
    let newData = { id: uuid(), ...data}
    setContactList([newData, ...contacts]);
  }

  useEffect(() => {
    let contactsData = JSON.parse(localStorage.getItem(CONTACTS_KEY));
    // console.log('Conatctdata-->', contactsData);
    setContactList(contactsData);
  }, [])

  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts))
  }, [contacts])

  const deleteContact = (id) => {
    let newContacts = contacts.filter(contact => contact.id != id);
    setContactList(newContacts);
  }

  return (
    <>
    <Router>
      <Header />
      <Route path="/" exact >
        <CardList contacts={contacts} deleteContact={deleteContact} />
      </Route>
      <Route path="/add" >
        <div className='main container rounded-3 p-5 shadow-sm'>
          <CardForm addContacts={addContacts} />
        </div>
      </Route>
    </Router>
      
    </>
   
    
  );
}

export default App;
