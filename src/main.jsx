import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// 1. CHANGE THIS LINE: Import HashRouter instead of BrowserRouter
import { HashRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import Tech from './Tech specs.jsx';
import Cards from './Cards.jsx';
import FormPage from './Form.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    {/* 2. CHANGE THIS COMPONENT: Use HashRouter as the wrapper */}
    <HashRouter>
      <Routes>
        {/* 
          This is a nested route structure. 
          For this to work, your App.jsx component MUST contain an <Outlet /> component 
          where you want the nested pages (Tech, Cards, etc.) to appear.
        */}
        <Route path="/" element={<App />}>
          
          {/* Nested routes render inside App's <Outlet /> */}
          <Route path="tech" element={<Tech />} />
          <Route path="cards" element={<Cards />} />

          {/* 3. (Minor Improvement) I removed the leading slash from "/form" for consistency */}
          <Route path="form" element={<FormPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);