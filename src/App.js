import { Routes, Route } from 'react-router-dom';
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
import Settings from './pages/Settings';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { NotificationProvider } from './context/NotificationContext';
import Notifications from './pages/Notifications';
import NotificationsPage from './pages/NotificationsPage';


const theme = createTheme()

const App = () => {
  return (
    <>
    <NotificationProvider>

      <ThemeProvider theme={theme}>
      <CssBaseline />
    <CustomNavbar/>

    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/contact' element={<ContactUsSection/>}/>
      <Route path='/DashBoard' element={<Dashboard/>}>
        <Route path='DashBoard/' element={<DashboardHome/>}/>
        <Route path='DashBoard/patients' element={<Patients/>}/>
        <Route path='DashBoard/analytics' element={<Analytics/>}/>
        <Route path='DashBoard/settings' element={<Settings/>}/>
        <Route path='DashBoard/notifications' element={<NotificationsPage/>}/>
      </Route>
    </Routes>
    </ThemeProvider>
    </NotificationProvider> 
    </>
    
  );
};

export default App;