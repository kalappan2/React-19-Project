import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Make sure Routes and Route are imported

import './index.css'; // Your global styles (ensure .bg-overlay, .background are defined here or in App.css)
import App from './App.jsx';
import Tech from './Tech specs.jsx'; // Consider renaming to TechSpecs.jsx for convention
import Cards from './Cards.jsx';   // Consider renaming to CardsPage.jsx or similar
import FormPage from './Form.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Only if needed for Bootstrap JS components

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}> {/* App.jsx is the layout element */}
          {/* No `index` route here because App.jsx handles the "/" content itself */}
          <Route path="tech" element={<Tech />} />
          <Route path="cards" element={<Cards />} />
          <Route path="/form" element={<FormPage />} />
          
          {/* Optional: 404 for unmatched routes within the App layout */}
          <Route path="*" element={
            <div className="container text-center py-5">
              <h2>404 - Page Not Found</h2>
              <p>Sorry, the page you are looking for does not exist.</p>
              {/* <Link to="/">Go to Homepage</Link>  // If you use Link here, import it */}
            </div>
          }/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);