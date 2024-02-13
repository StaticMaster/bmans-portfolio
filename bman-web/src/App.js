import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Homepage from './Homepage/Homepage';
import Clients from './Clients/Clients';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path = '/' element={<Homepage/>}/>
        <Route path='/clients' element={<Clients/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
