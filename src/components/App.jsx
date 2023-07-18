import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import styled from 'styled-components';

const CONTACTS_KEY = 'contacts_key';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contactsFromLS = localStorage.getItem(CONTACTS_KEY);
    if (contactsFromLS) {
      this.setState({ contacts: JSON.parse(contactsFromLS) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.state.contacts));
  }

  addContact = data => {
    const checkContact = this.state.contacts.find(
      contact => contact.name === data.name
    );

    if (checkContact) {
      alert(`${data.name} is already in contacts.`);
    } else {
      const newContact = { id: nanoid(), ...data };
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
    }
  };

  visibleContact = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  updateFilter = ev => {
    this.setState({ filter: ev.currentTarget.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <StyledTitle>Phonebook</StyledTitle>
        <ContactForm onSubmit={this.addContact} />
        <StyledTitle>Contacts</StyledTitle>
        <Filter value={this.state.filter} onChange={this.updateFilter} />
        <ContactList
          contacts={this.visibleContact()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

const StyledTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  margin-top: 50px;
`;
