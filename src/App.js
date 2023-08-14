import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/user/dashboard' element={<UserDashboard />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
