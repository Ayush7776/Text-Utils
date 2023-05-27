import React, { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  const [alert, setAlert] = useState(null)
  const [mystyle, setMystyle] = useState({
    backgroundColor: 'white',
    color: 'black',

  })
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toogleStyle = () => {
    if (mystyle.backgroundColor === "black") {
      setMystyle({
        backgroundColor: 'white',
        color: 'black',
      })
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success");
    }
    else {
      setMystyle({
        backgroundColor: 'black',
        color: 'white'
      })
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enable", "success");
    }
  }
  const cyantheme = () => {
    setMystyle({
      // backgroundColor: '#CBFFFF',
      color: 'black'
    })
    document.body.style.backgroundColor = '#CBFFFF';
    document.body.style.color = 'black';
  }
  const redtheme = () => {
    setMystyle({
      // backgroundColor: '#CBFFFF',
      color: 'black'
    })
    document.body.style.backgroundColor = '#FF9A9E';
    document.body.style.color = 'black';
  }



  return (
    <>
        <Router>
      <Navbar theme1={cyantheme} theme2={redtheme} title="TextUtils" switch={toogleStyle} style={mystyle}></Navbar>
      <div className="mx-2">
        <Alert alert={alert}></Alert>
      </div>
      <div className="container my-5">
          <Routes>
            <Route exact path='/about' element={<About style={mystyle}/>}></Route>
            <Route exact path='/' element={<Textarea style={mystyle} showAlert={showAlert} />}></Route>
          </Routes>
      </div>
        </Router>
    </>
  );
}

export default App;