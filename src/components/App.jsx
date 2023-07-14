import React, { Component } from 'react';

import { Box } from './App.styled';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [
      { name: 'Serega Bublik', number: '228-69-47' },
      { name: 'Harry Squater', number: '239-93-21' },
      { name: 'Captain Jacked Sparrow', number: '432-34-56' },
    ],
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { contacts, name, number } = this.state;
    e.target.reset();

    this.setState({ contacts: [...contacts, { name, number }] });
  };

  render() {
    return (
      <Box>
        <Form onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Contacts contacts={this.state.contacts} />
      </Box>
    );
  }
}

export default App;
