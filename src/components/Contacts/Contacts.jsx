import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { List } from './Contacts.styled';
import { Contact } from '../Contact/Contact';

class Contacts extends Component {
  static defaultProps = {
    contacts: [],
  };

  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };

  render() {
    const { contacts } = this.props;
    return (
      <List>
        <h1>Contacts</h1>
        {contacts.map(contact => (
          <Contact
            key={nanoid()}
            name={contact.name}
            number={contact.number}
          ></Contact>
        ))}
      </List>
    );
  }
}

export default Contacts;
