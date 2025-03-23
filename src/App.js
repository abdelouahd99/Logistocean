import Menu from './componnets/Menu.jsx';
import Home from "./componnets/Home";
import Product from "./componnets/Product";
import About from "./componnets/AboutUs";
import Contact from "./componnets/Contact";
import Footer from "./componnets/Footer";
import ProductDetails from './componnets/ProductDetails.jsx';
import SmallNav from './componnets/SmallNav.jsx';
import ScrollToTop from './componnets/ScroolTop.jsx';
import WhatsAppButton from './componnets/Whatssap.jsx';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
      <BrowserRouter>
      <Menu />
      <SmallNav/>
     
      <WhatsAppButton/>
      <ScrollToTop/>
     
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
     
        
      </Routes>
      <Footer />
   
      
     
      
      </BrowserRouter> 


      
    
       
      
    
    </>
  );
}

export default App;
