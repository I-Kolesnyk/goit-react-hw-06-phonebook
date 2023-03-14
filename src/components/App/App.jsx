import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useLocalStorage } from 'hooks/useLocalStorage';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Message from 'components/Message';
import {
  Container,
  Section,
  SectionsContainer,
  Title,
  SectionTitle,
} from './App.styled';

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    if (
      contacts.find(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      return alert(`${name} is already in contacts!`);
    }

    const contact = { id: nanoid(), name, number };

    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filterContacts = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <Title>Phonebook</Title>
      <SectionsContainer>
        <Section>
          <SectionTitle>Add contact</SectionTitle>
          <ContactForm onSubmit={addContact} />
        </Section>
        <Section className="contacts">
          <SectionTitle>Contacts</SectionTitle>
          {contacts.length !== 0 ? (
            <>
              <Filter value={filter} onChange={filterContacts} />
              <ContactList
                contacts={filteredContacts}
                onDeleteButton={deleteContact}
              />
            </>
          ) : (
            <Message message="There are no contacts in your phonebook. Please add your first contact!" />
          )}
        </Section>
      </SectionsContainer>
    </Container>
  );
}

export default App;
