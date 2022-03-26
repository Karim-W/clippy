import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Home from './pages/index';
import About from './pages/About';
import NotFound from './pages/404';

function App() {
  return (
    <div className='min-h-[calc(100vh-3rem)] bg-zinc-900 text-white px-32 pt-12'>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
