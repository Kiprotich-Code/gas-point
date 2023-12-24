import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PlaceOrderHome from './Components/PlaceOrder/PlaceOrderHome';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Navbar from './Components/Common/Navbar';
import VerifyEmail from './Components/Common/VerifyEmail'
import Login from './Components/Common/Login'
import Register from './Components/Common/Register';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/place_order_home' element={<PlaceOrderHome />} />
          <Route path='/register' element={<Register />} />
          <Route path='/verify_email' element={<VerifyEmail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/place_order' element={<PlaceOrder />} />
        </Routes>
    </div>
  );
}

export default App;
