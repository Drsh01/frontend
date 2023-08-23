import React from "react";
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserDashboard from './components/User/UserDashboard';
import AdminDashboard from './components/Admin/AdminDashboard';
import Navbar from './components/Navbar';
import ApplyLoan from './components/User/ApplyLoan';
import ViewLoan from './components/User/ViewLoan';
import ViewItems from './components/User/ViewItems';
import ManageItems from './components/Admin/ManageItems';
import ManageCustomers from './components/Admin/ManageCustomers';
import AddCustomerComponent from './components/Admin/AddCustomerComponent';
import AddLoanCardComponent from './components/Admin/AddLoanCardComponent';
import AddItemComponent from './components/Admin/AddItemComponent';
import ManageLoanCards from './components/Admin/ManageLoanCards';
import AddLoanCard from './components/Admin/AddLoanCard'
import UpdateLoanCard from './components/Admin/UpdateLoanCard';

export const adminRoute = () => {
  const roles = localStorage.getItem('roles');

  if (roles && roles === ("ROLE_ADMIN")) return true;
  else {
    return false;
  }
}


function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/user/dashboard' element={<UserDashboard />} />
          <Route path='/admin/dashboard' element={adminRoute() ? <AdminDashboard /> : <h1 style={{ marginTop: "120px" }}>Not allowed</h1>} />
          <Route path='/user/apply' element={<ApplyLoan />} />
          <Route path='/user/view-loans' element={<ViewLoan />} />
          <Route path='/user/view-items' element={<ViewItems />} />
          <Route path='/admin/items' element={adminRoute() ? <ManageItems /> : <h1 style={{ marginTop: "120px" }}>Not allowed</h1>} />
          <Route path='/admin/customers' element={adminRoute() ? <ManageCustomers /> : <h1 style={{ marginTop: "120px" }}>Not allowed</h1>} />
          <Route path='/admin/loan-card' element={adminRoute() ? <ManageLoanCards /> : <h1 style={{ marginTop: "120px" }}>Not allowed</h1>} />
          <Route path='/admin/loan-card/add' element={adminRoute() ? <AddLoanCard /> : <h1 style={{ marginTop: "120px" }}>Not allowed</h1>} />
          <Route path='/admin/loan-card/update/:id' element={adminRoute() ? <UpdateLoanCard /> : <h1 style={{ marginTop: "120px" }}>Not allowed</h1>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
