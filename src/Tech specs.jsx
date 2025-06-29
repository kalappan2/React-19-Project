
import React, { useContext } from 'react';
import './tech.css';
import { SpecsContext } from './App';
import techImage from './assets/img10.webp'; // Update this path if needed

function Tech() {
  const { specsTitle } = useContext(SpecsContext);

  return (
    <div>
      <div className="bi text-center p-4 mt-0 bg-light rounded">
        <h1>TECH SPECS</h1>
        <p>Power behind PS4 and PS4 Pro</p>
        <button className="btn btn-primary">PS4 Pro Tech Features</button>
      </div>

      <div className="w-100">
       <h2 className="text-center my-4" style={{ fontWeight: "700", fontFamily: "'Poppins', sans-serif" }}>
  {specsTitle}
</h2>

        <img 
          src={techImage} 
          alt="Tech Specs" 
          className="w-100 img-fluid d-block" 
          style={{ objectFit: 'cover' }} 
        />
      </div>
    </div>
  );
}

export default Tech;
