import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './components/Signup'
import Login from "./components/Login";
import Navbar from './components/Navbar';
import StickeyNav from './components/StickeyNav';
import Cart from './pages/Cart';
import { Singlepro } from './pages/Singlepro';

function App() {
  return (
    <div className="App">
      <Navbar />
      <StickeyNav/>
      <Routes>
        <Route path='/shopwise' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signin" element={<Signup />}/>
        <Route path='/product' element={<Singlepro/>}>
          <Route path=':id' element={<Singlepro/>} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
