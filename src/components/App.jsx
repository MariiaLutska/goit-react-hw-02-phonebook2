import { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Box } from './Box';

export class App extends Component {
  state = {
  contacts: [],
  name: ''
  }

  handleNameChange = event => {
    console.log(event.currentTarget.value);

    this.setState({inputValue: event.currentTarget.value});
  };

  render() {
    return (
    // <Container>
      <form>
        <label htmlFor="name">Name
          <input
        type="text"
        value={this.state.name}
        onChange={this.handleNameChange}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
/>
        </label>
      </form>
    // </Container>
    
  );
  }
  
};
