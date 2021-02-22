import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "./Contact.css";
import Footer from "./components/Footer";

//const ontainerDiv = styled.div``;
//const DisplayDiv = styled.div``;

function Contact() {
  const [contact, setContact] = useState([]);
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const handleChange = (event) => {
    setContact({
      ...contact,
      [event.target.name]: event.target.value,
    });
  };
  const handleAdd = () => {
    dispatch({
      type: "add",
      payload: {
        lastName: contact.lastName,
        firstName: contact.firstName,
        phone: contact.phone,
        id: Math.ceil(Math.random() * 100),
      },
    });
    setContact({
      lastName: "",
      firstName: "",
      phone: "",
    });
  };
  const handleRemove = (id) => {
    dispatch({
      type: "remove",
      payload: id,
    });
  };

  return (
    <>
      <div className="containerDiv">
        <h1>
          <span> Mariposaweb </span> Contact Form
        </h1>
        <p className="formPara">
          <label>Last Name</label>
          <input
            type="text"
            value={contact.lastName}
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            id="lastName"
          ></input>
        </p>
        <p className="formPara">
          <label>First Name</label>
          <input
            type="text"
            value={contact.firstName}
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            id="firstName"
          ></input>
        </p>
        <p className="formPara">
          <label>Phone</label>
          <input
            type="text"
            value={contact.phone}
            placeholder="Phone"
            onChange={handleChange}
            name="phone"
            id="phone"
          ></input>
        </p>
        <p className="formPara">
          <button className="formButton" onClick={handleAdd}>
            {" "}
            ADD{" "}
          </button>
        </p>
      </div>
      <div className="container">
        <main className="grid">
          {contacts.contacts.length > 0 &&
            contacts.contacts.map((contact) => (
              <article>
                <div className="text">
                  <h3>Contact Details</h3>
                  <p>{contact.lastName}</p>
                  <p>{contact.firstName}</p>
                  <p>{contact.phone}</p>
                  <button onClick={() => handleRemove(contact.id)}>
                    Delete
                  </button>
                </div>
              </article>
            ))}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
