import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import './App.css'
import Login from './pages/Login';
import Register from './pages/Register';
import ContactUsSection from './pages/ContactUsSection';
import CustomNavbar from './components/CustomNavbar';
import Dashboard from './pages/DashBoard';
import DashboardHome from './pages/DashboardHome';
import Patients from './pages/Patients';
import Analytics from './pages/Analytics';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { NotificationProvider } from './context/NotificationContext';
import Notifications from './pages/Notifications';
import NotificationsPage from './pages/NotificationsPage';
import EditProfile from './pages/EditProfile';
import { useState } from 'react';
import Tour from "./components/Tour";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './context/UserContext'

const theme = createTheme()

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()
  const handleLogout = () => {
    setIsLoggedIn(false);
    // Optionally, clear any user data or tokens from local storage
    localStorage.removeItem('token'); // If you're storing a token
    navigate('/login')
  };
  return (
    <>
      <UserProvider>
    <NotificationProvider>

      <ThemeProvider theme={theme}>
      <CssBaseline />
    <CustomNavbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} handleLogout={handleLogout}/>

    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/tour' element={<Tour/>}/>
      <Route path='/contact' element={<ContactUsSection/>}/>
      <Route path='/DashBoard' element={<Dashboard/>}>
        <Route path='DashBoard/' element={<DashboardHome/>}/>
        <Route path='DashBoard/patients' element={<Patients/>}/>
        <Route path='DashBoard/analytics' element={<Analytics/>}/>
        <Route path='DashBoard/editprofile' element={<EditProfile/>}/>
        <Route path='DashBoard/notifications' element={<NotificationsPage/>}/>
      </Route>
    </Routes>
    </ThemeProvider>
    </NotificationProvider> 
    </UserProvider>
    </>
    
  );
};

export default App;