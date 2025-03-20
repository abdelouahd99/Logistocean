import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Pagination} from "react-bootstrap";


export default function Products() {
    const [product, setProduct] = useState([]);
    const [Filterproduct,setFilterproduct]=useState([])
    const[selecttype,setSelecttype]=useState('')
    const [search,setSearch]=useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const productPerPage = 4;
    const indexOfLastproduct = currentPage * productPerPage;
    const indexOfFirstproduct = indexOfLastproduct - productPerPage;
    const currentproduct = Filterproduct.slice(indexOfFirstproduct, indexOfLastproduct);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get("https://almondine-quilled-fur.glitch.me/Fish.json");
                setProduct(response.data.Fish); 
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, []); 
    useEffect(()=>{
        if(search){
            const Searchproduct = product.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
            setFilterproduct(Searchproduct)

        }
        
        else{
            setFilterproduct(product)
        }
    },[search,product])
    useEffect(()=>{
        if(selecttype){
            const Selectproduct=product.filter((p)=>p.type ==selecttype)
            setFilterproduct(Selectproduct)
            if(selecttype == '-1')
                setFilterproduct(product)

        }
        else{
            setFilterproduct(product)
        }
    },[selecttype,product])
   

    return (
        <div className="container py-5">
    
      <div className="text-center mb-5 mt-2">
        <h2 className="display-5 fw-bold mb-2">Our Premium Seafood</h2>
        <p className="lead text-muted">Discover the finest selection from Morocco's Atlantic waters</p>
        
      </div>


      <div className="row justify-content-center mb-5">
        <div className="col-lg-8">
          <div className="card border-1 shadow-sm">
            <div className="card-body p-0">
              <div className="row g-0">
                <div className="col-md-9">
                  <div className="input-group ">
                    <span className="input-group-text bg-transparent border-0">
                      <i className="bi bi-search text-primary"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control border-0  "
                      placeholder="Search our products..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <select
                    className="form-select h-100 border-1 shadow-none "
                    value={selecttype}
                    onChange={(e) => setSelecttype(e.target.value)}
                  >
                    <option value="-1">Filter By Type</option>
                    {product.map((p, i) => (
                      <option key={i} value={p.type}>
                        {p.type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="row g-4">
        {currentproduct.length > 0 ? (
          currentproduct.map((product, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                <Link
            to={`/product/${product.id}`}
            className="text-decoration-none text-dark"
            
          >

              <div className="card h-100 border-2 shadow-sm rounded-3 overflow-hidden transition-all hover-shadow">
            
                <div className="position-relative overflow-hidden product-img-container">
                  <img
                    src={product.image }
                    className="card-img-top img-fluid transition-transform "
                    alt={product.name}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <div className="position-absolute top-0 end-0 p-2">
                    <span className="badge bg-primary rounded-pill px-3 py-2">${product.price_per_kg}/kg</span>
                  </div>
                  <div className="position-absolute top-0 start-0 p-2">
                    <span className="badge bg-info text-dark rounded-pill px-3 py-2">{product.type}</span>
                  </div>
                </div>
                <div className="card-body d-flex flex-column p-4">
                  <h5 className="card-title fw-bold mb-3">{product.name}</h5>
                  <p className="card-text small text-muted mb-4">
                    {product.description && product.description.length > 100
                      ? `${product.description.substring(0, 100)}...`
                      : product.description}
                  </p>
                  <div className="mt-auto">
                    <Link to={`/product/${product.id}`} className="btn btn-warning w-100 rounded-pill fw-medium">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
          </Link>
                
            </div>
            
          ))
          
        ) : (
          <div className="col-12 text-center py-5">
            <div className="mb-4">
              <i className="bi bi-search text-muted" style={{ fontSize: "3rem" }}></i>
            </div>
            <h3 className="fw-bold mb-2">No products found</h3>
            <p className="text-muted mb-4">We couldn't find any products matching your search.</p>
            <button
              className="btn btn-outline-primary rounded-pill px-4"
              onClick={() => {
                setSearch("")
                setSelecttype("-1")
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
      <Pagination className="mt-3 justify-content-center justify-content-lg-center">
                {Array.from({ length: Math.ceil(Filterproduct.length / productPerPage) }, (_, i) => (
                    <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => paginate(i + 1)}>
                        {i + 1}
                    </Pagination.Item>
                ))}
            </Pagination>

            <style jsx>{`
        .hover-shadow:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
  transform: translateY(-8px);
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
      `}</style>

   
      
    </div>
    );
}
