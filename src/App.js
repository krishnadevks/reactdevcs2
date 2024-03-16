import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import { Route, Routes } from 'react-router-dom';
import SignData from './componets/SignData';
import LogData from './componets/LogData';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Routes>
       <Route path='/' element={<SignData/>}/>
       <Route path='/add' element={<LogData/>}/>
       </Routes>
       
        
    </div>
  );
}

export default App;
