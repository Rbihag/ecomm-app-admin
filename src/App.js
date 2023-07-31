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
import Addcolor from './pages/Addcolor.js';
import Addcat from './pages/Addcat.js';
import Addbrand from './pages/Addbrand.js';
import Addproduct from './pages/Addproduct.js';
import AddCoupon from './pages/AddCoupon.js';
import ViewEnq from "./pages/ViewEnq";
import ViewOrder from "./pages/ViewOrder";

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
          <Route path="enquiries/:id" element={<ViewEnq />} />
          <Route path='orders' element={<Orders />} />
          <Route path="order/:id" element={<ViewOrder />} />
          <Route path='customers' element={<Customers />} />
          <Route path='color' element={<Addcolor />} />
          <Route path='list-color' element={<Colorlist />} />
          <Route path="color/:id" element={<Addcolor />} />
          <Route path='category' element={<Addcat />} />
          <Route path='list-category' element={<Categorylist />} />
          <Route path="category/:id" element={<Addcat />} />
          <Route path='brand' element={<Addbrand />} />
          <Route path='list-brand' element={<Brandlist />} />
          <Route path="brand/:id" element={<Addbrand />} />
          <Route path='product' element={<Addproduct />} />
          <Route path='list-product' element={<Productlist />} />
          <Route path='coupon' element={<AddCoupon />} />
          <Route path='coupon-list' element={<Couponlist />} />
          <Route path="coupon/:id" element={<AddCoupon />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
