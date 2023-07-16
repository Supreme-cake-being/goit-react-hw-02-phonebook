import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Box, Title, Subtitle } from './App.styled';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Serega Bublik', number: '228-69-47' },
      { id: nanoid(), name: 'Harry Squater', number: '239-93-21' },
      { id: nanoid(), name: 'Captain Jacked Sparrow', number: '432-34-56' },
      { id: nanoid(), name: 'Harry Shprotter', number: '432-98-09' },
    ],
    filter: '',
  };

  addContact = contact => {
    const { contacts } = this.state;

    const isInContacts = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) return alert(`${contact.name} is already in contacts`);

    this.setState({ contacts: [...contacts, contact] });
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );

    return (
      <Box>
        <Title>Phonebook</Title>
        <Form onSubmit={this.addContact} />

        <Subtitle>Contacts</Subtitle>
        <Filter filterValue={filter} onFilter={this.handleFilter}></Filter>
        <Contacts
          contacts={filteredContacts}
          handleClick={this.deleteContact}
        />
      </Box>
    );
  }
}

export default App;
