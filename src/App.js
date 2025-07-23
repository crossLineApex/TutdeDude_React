import "./styles.css";
import CounterClassComponent from "./components/CounterClassComponent";
import CounterFuncComponent from "./components/CounterFuncComponent";

export default function App() {
  return (
    <div className="App">
      <h1>Assignment-1 Counter Application</h1>
      <hr></hr>
      <div className="row">
        <CounterClassComponent name="Ayush" />
        <CounterFuncComponent />
      </div>
    </div>
  );
}
