import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../main.jsx";

export const ContactCreate = () => {
  const [mail, setMail] = useState("");
  const { store, dispatch } = useContext(Context);
  const navigate = useNavigate();

  const saveContact = () => {
    const newContact = { mail };
    dispatch({ type: "CREATE_CONTACT", value: newContact });
    navigate("/");
  };

  return (
    <>
      <h1>Crear un contacto</h1>
      <Link to="/">
        <button>Regresar al inicio</button>
      </Link>
      <input
        type="mail"
        placeholder="Ingresa tu mail aqui"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />
      <button onClick={saveContact}>Guardar contacto</button>
    </>
  );
};
