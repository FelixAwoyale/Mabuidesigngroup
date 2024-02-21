import "./App.css";
import MDG from "./Assets/unnamed.gif";

function App() {
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          backgroundImage: `url("${MDG}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* <img src={MDG} alt="Mabui Design Group" width="70%" />
        <p>Coming Soon</p> */}
        <br />
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
