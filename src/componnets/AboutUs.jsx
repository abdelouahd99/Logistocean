export default function AboutUs() {
    return (
      <section className="py-5">
        <div className="container py-5">
          <h2 className="text-center text-black fw-bold display-5 mb-5">About Us</h2>
  
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="position-relative">
                <div
                  className="position-absolute"
                  style={{
                    backgroundColor: "#ff8c00",
                    width: "90%",
                    height: "90%",
                    top: "10%",
                    left: "-5%",
                    zIndex: 0,
                    borderRadius: "8px",
                  }}
                ></div>
                <img
                  src="https://rawinstinctsmia.com/cdn/shop/files/20230903-080704-01.jpg"
                  className="img-fluid position-relative rounded-3"
                  style={{ zIndex: 1 }}
                />
              </div>
            </div>
  
            <div className="col-lg-7 ps-lg-5">
              <div className="text-uppercase mb-3" >
                <strong>ABOUT OUR COMPANY</strong>
              </div>
  
              <h3 className="text-black display-6 fw-bold mb-4">
              Logistocean
              - Premium Fish Exports from Morocco!
              </h3>
  
              <div className="text-black mb-4">
                <p className="mb-4">
                  At Logistocean, we pride ourselves on delivering the finest seafood from Morocco's rich Atlantic
                  waters to markets worldwide. Located in the coastal city of Agadir Islane, we source directly from local
                  fishermen to ensure exceptional quality and freshness in every shipment.
                </p>
  
                <p>
                Logistocean
                stands out with our extensive selection of premium fish and seafood products,
                  ensuring you find the perfect match for your market demands. Our commitment to excellent service means
                  we are always here to assist you, making your import experience hassle-free. With competitive rates and
                  reliable logistics through our Porto, Portugal distribution center, you can enjoy the best of Moroccan
                  seafood without supply chain complications. Experience quality and reliability with Logistocean
                  ,
                  your trusted seafood export partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  