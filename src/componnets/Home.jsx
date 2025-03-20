

import { Link } from "react-router-dom"
import { Search, Fish ,ChevronRight } from "lucide-react"
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {
    const [datafish,setDatafish]=useState([])
    const [search,setSearch]=useState('')
    const[filterproduct,setFilterproduct]=useState([])
   

  const whyChose = [
    {
      title: "Sustainable Fishing",
      description: "All our products are sourced using sustainable fishing practices to protect marine ecosystems",
    },
    {
      title: "Quality Control",
      description: "Rigorous quality control measures ensure only the finest seafood reaches your business",
    },
    {
      title: "Global Logistics",
      description: "Our efficient logistics network ensures timely delivery to any destination worldwide",
    },
    {
      title: "Competitive Pricing",
      description: "Direct sourcing from Moroccan fisheries allows us to offer competitive wholesale prices",
    }
  ];
 
  useEffect(()=>{
    axios.get('https://almondine-quilled-fur.glitch.me/Fish.json')
    .then(response => { setDatafish(response.data.Fish)})
  },[])
   useEffect(()=>{
          if(search){
              const Searchproduct = datafish.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
              setFilterproduct(Searchproduct)
              document.getElementsByClassName('hero-section')[0].style.height = '55vh';
              


              
  
          }
          
          else{
              setFilterproduct(datafish)
              document.getElementsByClassName('hero-section')[0].style.height = '85vh';

          }
      },[search,datafish])
  

  return (
    <div className="fish-export-website" >
            


    
     
    <div
      className="hero-section position-relative py-0"
      style={{
        height: '85vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        animation: 'backgroundChange 16s infinite', 
      }}
    >
         <style jsx>{`
        @keyframes backgroundChange {
          0% {
            background-image: url('https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg');
          }
          26% {
            background-image: url('https://images.pexels.com/photos/2131828/pexels-photo-2131828.jpeg');
          }
          66% {
            background-image: url('https://images.pexels.com/photos/5798229/pexels-photo-5798229.jpeg');
          }
          100% {
            background-image: url('https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg');
          }
        }
      `}</style>
      

      
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12 p-4 p-md-5 text-white">
            <div className="py-4 py-lg-5 px-lg-4 mt-3 text-center text-lg-start">
              <div className="mb-4 mx-auto" style={{ maxWidth: "900px" }}>
                <h1 className="display-5 fw-bold mb-3">Premium Fish Exports from 
                    Morocco</h1>

                <p  className=" p_description opacity-90 fw-bold">
                  Delivering the finest selection of fresh and frozen seafood from the Atlantic coast of Morocco to
                  international markets. 
                </p>
              
              </div>

              <div className="search-box position-relative mb-4 mx-auto" style={{ maxWidth: "600px" }}>
                <div className="input-group input-group-lg">
                  <span className="input-group-text bg-white border-0">
                    <Search size={20} />
                  </span>
                  <input
                    type="text"
                    className="form-control border-0 py-2"
                    placeholder="Search our products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
              </div>

              <div className="d-flex flex-wrap gap-3 mb-4 justify-content-center justify-content-lg-center">
                <Link to="/product" className="btn btn-light btn-lg rounded-pill px-3 d-flex align-items-center">
                  <Fish className="me-2" size={20} />
                  Browse Our Products
                </Link>
                <Link
                  to="https://www.google.com/maps/search/Islane,+80000+Agadir,+Morocco/@30.4051496,-9.55742,1521m/data=!3m1!1e3?hl=fr&entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
                  className="btn btn-light btn-lg rounded-pill px-3 d-flex align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-geo-alt me-3 mt-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  Our Location
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      
      <div className="container py-5 " >
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="fw-bold">Our Products</h2>
            <p className="text-muted">Explore our premium selection of Moroccan seafood</p>
          </div>
        </div>
        <div className="container py-4">
      <div className="row g-4">
        {filterproduct.length > 0 ? (
          filterproduct.slice(0, 4).map((product, index) => (
            <div className="col-sm-6 col-lg-3 border-1" key={index} >
              <Link to={`/product/${product.id}`} className="text-decoration-none">
                <div className="card h-100 border-2 shadow-sm rounded-4 overflow-hidden transition-all hover-shadow">
                  <div className="position-relative overflow-hidden product-img-container">
                    <img
                      src={product.image || "/placeholder.svg"}
                      className="card-img-top img-fluid transition-transform"
                      alt={product.name}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="position-absolute top-0 end-0 p-3">
                      <span className="badge bg-primary rounded-pill px-3 py-2 fw-semibold shadow-sm">
                        ${product.price_per_kg}/Kg
                      </span>
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column p-4">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="card-title fw-bold mb-0 text-dark">{product.name}</h5>
                      <span className="badge bg-info text-dark rounded-pill px-3 py-2 ms-2 fw-medium">
                        {product.type}
                      </span>
                    </div>
                    <p className="card-text text-muted mb-3 small">{product.description}</p>
                    <div className="mt-auto ">
                      <Link to={`/product/${product.id}`} className="btn btn-warning w-100 justify-content-center rounded-pill fw-medium py-2 shadow-sm">View Details </Link>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="col-12 text-center my-5 py-5">
            <div className="mb-4">
              <i className="bi bi-search text-muted" style={{ fontSize: "3.5rem" }}></i>
            </div>
            <h3 className="fw-bold mb-3">No products found</h3>
            <p className="text-muted mb-4">We couldn't find any products matching your search.</p>
            <button
              className="btn btn-outline-primary rounded-pill px-4 py-2 fw-medium"
              onClick={() => {
                setSearch("")
              }}
            >
              <i className="bi bi-arrow-counterclockwise me-2"></i>
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>

    

        <div className="text-center ">
        <Link
      to="/product"
      className="btn btn-warning btn-lg rounded-pill px-3 py-2 d-inline-flex align-items-center justify-content-center fw-semibold shadow-custom position-relative overflow-hidden button-animated"
    >
      <span className="me-2">View All Products</span>
      <div className="icon-container d-flex align-items-center justify-content-center">
        <ChevronRight size={20} className="chevron-icon" />
      </div>
    </Link>
        </div>
      </div>

     
      

     
      <div className="bg-light py-5 mt-5">
        <div className="container py-4">
          <div className="row mb-5 text-center">
            <div className="col-lg-8 mx-auto">
              <h2 className="fw-bold mb-3">Why Choose  Logistocean     </h2>
              <p className="lead text-muted">
                We pride ourselves on delivering the highest quality seafood products from Morocco to global markets
              </p>
            </div>
          </div>

          <div className="row g-4">
            {whyChose.map((item, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="card h-100 border-0 rounded-4 shadow-sm p-4">
                  <div className="card-body text-center">
                    <div
                      className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto mb-4"
                      style={{ width: "70px", height: "70px" }}
                    >
                      <span className="text-white fw-bold fs-4">{index + 1}</span>
                    </div>
                    <h4 className="card-title mb-3">{item.title}</h4>
                    <p className="card-text text-muted">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
           
          </div>
          <div className="text-center mt-4">
          <Link to="/contact" className="btn btn-primary btn-lg rounded-pill px-1 d-inline-flex align-items-center">
            Contact Us Now
            <ChevronRight size={20} className="ms-2" />
          </Link>
        </div>
        </div>
      </div>
      <style jsx>{`
        .hover-shadow:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
  transform: translateY(-5px);
}

.transition-all {
  transition: all 0.3s ease;
}

.transition-transform {
  transition: transform 0.5s ease;
}

.product-img-container:hover .transition-transform {
  transform: scale(1.05);
}
  /* Add these styles to your global CSS */
.shadow-custom {
  box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);
  transition: all 0.3s ease;
  border: none;
}

.shadow-custom:hover {
  box-shadow: 0 6px 20px rgba(255, 193, 7, 0.4);
  transform: translateY(-2px);
}

.shadow-custom:active {
  transform: translateY(1px);
  box-shadow: 0 2px 10px rgba(255, 193, 7, 0.3);
}

.button-animated {
  background: linear-gradient(45deg, #ffb700, #ffc107);
  border: none;
  position: relative;
  z-index: 1;
}

.button-animated::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ff9500, #ffb700);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s ease;
  border-radius: 50px;
}

.button-animated:hover::before {
  opacity: 1;
}

.icon-container {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 28px;
  height: 28px;
  margin-left: 5px;
  transition: transform 0.3s ease;
}

.button-animated:hover .icon-container {
  transform: translateX(3px);
}

.chevron-icon {
  transition: transform 0.6s ease;
}

.button-animated:hover .chevron-icon {
  transform: translateX(2px);
}


      `}</style>
      

      
      
    </div>
  )
}

