import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CreateBook from './components/CreateBook';
import AllBook from './components/AllBook';
import UpdateBook from './components/UpdateBook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<CreateBook />} />
        <Route exact path='/books' element={<AllBook />} />
        <Route exact path='/updatebook/:bid' element={<UpdateBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
