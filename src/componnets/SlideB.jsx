import React from 'react';

export default function SlideB() {
  return (
    <>
     
  
        <>
            {/* Carousel as Background */}
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg"
                            className="d-block w-100"
                            alt="Image 1"
                            style={{ objectFit: "cover", height: "100vh", position: "absolute", top: 0, left: 0 }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://cbx-prod.b-cdn.net/COLOURBOX60012581.jpg"
                            className="d-block w-100"
                            alt="Image 2"
                            style={{ objectFit: "cover", height: "100vh", position: "absolute", top: 0, left: 0 }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://latradcuisine.com/wp-content/uploads/2023/08/Promo-Facebook-Facebook-marketplace-18.jpeg"
                            className="d-block w-100"
                            alt="Image 3"
                            style={{ objectFit: "cover", height: "100vh", position: "absolute", top: 0, left: 0 }}
                        />
                    </div>
                </div>
            </div>

            {/*  */}
            
        </>
    


    </>
  );
}
