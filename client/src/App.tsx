import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Global.css';

import HorizontalHeader from './Components/Header/Header';
import Home from './Components/Home';
import About from './Components/CeoMessage/CEOMessage';
import ContactForm from './Components/Contact/Contact';
import Footer from './Components/Layout/Footer';
import LoginPage from './Components/Login/Login';
import RegisterForm from './Components/Registration';
import ServicesPage from './Components/Service/Service';
import DoctorDashboard from './Components/Doctor/DoctorDashboard/DoctorDashboard';
import DoctorLogin from './Components/Doctor/DoctorLogin/DoctorLogin';
import LaboratoryDashboard from './Components/LaboratoryDashboard/LaboratoryDashboard';
import HospitalDashboard from './Components/Hospital/HospitalDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <ServicesPage />
              <ContactForm />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/registration" element={<RegisterForm />} />
        <Route path="/signin" element={<LoginPage />} />
        
        {/* Doctor-specific routes */}
        <Route path="/doctor/login" element={<DoctorLogin />} />
{/* <Route path="/doctor/register" element={<DoctorForm />} /> */}
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        <Route path='/laboratory/dashboard'element={<LaboratoryDashboard/>}/>
        
        
        <Route path="*" element={<div style={{ padding: 20, color: "white" }}>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;