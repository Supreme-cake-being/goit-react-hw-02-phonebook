import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Label, Input } from './Filter.styled';

class Filter extends Component {
  static propTypes = {
    onFilter: PropTypes.func.isRequired,
  };

  render() {
    const { onFilter } = this.props;
    return (
      <Label>
        Find contacts by name
        <Input type="text" name="filter" onChange={onFilter}></Input>
      </Label>
    );
  }
}

export default Filter;
