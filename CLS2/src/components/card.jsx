import { useState } from "react";
import "./card.css";
//!useState must be in top
//!must be inside component
export default function Card(props) {
  const [member, setMember] = useState("");

  const { firstName, lastName, age } = props;
  const clickHandler = (memberName) => {
    //console.log(`Hello ${memberName}`);
    setMember(memberName);
  };

  return (
    <>
      <div onClick={() => clickHandler(firstName)} className="card">
        <p>firstName : {firstName} </p>
        <p>lastName : {lastName} </p>
        <p>age : {age} </p>
        {member && <p>greating {member}</p>}
      </div>
    </>
  );
}
