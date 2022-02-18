
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
    <>
      <Navbar title="Text Utils" />
      <div className="container">
        <Textform heading="Enter your text to analyze"/>
      </div>
    </>
  );
}

export default App;
