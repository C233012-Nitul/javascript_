//* file extension must be .jsx
//* must start with capital letter
//* must be a export
//* there must be a single root return
// const TestComponent = () => {
//   return <h1>TEST COMPONENT</h1>;
// };

// export default TestComponent;
const Name = "nitul"
export default function TestComponent() {
  return (
    <>
      <div>
        <h1>Testing</h1>
        <p>HI</p>
        <span>mememe</span>
      </div>
      <div>
        <h1>MOHAMMAD ALI {Name}</h1>
      </div>
    </>
  );
}
