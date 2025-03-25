import { useState } from "react";

const WhatsAppButton = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleClick = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000); 
    window.open("https://wa.me/212649031153", "_blank"); // Replace with your WhatsApp number
  };

  return (
    <>
      <div 
        onClick={handleClick} 
        className="whatsapp-btn"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt="WhatsApp" />
      </div>

      {showNotification && (
        <div className="notification">
          📩 Redirecting to WhatsApp...
        </div>
      )}

      <style jsx>{`
        .whatsapp-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #25d366;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: transform 0.2s;
          z-index: 9999; /* Ensures it stays above everything */
        }
        .whatsapp-btn:hover {
          transform: scale(1.1);
        }
        .whatsapp-btn img {
          width: 30px;
          height: 30px;
        }
        .notification {
          position: fixed;
          bottom: 80px;
          right: 20px;
          background: #000;
          color: #fff;
          padding: 10px 15px;
          border-radius: 5px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          font-size: 14px;
          z-index: 9999; /* Keeps the notification above all elements */
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
