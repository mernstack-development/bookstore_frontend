import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CreateBook from './components/CreateBook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<CreateBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
