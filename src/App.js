import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.js';
import Login from './pages/Login.js';
import Resetpassword from './pages/Resetpassword.js';
import Forgotpassword from './pages/Forgotpassword.js';
import MainLayout from './components/MainLayout.js';
import Enquiries from './pages/Enquiries.js';
import Orders from './pages/Orders.js';
import Customers from './pages/Customers.js';
import Colorlist from './pages/Colorlist.js';
import Categorylist from './pages/Categorylist.js';
import Brandlist from './pages/Brandlist.js';
import Productlist from './pages/Productlist.js';
import Couponlist from './pages/Couponlist.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={< Login />} />
        <Route path='/reset-password' element={<Resetpassword />} />
        <Route path='/forgot-password' element={<Forgotpassword />} />
        <Route path='/admin' element={<MainLayout />} >
          <Route index element={<Dashboard />} />
          <Route path='enquiries' element={<Enquiries />} />
          <Route path='orders' element={<Orders />} />
          <Route path='customers' element={<Customers />} />
          <Route path='list-color' element={<Colorlist />} />
          <Route path='list-category' element={<Categorylist />} />
          <Route path='list-brand' element={<Brandlist />} />
          <Route path='list-product' element={<Productlist />} />
          <Route path='coupon-list' element={<Couponlist />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
