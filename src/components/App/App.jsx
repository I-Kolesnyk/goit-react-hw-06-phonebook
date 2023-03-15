import { useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Message from 'components/Message';
import { ToastWrapper } from 'components/ToastContainer/ToastContainer';
import { getContactsItems } from 'redux/contactsSlice';
import {
  Container,
  Section,
  SectionsContainer,
  Title,
  SectionTitle,
} from './App.styled';

function App() {
  const contactsItems = useSelector(getContactsItems);
 
  return (
    <Container>
      <Title>Phonebook</Title>
      <SectionsContainer>
        <Section>
          <SectionTitle>Add contact</SectionTitle>
          <ContactForm />
        </Section>
        <Section>
          <SectionTitle>Contacts</SectionTitle>
          {contactsItems.length !== 0 ? (
            <>
              <Filter />
              <ContactList />
            </>
          ) : (
            <Message message="There are no contacts in your phonebook. Please add your first contact!" />
          )}
        </Section>
      </SectionsContainer>
      <ToastWrapper />
    </Container>
  );
}

export default App;
