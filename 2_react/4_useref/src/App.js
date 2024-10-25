import RefExample from "./components/RefExample";
import Form from "./components/Form";
import Example from "./components/AnotherExample";

const App = () => {
  return (
    <div className="bg-dark min-vh-100 text-white py-5">
      <div className="container">
        <h1>useRef()</h1>
        <RefExample />

        <Form />

        <Example />
      </div>
    </div>
  );
};

export default App;
