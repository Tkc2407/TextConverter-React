import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {

  const [mode, setmode] = useState("light");

  const [alert, setAlert] = useState("null");

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode is enabled', 'success');
      document.title = 'Text Converter-Dark Mode';
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is enabled', 'success');
      document.title = 'Text Converter-Light Mode';
    }

  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="my-app" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">.
        <TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />
          {/* <Routes>
            <Route exact path="/about" element={<About />}/>

            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />}/>
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;