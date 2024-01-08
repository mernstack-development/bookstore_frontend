import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CreateBook from './components/CreateBook';
import AllBook from './components/AllBook';
import UpdateBook from './components/UpdateBook';
import Viewbook from './components/viewbook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  exact path='/' element={<AllBook />} />  
        <Route  path='/addbooks' element={<CreateBook />} />
        <Route  path='/updatebook/:bid' element={<UpdateBook />} />
        <Route  path='/viewbook/:bid' element={<Viewbook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
