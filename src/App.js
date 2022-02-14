import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
        <Weather />
        <div class="source">
          <a
            href="https://github.com/Amanda-Choi/Amanda-Weather-App-Project"
            target="_blank"
          >
            Open-source code
          </a>
          by Amanda Choi
        </div>
      </header>
    </div>
  );
}

export default App;
