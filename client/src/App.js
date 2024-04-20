import './App.css';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
