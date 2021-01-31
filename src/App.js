import React from "react";
import { useSelector } from "react-redux";
import Counter from "./Counter";
import Contact from "./Contact";
import "./styles.css";

export default function App() {
  const count = useSelector((state) => state.counter.count);
  const contacts = useSelector((state) => state.contacts);
  const voters = [
    "Anthony Sistilli ",
    "Bob Smith",
    "Stephanie Foo",
    "Kevin Ma",
  ];
  return (
    <div className="App">
      <h1>Redux made easy</h1>
      <h2>Total Count: {count}</h2>
      <Counter />
      {/*<Contact />*/}
      {/*<h2> Total Votes: {count}</h2>
      {voters.map((voter) => (
        <Counter name={voter} />
      ))}*/}
    </div>
  );
}
