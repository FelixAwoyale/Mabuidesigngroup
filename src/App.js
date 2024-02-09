import "./App.css";
import MDG from "./Assets/mdg.gif";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={MDG} alt="Mabui Design Group" width="70%" />
        {/* <p>Coming Soon</p> */}
        <div className="button">
          {" "}
          <p>
            <a href="mailto:info@mabuidesigngroup.com" className="App-link">
              Get In Touch
            </a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
