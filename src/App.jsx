import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portfolio from "./Pages/Portfolio";
import ContactPage from "./Pages/Contact";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { AnimatePresence } from 'framer-motion';
import ProjectPageLayout from "./Pages/ProjectPage";

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  useEffect(() => {
    console.log('LandingPage mounted');
    console.log('showWelcome:', showWelcome);
  }, []);

  return (
    <div className="debug-landing-page" style={{ minHeight: '100vh', backgroundColor: '#030014' }}>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => {
            console.log('WelcomeScreen complete');
            setShowWelcome(false);
          }} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <div className="debug-content">
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Portfolio />
          <ContactPage />
          <footer>
            <center>
              <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
              <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                © 2025 Aditya. All Rights Reserved.
              </span>
            </center>
          </footer>
        </div>
      )}
    </div>
  );
};

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <footer>
      <center>
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          © 2025{" "}
        
          . All Rights Reserved.
        </span>
      </center>
    </footer>
  </>
);

function App() {
  useEffect(() => {
    console.log('App mounted');
  }, []);

  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="debug-app" style={{ minHeight: '100vh', backgroundColor: '#030014' }}>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <LandingPage 
                showWelcome={showWelcome} 
                setShowWelcome={setShowWelcome} 
              />
            } 
          />
          <Route path="/project/:id" element={<ProjectPageLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;