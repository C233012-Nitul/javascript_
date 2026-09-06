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
export default function Card(props) {
  //console.log(props);
  const { firstName, lastName, age } = props;
  return (
    <>
      <div>
        {props.children}
        <p>First Name : {firstName}</p>
        <p>Last Name : {lastName} </p>
        <p>Age : {age} </p>
      </div>
    </>
  );
}
