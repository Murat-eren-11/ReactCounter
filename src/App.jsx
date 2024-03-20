import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <h1>React Counter</h1>
      </div>
      <main>
        <div className="countersection">
          {count > 0 ? (
            <button
              className="plus"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </button>
          ) : (
            <button className="vide"></button>
          )}

          <p className="counter">{count}</p>

          {count < 10 ? (
            <button
              className="plus"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          ) : (
            <button className="vide"></button>
          )}
        </div>
        <div className="resetbtn">
          <button
            className="reset"
            onClick={() => {
              setCount(0);
            }}
          >
            Reset
          </button>
        </div>
      </main>
      <footer>
        <p>
          Made with <a href="#">React</a> at <a href="#">Le Reacteur</a> by{" "}
          <a href="#">Murat</a>
        </p>
      </footer>
    </>
  );
}

export default App;
