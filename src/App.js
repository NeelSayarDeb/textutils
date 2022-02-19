
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container">
        <Textform heading="Enter your text to analyze"/>
        <About/>
      </div>
    </>
  );
}

export default App;
