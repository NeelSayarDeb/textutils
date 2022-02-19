
import React, {useState} from 'react'
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [btnType, setbtnType] = useState('primary')
  

  const showAlert= (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showAlert("Dark Mode set ","secondary")
      setbtnType('secondary')

    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light Mode set ","info")
      setbtnType('primary')
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container"> 
        <Textform heading="Enter your text to analyze" mode={mode} btnType={btnType} showAlert={showAlert}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
