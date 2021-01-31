import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/ducks/counter";
//import { useSelector } from "react-redux";
const Counter = (props) => {
  const { name } = props;
  const dispatch = useDispatch();
  //const count = useSelector((state) => state.counter.count);
  const [count, setCount] = useState();
  //const [votes, setVotes] = React.useState(0);

  const handleIncrement = () => {
    dispatch(increment());
    /*setVotes(votes + 1);*/
  };
  const handleDecrement = () => {
    dispatch(decrement());
    /*setVotes(votes - 1);*/
  };

  return (
    <div style={{ backgroundColor: "grey", margin: "10px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleIncrement}> Increment </button>
        <button onClick={handleDecrement}> Decrement </button>
      </div>
    </div>
  );
};

export default Counter;
