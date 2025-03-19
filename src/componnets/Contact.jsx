import Swal from 'sweetalert2'
export default function ContactUs() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "2188aacc-0f2d-4279-88c3-6f15a58e2c2c");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Thank You !",
                text: "Your Messege send successfully!",
                icon: "success"
              });
              
        }
        event.target.reset();
      };
    return (
      <section className="py-5" >
        <div className="container py-5">
          <h2 className="text-center text-black display-5 mb-5 fw-bold">Contact Us</h2>
  
       
          <div className="row mb-5">
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div className="card h-100 border-0 rounded-3" style={{ backgroundColor: "#111827" }}>
                <div className="card-body text-center p-4">
                  <div className="d-flex justify-content-center mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{ backgroundColor: "#1e40af", width: "60px", height: "60px" }}
                    >
                      <i className="bi bi-telephone-fill text-white fs-4"></i>
                    </div>
                  </div>
                  <h5 className="card-title text-white mb-3">Phone Number</h5>
                  <p className="card-text text-white-50">(+212) 70000000</p>
                </div>
              </div>
            </div>
  
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div className="card h-100 border-0 rounded-3" style={{ backgroundColor: "#111827" }}>
                <div className="card-body text-center p-4">
                  <div className="d-flex justify-content-center mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{ backgroundColor: "#1e40af", width: "60px", height: "60px" }}
                    >
                      <i className="bi bi-envelope-fill text-white fs-4"></i>
                    </div>
                  </div>
                  <h5 className="card-title text-white mb-3">Email Address</h5>
                  <p className="card-text text-white-50">info@Logistocean.com</p>
                </div>
              </div>
            </div>
  
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div className="card h-100 border-0 rounded-3" style={{ backgroundColor: "#111827" }}>
                <div className="card-body text-center p-4">
                  <div className="d-flex justify-content-center mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{ backgroundColor: "#1e40af", width: "60px", height: "60px" }}
                    >
                      <i className="bi bi-geo-alt-fill text-white fs-4"></i>
                    </div>
                  </div>
                  <h5 className="card-title text-white mb-3">Location</h5>
                  <p className="card-text text-white-50">Hay Mohammadi - Agadir</p>
                </div>
              </div>
            </div>
  
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div className="card h-100 border-0 rounded-3" style={{ backgroundColor: "#111827" }}>
                <div className="card-body text-center p-4">
                  <div className="d-flex justify-content-center mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{ backgroundColor: "#1e40af", width: "60px", height: "60px" }}
                    >
                      <i className="bi bi-clock-fill text-white fs-4"></i>
                    </div>
                  </div>
                  <h5 className="card-title text-white mb-3">Opening Hours</h5>
                  <p className="card-text text-white-50">Daily (08:30AM - 08:30PM)</p>
                </div>
              </div>
            </div>
          </div>
  
          
          <div className="card border-0 rounded-4" style={{ backgroundColor: "#111827" }}>
            <div className="card-body p-4 p-lg-5">
              <h3 className="text-center text-white mb-5">Get in touch!</h3>
  
              <div className="row">
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
                      alt="Fresh seafood exports"
                      className="img-fluid position-relative rounded-3"
                      style={{ zIndex: 1 }}
                    />
                  </div>
                </div>
  
                <div className="col-lg-7">
                  <div className="mb-4 text-primary">
                    <strong>Logistocean- Fish Exports</strong>
                  </div>
  
                  <form onSubmit={onSubmit}>
                    <div className="mb-3">
                      <input
                        type="text"
                        name="name"
                        className="form-control form-control-lg border-0 py-1"
                        placeholder="Full Name.."
                        required
                        style={{ color: "black" }}
                      />
                    </div>
  
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control form-control-lg border-0 py-1"
                        placeholder="Email Address.."
                        name="email"
                        required
                        style={{  color: "black" }}
                      />
                    </div>
  
                    <div className="mb-3">
                      <input
                        type="tel"
                        className="form-control form-control-lg border-0 py-1"
                        placeholder="Phone number..."
                        name="tel"
                        required
                        style={{  color: "black" }}
                      />
                    </div>
  
                    <div className="mb-4">
                      <textarea
                        className="form-control form-control-lg border-0 py-3"
                        rows={5}
                        placeholder="Your Message Here..."
                        name="message"
                        style={{ color: "black" }}
                      ></textarea>
                    </div>
  
                   <div className="text-center"> 
                   <button
                      type="submit"
                      className="btn  btn-lg rounded-pill px-3 d-inline-flex align-items-center"
                      style={{ backgroundColor: "#1e40af", color: "white" }}
                    >
                      Send Now
                    </button>
                   </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  