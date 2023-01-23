import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


import Main from './pages/Main/Main';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import About from './pages/About/About';
import Contact from './pages/Contacts/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route index element={<Main/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
