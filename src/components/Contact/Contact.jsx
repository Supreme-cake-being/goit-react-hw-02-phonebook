import { Item } from './Contact.styled';

export const Contact = ({ name, number }) => {
  return (
    <Item>
      <p>{name}</p>
      <p>{number}</p>
    </Item>
  );
};
