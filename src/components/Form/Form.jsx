import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import { render } from '@testing-library/react';
// import {Formik, Form, Field} from 'formik';


export class Form extends Component {
    state = {
        name: '',
        number:'',
        id: '',
    };

    
inputNameId = nanoid();
inputTelId = nanoid();

handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
        [name]: value,
        id: nanoid(),
    });
};

handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
};

reset = () => {
    this.setState({
        name: '',
        number: '',
        id:'',
    });
    };
    
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="name">Name</label>
                    <input
                        onInput={this.handleInputChange}
                        type="text"
                        value={this.state.name}
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        id={this.inputNameId}
                    />
                    
                    <label htmlFor={this.inputTelId}>
                        Number:
                    </label>
                    <input
                        onInput={this.handleInputChange}
                        value={this.state.number}
                        type="tel"
                        name='number'
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        id={this.inputTelId}
                    />

                    <button type="submit">
                        Add contact
                    </button>
                </form>
            </div>
        );
    }
};
//   const handleSubmit = (values, {resetForm}) => {
//     console.log(values);
//     console.log(actions);
//     resetForm();
//   };

//   return(
//   <Formik initialValue={initialValue} onSubmit={handleSubmit}>
//       <Form>
//         <label htmlFor="name">Name
//           <Field
//             type="text"
//             value={this.state.name}
//             onChange={this.handleNameChange}
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>
//       </Form>
//     </Formik>
// );
// };
