import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./component/Main";
import Login from "./component/Login";
import Issuecreator from "./component/Issuecreator";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Login/> */}
        <Main />
        <Issuecreator />
      </div>
    );
  }
}

export default App;
