// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   handleInputChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//     this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input
//             name="name"
//             type="text"
// pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
// required
//             value={this.state.name}
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <label>
//           Number
//           <input
//             name="number"
//             type="tel"
// pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
// title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
// required
//             value={this.state.number}
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }
