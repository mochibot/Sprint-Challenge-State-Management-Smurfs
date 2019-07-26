import React from "react";
import SmurfList from './SmurfList'
import 'semantic-ui-css/semantic.min.css'
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <header>
        <div>Smurf Village</div>
      </header>
      <SmurfList />
    </div>
  );
}

export default App;
