import React, { createContext, useEffect, useRef } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

// We no longer need to import `Offcanvas` from Bootstrap JS
// import { Offcanvas } from 'bootstrap'; 

import './App.css';

// Import all your images
import img2 from './assets/img2.webp';
import img3 from './assets/img3.webp';
import img5 from './assets/img5.webp';
import img7 from './assets/img7.webp';
import ps from './assets/ps5.jpg';
import pic6 from './assets/pic6.webp';

export const SpecsContext = createContext();

function App() {
  const location = useLocation();
  const specsTitle = "PS5 Architecture And Model";

  // 1. Create a ref for the OFF CANVAS CLOSE BUTTON
  const offcanvasCloseButtonRef = useRef(null);

  // 2. This is the ONLY effect we need. It runs on every navigation.
  useEffect(() => {
    // If the close button exists in the DOM, simulate a click on it.
    if (offcanvasCloseButtonRef.current) {
      offcanvasCloseButtonRef.current.click();
    }
  }, [location]); // Re-runs every time the URL changes.

  return (
    <SpecsContext.Provider value={{ specsTitle }}>
      <div>
        {/* Header */}
        <header style={{ padding: '1rem', backgroundColor: '#343a40', color: 'white', borderBottom: '1px solid #495057' }}>
          <div className="container">
            <h2 style={{ marginBottom: '0.5rem' }}><i className="fa-brands fa-playstation"></i> PlayStation World</h2>
            <button className="btn btn-primary s4" data-bs-toggle="offcanvas" data-bs-target="#mainOffcanvas" style={{ marginTop: "12px" }}>
              ABOUT PLAYSTATION DETAILS
            </button>

            {/* Offcanvas */}
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="mainOffcanvas" aria-labelledby="mainOffcanvasLabel" style={{ backgroundColor: "black" }}>
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="mainOffcanvasLabel"></h5>
                {/* 3. Attach the ref to the close button */}
                <button ref={offcanvasCloseButtonRef} type="button" className="btn-close text-white" data-bs-dismiss="offcanvas" aria-label="Close" style={{ filter: 'invert(1)' }}></button>
              </div>
              <div className="offcanvas-body">
                <nav className="nav flex-column">
                  <div className="w-100">
                    <img src={ps} className="img-fluid" alt="PlayStation" />
                  </div>
                  <div style={{ paddingTop: "20px" }}>
                    <Link to="/" className="nav-link" style={{ fontSize: "18px", color: "white", textAlign: "center", fontWeight: "700" }}>HOME</Link>
                    <Link to="/tech" className="nav-link" style={{ fontSize: "18px", color: "white", textAlign: "center", fontWeight: "700" }}>PLAYSTATION TECH SPECS</Link>
                    <Link to="/cards" className="nav-link" style={{ fontSize: "18px", color: "white", textAlign: "center", fontWeight: "700" }}>PRODUCTS</Link>
                  </div>
                  <div className="w-100 mt-4">
                    <img src={pic6} className="img-fluid" alt="Product image" />
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main style={{ paddingBottom: '1rem' }}>
          {location.pathname === '/' && (
            <>
              {/* Hero Section */}
              <div className="container-fluid position-relative p-0">
                <div className="bg-overlay d-flex align-items-center">
                  <div className="container py-5">
                    <div className="row align-items-center">
                      <div className="col-12 col-md-6 text-white mb-4 mb-md-0">
                        <h1>Great experiences that stay with you on PS4™ and PS5™</h1>
                        <p>Discover some of the games, features and experiences that unite PS4 and PS5 consoles, and how the power of PlayStation®5 lets you push the boundaries of play.</p>
                        <div className="d-flex flex-column flex-md-row gap-2">
                          <button className="btn btn-primary">Find more</button>
                          <button className="btn btn-primary">Upgrading from PS4 to PS5</button>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 text-center">
                        <img src={img7} alt="PlayStation Experience" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Other Homepage Sections */}
              <div className='container mt-5'>
                <div className='row'>
                  <div className='col-12 text-center'>
                    <p style={{ color: "blue", fontSize: "32px" }}>Choose your PS4™ console</p>
                    <p>Your choice of power. The same amazing games and entertainment.</p>
                  </div>
                  <div className='col-md-6 text-center text-md-start mb-4 mb-md-0'>
                    <img src={img2} className='img-fluid mb-3' alt="PS4" />
                    <p style={{ color: "blue", fontSize: "25px" }}>PlayStation®4</p>
                    <p>Incredible games live on PS4, with 500GB or 1TB storage.<br />Vertical stand sold separately</p>
                  </div>
                  <div className='col-md-6 text-center text-md-start'>
                    <img src={img3} className='img-fluid mb-3' alt="PS4 Pro" />
                    <p style={{ color: "blue", fontSize: "25px" }}>PlayStation®4 Pro</p>
                    <p>4K-gaming and entertainment with vibrant HDR1<br />Vertical stand sold separately</p>
                  </div>
                </div>
              </div>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col background'>
                    <h1 style={{ color: "white", fontSize: "30px" }}>Playstation Hits</h1>
                    <p style={{ color: "white", fontSize: "18px" }}>Catch up with old friends at an affordable price...<br></br> missed.</p>
                    <img src={img5} className='img5' alt="Playstation Hits" />
                    <button>Browse Range</button>
                  </div>
                </div>
              </div>
            </>
          )}
          <Outlet />
        </main>

        {/* Full Footer Section */}
        <footer style={{ textAlign: 'center', padding: '2rem 1rem', marginTop: '2rem', backgroundColor: '#00439cff', borderTop: '1px solid #dee2e6', color: 'whitesmoke', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
          <hr style={{ color: 'white' }} />
          <div className="container">
            <div className="row text-center text-md-start justify-content-center">
              <div className="col-12 col-sm-6 col-lg-3 mb-4">
                <h5 className="fw-bold">About</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white text-decoration-none d-block py-1 hover-underline">About SIE</a></li>
                  <li><a href="#" className="text-white text-decoration-none d-block py-1 hover-underline">Careers</a></li>
                  <li><a href="#" className="text-white text-decoration-none d-block py-1 hover-underline">PlayStation Studios</a></li>
                </ul>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 mb-4">
                <h5 className="fw-bold">Products</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white text-decoration-none d-block py-1 hover-underline">PS5</a></li>
                  <li><a href="#" className="text-white text-decoration-none d-block py-1 hover-underline">PS VR2</a></li>
                  <li><a href="#" className="text-white text-decoration-none d-block py-1 hover-underline">PS Plus</a></li>
                </ul>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 mb-4">
                <h5 className="fw-bold">Support</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white text-decoration-none d-block py-1 hover-underline">Support hub</a></li>
                  <li><a href="#" className="text-white text-decoration-none d-block py-1 hover-underline">PlayStation Safety</a></li>
                  <li><a href="#" className="text-white text-decoration-none d-block py-1 hover-underline">PSN Status</a></li>
                </ul>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 mb-4">
                <h5 className="fw-bold">Resources</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white text-decoration-none d-block py-1 hover-underline">PSN terms of service</a></li>
                  <li><a href="#" className="text-white text-decoration-none d-block py-1 hover-underline">Age ratings</a></li>
                  <li><a href="#" className="text-white text-decoration-none d-block py-1 hover-underline">Developers</a></li>
                </ul>
              </div>
            </div>
          </div>
          <hr style={{ color: 'white' }} />
          <style>{`.hover-underline:hover {text-decoration: underline; color: #dcdcdc;}`}</style>
        </footer>
      </div>
    </SpecsContext.Provider>
  );
}

export default App;