import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD, REMOVE } from "./redux/ducks/counter";
import styled from "styled-components";
const ContainerDiv = styled.div`
  border: 5px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const initialFormState = [
  {
    lastName: "",
    firstName: "",
    phone: "",
    id: 0,
  },
];

function Contact() {
  const [contact, setContact] = useState(initialFormState);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    console.log("event.target.value: ", event.target.value);
    setContact({
      ...contact,
      [event.target.name]: event.target.value,
    });
    console.log("contact: ", contact);
  };
  const handleAdd = () => {
    console.log("contacts: ", contact);
    dispatch({
      type: "add",
      payload: {
        lastName: contact.lastName,
        firstName: contact.firstName,
        phone: contact.phone,
        id: Math.ceil(Math.random() * 100),
      },
    });
    console.log("contacts: ", contact);
  };
  const handleRemove = () => {
    //dispatch(remove());
  };
  /**
   * dispatch({
   * type: 'ADD',
   * payload: {
   * lastName: lastName,
   * firstName: firstName,
   * phone: phone,
   * email: email
   * }})
   */
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
      <button onClick={handleRemove}> REMOVE </button>
    </ContainerDiv>
  );
}

export default Contact;
