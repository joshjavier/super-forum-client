import { Route, Routes } from 'react-router-dom'
import Home from './components/routes/Home'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/categorythreads/:categoryId' element={<Home />} />
    </Routes>
  );
}

export default App;
