import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Employee from './components/Employee';


function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/employee' element={<Employee/>}/>
      </Routes>
    </div>
  );
}

export default App;
