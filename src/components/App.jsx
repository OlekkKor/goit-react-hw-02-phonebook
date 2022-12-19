import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { nanoid } from 'nanoid';

export class App extends Component{

  state = {
    contacts: [],
    filter: '',
  }

  onInputChange = filter => {
    this.setState({
     filter: filter
    });
  };


  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };


  deleteToDo = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }))}



  onFormSubmit = info => {
    const isContactRepeat = this.state.contacts.find(
      el => el.name === info.name
    );
    if (isContactRepeat) {
      alert('Already in Contacts');
      return;
    }
    const contact = {
      ...info,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };


  render() {
    return( 

      <div style={{
        width: 400,
        padding: "12px 16px",
        borderRadius: 20,
        backgroundColor: "#006d00",
        color: "white",
        textAlign: "center",
      }} >
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={this.onFormSubmit} btnText="Add contact" />

      <h2>Contacts</h2>
      <Filter onInputChange={this.onInputChange} />
      <ContactList data={this.state.contacts} deleteToDo={this.deleteToDo} filter = {this.state.filter} filteredContacts={this.filteredContacts} />
      </div>
    )
  }


} 
 
 

