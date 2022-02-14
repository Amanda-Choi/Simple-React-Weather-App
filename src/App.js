import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
        <Weather />
        <footer>
          <a
            href="https://github.com/Amanda-Choi/react-weather-app-part1"
            target="_blank"
          >
            Open-source code
          </a>
          by Amanda Choi
        </footer>
      </header>
    </div>
  );
}

export default App;
