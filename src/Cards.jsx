import './card.css'
import Uncharted from './assets/Uncharted2.webp'
import Resident from './assets/residentevil-4.jpg'
import God from './assets/Gow.jpg'
import Batman from './assets/Batman.webp'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Cards() {
  const navigate = useNavigate();
  const [purchased, setPurchased] = useState([]);

  const handleBuyNow = (id) => {
    navigate('/form', { state: { productId: id } });
  };

  const products = [
    {
      id: 1,
      img: Uncharted,
      title: "UNCHARTED 4",
      price: "₹2000",
      description: "An action-adventure game featuring Nathan Drake on his greatest treasure hunt across stunning global locations."
    },
    {
      id: 2,
      img: Resident,
      title: "RESIDENT EVIL 4",
      price: "₹1500",
      description: "A survival horror classic with Leon Kennedy fighting through rural Europe to rescue the President's daughter."
    },
    {
      id: 3,
      img: God,
      title: "GOD OF WAR 3",
      price: "₹3000",
      description: "The epic conclusion to Kratos' Greek saga as he battles the gods of Olympus in spectacular combat sequences."
    },
    {
      id: 4,
      img: Batman,
      title: "BATMAN: ARKHAM ASYLUM",
      price: "₹1200",
      description: "Batman faces his greatest challenge when Joker takes over Arkham Asylum and unleashes its dangerous inmates."
    }
  ];

  return (
    <div>
      <div className="card-bg"></div>
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <div className='col col-md-6 col-xxl-3 d-flex justify-content-center mb-3' key={index}>
              <div className="card" style={{ width: '19rem', height: "380px" }}>
                <img src={product.img} className="card-img-top" alt={product.title} />
                <div className="card-body d-flex flex-column p-3">
                  <h5 className="card-title" style={{ textAlign: product.id !== 4 ? 'center' : 'left' }}>{product.title}</h5>
                  <p className="card-text" style={{ 
                    height: "70px", 
                    overflow: "hidden", 
                    marginBottom: "8px",
                    textAlign: 'center'
                  }}>{product.description}</p>
                  <p className="price-tag text-center" style={{ fontSize: "1.25rem", fontWeight: "600", color: "#000000", marginBottom: "8px" }}>{product.price}</p>
                  <div className="mt-auto text-center pb-2">
                    {purchased.includes(product.id) ? (
                      <button className="btn btn-success px-4" style={{ fontSize: "0.9rem" }} disabled>Purchased</button>
                    ) : (
                      <button className="btn btn-primary px-4" style={{ fontSize: "0.9rem" }} onClick={() => handleBuyNow(product.id)}>
                        BUY NOW
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;