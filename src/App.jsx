import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { Container } from "react-bootstrap";
import AddToDo from "./Components/AddToDo";
import DisplayToDo from "./Components/DisplayToDo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <Container className="py-3">
        <AddToDo />
        <DisplayToDo />
      </Container>
    </Provider>
  );
}

export default App;
