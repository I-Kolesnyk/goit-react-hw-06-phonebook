import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import ContactItem from 'components/ContactItem';
import { getContactsItems } from 'redux/contactsSlice';
import { getFilterValue } from 'redux/filterSlice';
import { List } from './ContactList.styled';

function ContactList() {
  const contacts = useSelector(getContactsItems);
  const filterValue = useSelector(getFilterValue);

  const getFilteredContacts = useMemo(() => () => {
    const normalizedFilter = filterValue.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filterValue]);

  const filteredContacts = getFilteredContacts();

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </List>
  );
}

export default ContactList;
