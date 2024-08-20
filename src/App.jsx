import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Scrolltop from './components/ScrollToTop'
import Home from "./pages/Home"
import Services from './pages/Services';
import Navbar from './components/Common/Navbar';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Effortless from './pages/sub pages/Effortless';
import Firmsanad from './pages/sub pages/Firmsanad';
import Elamsanad from './pages/sub pages/Elamsanad';
import Ecommerce from './pages/sub pages/Ecommerce';
import HR from './pages/sub pages/HR';
import Telehealth from './pages/sub pages/Telehealth';
import Technology from './pages/sub pages/Technology';
import Business from './pages/sub pages/Customer';
import Customer from './pages/sub pages/Business'
import Aliance from './pages/sub pages/Aliance'
import DigitalCrisis from './pages/sub pages/Digital-Crisis'
import DigitalGovernance from './pages/sub pages/Digital-Governance'
import DigitalAnalytics from './pages/sub pages/Digital-Analytics'
import WebDevelopment from './pages/sub pages/Web-Development'
import Mobile from './pages/sub pages/Mobile'
import Cloud from './pages/sub pages/Cloud'
import Infrastructure from './pages/sub pages/Infrastructure'
import DigitalSupport from './pages/sub pages/Digital-Support'
import DataManagement from './pages/sub pages/Data-Management'
import IntegrationServices from './pages/sub pages/Integration-Services'
import EnterpriseDigitalPlatforms from './pages/sub pages/Enterprise-Digital-Platforms'




const App = () => {
  return (
          <div>
        <Router >
          
              <Navbar/>   
              <Scrolltop/>

          <Routes>
            
            <Route path="/" element={<Home/>}  />
            <Route path="/services" element={<Services/>} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/effortless" element={<Effortless/>} />
            <Route path="/firmsanad" element={<Firmsanad/>} />
            <Route path="/elamsanad" element={<Elamsanad/>} />
            <Route path="/ecommerce" element={<Ecommerce/>} />
            <Route path="/hr" element={<HR/>} />
            <Route path="/telehealth" element={<Telehealth/>} />
            <Route path="/Technology" element={<Technology/>} />
            <Route path="/Business" element={<Business/>} />
            <Route path="/Customer" element={<Customer/>} />
            <Route path="/Aliance" element={<Aliance/>} />
            <Route path="/DigitalCrisis" element={<DigitalCrisis/>} />
            <Route path="/DigitalGovernance" element={<DigitalGovernance/>} />
            <Route path="/DigitalAnalytics" element={<DigitalAnalytics/>} />
            <Route path="/WebDevelopment" element={<WebDevelopment/>} />
            <Route path="/Mobile" element={<Mobile/>} />
            <Route path="/Cloud" element={<Cloud/>} />
            <Route path="/Infrastructure" element={<Infrastructure/>} />
            <Route path="/DigitalSupport" element={<DigitalSupport/>} />
            <Route path="/DataManagement" element={<DataManagement/>} />
            <Route path="/IntegrationServices" element={<IntegrationServices/>} />
            <Route path="/EnterpriseDigitalPlatforms" element={<EnterpriseDigitalPlatforms/>} />
            
           </Routes>
         </Router>
         </div> 
  )
}

export default App