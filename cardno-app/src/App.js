
import { useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import InputBox from './components/InputBox';

function App() {
  useEffect(()=>{
    document.getElementById(0).focus()
  },[])

  return (
    <div className="App">
       <Home/>
    </div>
  );
}

export default App;
