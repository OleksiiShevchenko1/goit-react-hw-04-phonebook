import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledForm, StyledLabel, StyledButton } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contactData = {
      name: name,
      number: number,
    };

    onSubmit(contactData);
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Name
        <input
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </StyledLabel>
      <StyledLabel>
        Number
        <input
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </StyledLabel>

      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );

  //   handleChange = event => {
  //     this.setState({ name: event.target.value });
  //   };

  // handleChange = ({ target: { name, value } }) => {
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // handleSubmit = ev => {
  //   ev.preventDefault();
  //   // const form = ev.target;
  //   // const name = form.elements.name.value;
  //   // const number = form.elements.number.value;
  //   // console.log(name);
  //   // console.log(ev.target);
  //   // console.log(ev.target.elements);

  //   this.props.onSubmit(this.state);
  //   this.setState({
  //     name: '',
  //     number: '',
  //   });
  // };

  // render() {
  //   return (
  //     <StyledForm onSubmit={this.handleSubmit}>
  //       <StyledLabel>
  //         Name
  //         <input
  //           onChange={this.handleChange}
  //           value={this.state.name}
  //           type="text"
  //           name="name"
  //           pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  //           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  //           required
  //         />
  //       </StyledLabel>
  //       <StyledLabel>
  //         Number
  //         <input
  //           onChange={this.handleChange}
  //           value={this.state.number}
  //           type="tel"
  //           name="number"
  //           pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
  //           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  //           required
  //         />
  //       </StyledLabel>

  //       <StyledButton type="submit">Add contact</StyledButton>
  //     </StyledForm>
  //   );
  // }
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
