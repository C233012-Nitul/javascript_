import "./card.css";

export default function Card(props) {
  const { firstName, lastName, age } = props;
  const clickHandler = (memberName) => {
    
    console.log(`Hello ${memberName}`);
  };
  const anotherClick = () =>{
    console.log('Hello')
  }
  const greet = (membername) =>{
    clickHandler(membername)
    anotherClick()
  }
  return (
    <>
      <div
        onClick={() => greet(firstName)}
        //   onMouseDown={}
        //   onMouseEnter={}
        //   onScroll={}
        //   onSubmit={}
        //   onBlur={}

        className="card"
      >
        <p>firstName : {firstName} </p>
        <p>lastName : {lastName} </p>
        <p>age : {age} </p>
      </div>
    </>
  );
}
