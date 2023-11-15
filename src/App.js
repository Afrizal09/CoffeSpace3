
import Index from './pages/Index';
import Index2 from './pages/Index2';
import Kursus from './pages/Kursus';
import About from './pages/About';
import Contact from './pages/Contact';
import Galeri from './pages/Galeri';
import Profile from './pages/Profile';
import Gabung from './pages/Gabung';
import Login from './pages/Login';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // function openNav() {
  //   document.getElementById("mySidepanel").style.width = "250px";
  // }

  // function closeNav() {
  //   document.getElementById("mySidepanel").style.width = "0";
  // }
  return  (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/Index2' element={<Index2 />} />
          <Route path='/Kursus' element={<Kursus />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Galeri' element={<Galeri />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Gabung' element={<Gabung />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </Router>

      {/* <Index />
      <About /> */}
      
      </div>
  );
}

export default App;
