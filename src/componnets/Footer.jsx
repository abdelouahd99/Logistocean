import React from 'react';
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'

import {  Anchor } from "lucide-react"
import logistoceanImage from './assets/images/logo.png'; 


const Footer = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2188aacc-0f2d-4279-88c3-6f15a58e2c2c");
    formData.append("message", `New subscription for Newsletter`);

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
            title: "Thank You!",
            text: "You are Now subscribed!",
            icon: "success"
        });
    }

    event.target.reset();
};

  return (
    <footer className="bg-dark text-white pt-4 pb-2">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-4">
                  <div className="d-flex align-items-center mb-3">
                              <img src={logistoceanImage } width={50} alt="Logistocean Logo" className="me-2" />
                    
                    <h4 className="mb-0">Logistocean
                    Morocco</h4>
                  </div>
                  <p className="opacity-75">
                    Premium seafood exports from the Atlantic coast of Morocco to international markets.
                  </p>
                  <div className="d-flex gap-3 mt-4">
                    <a href="#" className="btn btn-sm btn-outline-light rounded-circle p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-facebook"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </a>
                    <a href="#" className="btn btn-sm btn-outline-light rounded-circle p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>
                    <a href="#" className="btn btn-sm btn-outline-light rounded-circle p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-instagram"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <h5 className="mb-4">Quick Links</h5>
                  <ul className="list-unstyled">
                  
                  <li className="mb-2">
                        <Link   className="nav-link text-white opacity-75" to='/'>Home</Link>
                      </li>
                      <li className="mb-2">
                      <Link  className="nav-link text-white opacity-75" to='/Product'>All Product</Link>
                      </li>
                      <li className="mb-2">
                      <Link   className="nav-link text-white opacity-75" to='/About'>About us</Link>
                      </li>
                      
                      <li className="mb-2">
                      <Link  className="nav-link text-white opacity-75" to='/Contact'>Contact Us</Link>
    
                      </li>
                  </ul>
                </div>
                
                <div className="col-lg-4">
                  <h5 className="mb-4">Contact Us</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex">
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
                      <a
                            href="https://www.google.com/maps/search/Islane,+80000+Agadir,+Morocco/@30.4051496,-9.55742,1521m/data=!3m1!1e3?hl=fr&entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="opacity-75"
                        >Islane, Agadir, Morocco
                        </a>
                    </li>
                    <li className="mb-3 d-flex">
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
                      
                       Portugal,Porto
                        
                    </li>
                    <li className="mb-3 d-flex">
                      <svg
                        
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-envelope me-3 mt-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>
                      <span className="opacity-75">info@Logistocean.com</span>
                    </li>
                    <li className="mb-3 d-flex">
                      <svg
                       
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-telephone me-3 mt-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                      </svg>
                      <span className="opacity-75">+212 700000000</span>
                    </li>
                  </ul>
                  <form className="mt-4" onSubmit={onSubmit}>
                    <div className="input-group mb-3">
                      <input type="email" className="form-control" name='email' placeholder="Your email..." required />
                      <button type="submit" className="btn btn-warning">
                        Subscribe
                      </button>
                    </div>
                    <small className="text-muted">
                      Subscribe to our newsletter for updates on new products and offers.
                    </small>
                  </form>
                </div>
              </div>
              <hr className="my-4 opacity-25" />
              <div className="row">
                <div className="col-md-6">
                  <p className="mb-md-0 opacity-75">©{new Date().getFullYear()} Logistocean Morocco. All rights reserved.</p>
                </div>
                <div className="col-md-6 text-md-end">
                  <a href="#" className="text-white opacity-75 text-decoration-none me-3">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-white opacity-75 text-decoration-none">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </footer>
  );
};

export default Footer;
