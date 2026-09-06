import "./card.css";

//* props and children

// export default function Card(props) {
//   console.log(props);
//   return (
//     <>
//       <div>
//         <p>First Name : {props.firstName}</p>
//         <p>Last Name : {props.lastName} </p>
//         <p>Age : {props.age} </p>
//       </div>
//     </>
//   );
// }
//*destruction
// export default function Card({ firstName, lastName, age }) {
//   //console.log(props);
//   return (
//     <>
//       <div>
//         <p>First Name : {firstName}</p>
//         <p>Last Name : {lastName} </p>
//         <p>Age : {age} </p>
//       </div>
//     </>
//   );
// }
//!if else
// export default function Card(props) {
//   //console.log(props);
//   const { firstName, lastName, age } = props;
//   if (age < 18) {
//     return (
//       <>
//         <div className="card">YOU Are young  {lastName}</div>
//       </>
//     );
//   }
//   return (
//     <>
//       <div className="card">
//         {props.children}
//         <p>First Name : {firstName}</p>
//         <p>Last Name : {lastName} </p>
//         <p>Age : {age} </p>
//       </div>
//     </>
//   );
// }
//!!normal without if-else
// export default function Card(props) {
//   const { firstName, lastName, age } = props;
//   return (
//     <>
//       {age > 18 && (
//         <div className="card">
//           <p>First Name : {firstName}</p>
//           <p>Last Name : {lastName} </p>
//           <p>Age : {age} </p>
//         </div>
//       )}
//       {age < 18 && (
//         <div className="card">
//           <p>First Name : {firstName}</p>
//           <h1>You Are Too Young</h1>
//         </div>
//       )}
//     </>
//   );
// }

//?! ternary operator
export default function Card(props) {
  const { firstName, lastName, age } = props;
  return (
    <>
      {age > 18 ? (
        <div className="card">
          <p>First Name : {firstName}</p>
          <p>Last Name : {lastName} </p>
          <p>Age : {age} </p>
        </div>
      ) : (
        <div className="card">
          <p>First Name : {firstName}</p>
          <h1>You Are Too Young</h1>
        </div>
      )}
    </>
  );
}
