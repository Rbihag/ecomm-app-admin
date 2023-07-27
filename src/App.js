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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
