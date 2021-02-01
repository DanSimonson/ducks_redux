import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DisplayDiv = styled.div``;

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
    <ContainerDiv>
      <input
        type="text"
        value={contact.lastName}
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        id="lastName"
      ></input>
      <input
        type="text"
        value={contact.firstName}
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        id="firstName"
      ></input>
      <input
        type="text"
        value={contact.phone}
        placeholder="Phone"
        onChange={handleChange}
        name="phone"
        id="phone"
      ></input>
      <button onClick={handleAdd}> ADD </button>
      {contacts.contacts.length > 0 &&
        contacts.contacts.map((contact) => (
          <DisplayDiv key={contact.id}>
            <p>Contact Details</p>
            <p>{contact.lastName}</p>
            <p>{contact.firstName}</p>
            <p>{contact.phone}</p>
            <button onClick={() => handleRemove(contact.id)}>Delete</button>
          </DisplayDiv>
        ))}
    </ContainerDiv>
  );
}

export default Contact;
