import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Homepage from './Homepage/Homepage';
import Clients from './Clients/Clients';
import Multimedia from './Multimedia/Multimedia';
import Esports from './Esports/Esports';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path = '/' element={<Homepage/>}/>
        <Route path='/clients' element={<Clients/>}/>
        <Route path='/multimedia' element={<Multimedia/>}/>
        <Route path='/esports' element={<Esports/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
