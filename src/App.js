import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [DarkModeState, setDarkModeState] = useState(false)// NEVER USED tells wherther the dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      alert_type: type

    })
    setTimeout(() => {
      setAlert(false)
    }, 2500);
  }
  return (
    // the below code is JSX which is a combination of js and html
    // we only have to return one tag and if we want to return more than one tag we use JSX fragment which are these --> <> </>
    <>
      <Router>
        <Navbar title='Company name' about_link="About Us" DarkModeState={DarkModeState} />{/*title and about_link are both props */}
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/home">
              <Textform showAlert={showAlert} heading='Enter the text to analyze' />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;