import { useContext } from "react";
import { Context } from "../main.jsx";
import { Link } from "react-router-dom";

export const ContactList = () => {
  const { store, dispatch } = useContext(Context);
  return (
    <>
      <h1> Contact List </h1>
      <Link to="/create">
        <button>Crear nuevo contacto</button>
      </Link>
      <ul>
        {store.constacList.map((contact) => (
          <li>{contact.mail}</li>
        ))}
      </ul>
    </>
  );
};
