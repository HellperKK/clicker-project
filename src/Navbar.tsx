import { useState } from "react";
import App from "./App";
import Options from "./Options";
import "./NavBar.css";

function Navbar() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <div className="tabs">
        <ul>
          <li className={tabIndex === 0 ? "is-active" : ""}>
            <a onClick={() => setTabIndex(0)}>Game</a>
          </li>
          <li className={tabIndex === 1 ? "is-active" : ""}>
            <a onClick={() => setTabIndex(1)}>Options</a>
          </li>
        </ul>
      </div>
      <div className={tabIndex !== 0 ? "hidden" : ""}>
        <App />
      </div>
      <div className={tabIndex !== 1 ? "hidden" : ""}>
        <Options />
      </div>
    </div>
  );
}

export default Navbar;
