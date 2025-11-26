import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../main.jsx";

import "../ContactForm.css";

export const ContactCreate = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const { store, dispatch } = useContext(Context);
  const navigate = useNavigate();

  const saveContact = () => {
    const newContact = { name, email, phone, address };
    dispatch({ type: "CREATE_CONTACT", value: newContact });
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Agregar nuevo contacto</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="name" className="label-text">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="label-text">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="label-text">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="form-input"
            placeholder="Telefono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address" className="label-text">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="form-input"
            placeholder="DIrección"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button type="button" className="save-button" onClick={saveContact}>
          Guardar
        </button>

        <div className="back-link-container">
          <Link to="/" className="back-link">
            Volver al Inicio.
          </Link>
        </div>
      </form>
    </div>
  );
};
