import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Admin from './components/admin';
import Main from './components/main';
import Signin from './components/main/Signin';
import Signup from './components/main/Signup';
import Contact from './components/main/Contact';
import About from './components/main/About';
import Home from './components/main/Home';
import UserAuth from './auth/UserAuth';
import User from './components/user';
import UserProfile from './components/user/UserProfile';
import AdminProfile from './components/admin/AdminProfile';
import NotFound from './components/NotFound';
import AdminAuth from './auth/AdminAuth';
import UserProvider from './context/UserProvider';
import AdminProvider from './context/AdminProvider';
import { useState } from 'react';
import PredictPlantDisease from './components/user/PredictPlantDisease';
import PredictionHistory from './components/user/PredictionHistory';
import { Toaster } from 'react-hot-toast';
import CurePage from './components/user/CurePage';

function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const [currentAdmin, setCurrentAdmin] = useState(JSON.parse(sessionStorage.getItem('admin')));

  return (
    <BrowserRouter>
    <Toaster position='top-center' />
      <AdminProvider currentUser={currentAdmin}>
        <UserProvider currentUser={currentUser}>
          <Routes>
            <Route element={<Navigate to="/main/home" />} path="/" />
            <Route
              element={
                // <AdminAuth>
                // </AdminAuth>
                <Admin />
              }
              path="admin"
            >
              <Route element={<AdminProfile />} path="profile" />
            </Route>
            <Route element={<Main />} path="main">
              <Route element={<About />} path="about" />
              <Route element={<Contact />} path="contact" />
              <Route element={<Home />} path="home" />
              <Route element={<Signin />} path="signin" />
              <Route element={<Signup />} path="signup" />
              <Route element={<Contact />} path="contact" />
              <Route element={<About />} path="aboutus" />
            </Route>

            <Route
              element={
                <UserAuth>
                  <User />
                </UserAuth>
              }
              path="user"
            >
              <Route path="profile" element={<UserProfile />} />
              <Route path="predict" element={<PredictPlantDisease />} />
              <Route path="history" element={<PredictionHistory />} />
              <Route path="cure" element={<CurePage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </AdminProvider>
    </BrowserRouter>
  );
}

export default App;
