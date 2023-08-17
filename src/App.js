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
import ManageLoanCards from './components/Admin/ManageLoanCards';
import AddLoanCard from './components/Admin/AddLoanCard'
import UpdateLoanCard from './components/Admin/UpdateLoancard';
import AddItem from './components/Admin/AddItem';
import UpdateItem from './components/Admin/UpdateItem';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/user/dashboard' element={<UserDashboard />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/user/apply' element={ <ApplyLoan /> } />
        <Route path='/user/view-loans' element={ <ViewLoan /> } />
        <Route path='/user/view-items' element={ <ViewItems /> } />
        <Route path='/admin/items' element={ <ManageItems /> } />
        <Route path='/admin/customers' element={ <ManageCustomers /> } />
        <Route path='/admin/loan-card' element={ <ManageLoanCards /> } />
        <Route path='/admin/loan-card/add' element={ <AddLoanCard /> } />
        <Route path='/admin/loan-card/update' element={ <UpdateLoanCard /> } />
        <Route path='/admin/items/add' element={ <AddItem /> } />
        <Route path='/admin/items/update' element={ <UpdateItem /> } />    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
