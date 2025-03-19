"use client"

import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import axios from "axios"
import _ from "lodash";

export default function ProductDetails() {
  const { id } = useParams()

  const [product, setProduct] = useState(null)
  const [allproduct,setAllprodutc]=useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const randomSelection = _.shuffle(allproduct).slice(0, 4);
  console.log( "randomm data ",randomSelection);

  useEffect(() => {
    const fetchAllProduit = async () => {
      try {
        const dataRes = await axios.get("https://almondine-quilled-fur.glitch.me/Fish.json");
        setAllprodutc(dataRes.data.Fish);
        console.log("data fetched:", dataRes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAllProduit();
  }, []); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://almondine-quilled-fur.glitch.me/Fish.json");
        const fetchedProducts = response.data.Fish;  
        const selectedProduct = fetchedProducts.find(item => item.id === id); 
        
        if (selectedProduct) {
          setProduct(selectedProduct); 
        } else {
          setError("Product not found");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Failed to load product details. Please try again later.");
        setLoading(false);
      }
    };
  
    fetchProduct();
  }, [id]);
  

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading product details...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
        <button className="btn btn-primary" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning" role="alert">
          Product not found.
        </div>
        <Link to="/" className="btn btn-primary">
          Return to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-5 mt-4">
     
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/product" className="text-decoration-none">
              Products
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>

      <div className="card border-0 shadow-sm overflow-hidden">
        <div className="row g-0">
         
                <div className="col-md-5 position-relative">
                    <div className="ratio ratio-1x1">
                    <img
                        src={product.image }
                        className="img-fluid object-fit-cover"
                        alt={product.name}
                    />
                    </div>
                    
                    <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-warning text-dark rounded-pill px-3 py-2">${product.price_per_kg}/kg</span>
                    </div>
          </div>

         
          <div className="col-md-6 ">
            <div className="card-body   ">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <h1 className="card-title fw-bold mb-0">{product.name}</h1>
              </div>

              <div className="mb-4">
                <div className="d-flex gap-2 mb-3">
                  <span className="badge bg-secondary">Type: {product.type}</span>
                </div>

                <h5 className="fw-bold mb-3">Description</h5>
                <p className="card-text">{product.description}</p>
              </div>

             
              {product.nutritional_value && (
                <div className="mb-4">
                  <h5 className="fw-bold mb-3">Nutritional Value (per 100g)</h5>
                  <div className="row g-3">
                    <div className="col-md-4">
                      <div className="card h-70 bg-light border-1">
                        <div className="card-body text-center">
                          <div className="d-flex align-items-center justify-content-center mb-1">
                            <i className="bi bi-egg-fill fs-3 text-success"></i>
                          </div>
                          <h6 className="fw-bold">Protein</h6>
                          <p className="mb-0 fs-5">{product.nutritional_value.protein}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card h-100 bg-light border-1">
                        <div className="card-body text-center">
                          <div className="d-flex align-items-center justify-content-center mb-2">
                            <i className="bi bi-droplet-fill fs-3 text-warning"></i>
                          </div>
                          <h6 className="fw-bold">Fat</h6>
                          <p className="mb-0 fs-5">{product.nutritional_value.fat}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card h-100 bg-light border-1">
                        <div className="card-body text-center">
                          <div className="d-flex align-items-center justify-content-center mb-2">
                            <i className="bi bi-fire fs-3 text-danger"></i>
                          </div>
                          <h6 className="fw-bold">Calories</h6>
                          <p className="mb-0 fs-5">{product.nutritional_value.calories}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              
             

              {/* Pricing and Contact */}
              <div className="d-flex flex-column gap-3 mt-4">
                <div className="d-flex align-items-center">
                  <h3 className="fw-bold mb-0 me-3">${product.price_per_kg}/kg</h3>
                  <Link to="/contact" className="btn btn-warning btn-lg">
                    <i className="bi bi-envelope me-2"></i>
                    Contact Us
                  </Link>
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="row mt-5 g-4">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="rounded-circle bg-primary bg-opacity-10 p-3 me-3">
                  <i className="bi bi-truck text-primary fs-4"></i>
                </div>
                <h5 className="card-title fw-bold mb-0">Shipping Information</h5>
              </div>
              <p className="card-text">
                We offer worldwide shipping with temperature-controlled containers to ensure freshness. Minimum order
                quantities apply.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="rounded-circle bg-primary bg-opacity-10 p-3 me-3">
                  <i className="bi bi-shield-check text-primary fs-4"></i>
                </div>
                <h5 className="card-title fw-bold mb-0">Quality Guarantee</h5>
              </div>
              <p className="card-text">
                All our products undergo rigorous quality control and are certified for international export. We
                guarantee freshness and quality.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="rounded-circle bg-primary bg-opacity-10 p-3 me-3">
                  <i className="bi bi-box-seam text-primary fs-4"></i>
                </div>
                <h5 className="card-title fw-bold mb-0">Packaging Options</h5>
              </div>
              <p className="card-text">
                We offer various packaging options to suit your needs, from bulk containers to retail-ready packaging
                with your branding.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-5">
    <h3 className="fw-bold mb-4">You May Also Like</h3>
    <div className="row g-4">
      {randomSelection.map((item) => (
        <div className="col-md-6 col-lg-3" key={item.id}> {/* Use item.id as the unique key */}
          <div className="card h-100 border-0 shadow-sm">
            <img
              src={item.image} // Ensure item.image exists
              className="card-img-top"
              alt="Related product"
              style={{ height: "180px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">{item.name}</h5> {/* Use item.name */}
              <p className="card-text text-muted small">
              {item.description && item.description.length > 100
                      ? `${item.description.substring(0, 100)}...`
                      : item.description}
              </p>
              
               <Link to={`/product/${item.id}`} className="btn btn-warning w-100 rounded-pill fw-medium">
                                    View Details
                                  </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
    </div>
  )
}

