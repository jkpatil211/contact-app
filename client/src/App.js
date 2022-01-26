import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/components.css';

import {v4 as uuid} from 'uuid';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import api from './api';

import Header from './components/Header';
import CardForm from './components/CardForm';
import CardList from './components/CardList';
import CardDetails from './components/CardDetails';



function App() {

  const CONTACTS_KEY = 'contacts';
  const [contacts, setContactList] = useState([]);
  const [cardListError, setCardListError] = useState(null);

  const getContacts = async () => {
    try {
      const res = await api.get('/contacts');
      return res.data;
    } catch (error) {
      setCardListError(error);
    }
  }

  const addContacts = async (data) => {
    let newContact = { id: uuid(), ...data}
    const response = await api.post('/contacts', newContact);
    console.log('now there is respnse')
    if(response.status === 201) {
      setContactList([response.data, ...contacts]);
    }
  }

  useEffect(() => {
    const retrieveContacts = async () => {
      const response = await getContacts();
      setContactList(response);
    }
    retrieveContacts();
  }, [])

  useEffect(() => {
    // localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts))
  }, [contacts])

  const deleteContact = async (id) => {
    const response = await api.delete(`/contacts/${id}`);
    if(response.status === 200) {
      setContactList(contacts.filter(contact => contact.id != id))
    }
  }

  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact >
          <CardList error={cardListError} contacts={contacts} deleteContact={deleteContact} />
        </Route>
        <Route path="/add" >
          <div className='main container rounded-3 p-5 shadow-sm'>
            <CardForm addContacts={addContacts} />
          </div>
        </Route>
        <Route path="/contact/:id">
          <CardDetails />
        </Route>
      </Switch>
    </Router>
      
    </>
   
    
  );
}

export default App;
