// import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div style={{margin:"0",background:"black"}}>
      <Home/>
    </div>
    </Router>
  );
}

export default App;
