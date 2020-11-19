import React from "react";

//media
import carousel1 from "../assets/carousel-1.jpg";
import carousel2 from "../assets/carousel-2.jpg";
import carousel3 from "../assets/carousel-3.jpg";
import carousel4 from "../assets/carousel-4.jpg";
import carousel5 from "../assets/carousel-5.jpg";
import carousel6 from "../assets/carousel-6.jpg";

function HomePage() {
    return (
        <div>
           
        <div className="card bg-dark mb-4">
            <div className="card-body">
                <h3 className="card-title text-center text-light">Community Guidlines</h3>
                <p>Travel-full is a place for people to share incredible food experiences 
                    that they have had whilst on the road, at the beach or where ever else 
                    you adventurous spirit may have taken you. Travel-full is dedicated to 
                    providing a harassment-free and inclusive event experience for everyone 
                    regardless of gender identity and expression, sexual orientation, disabilities,
                    neurodiversity, physical appearance, body size, ethnicity, nationality, race, age, 
                    religion, or other protected category. We do not tolerate harassment of 
                    event participants in any form. Travel-Full takes violations of our policy 
                    seriously and will respond appropriately.</p>
            </div>
        </div>
       

        <div id="carouselExampleControls" class="carousel slide mb-4" data-ride="carousel">
            <div class="carousel-inner">
                      <div class="carousel-item active">
                              <img class="d-block w-100" src={carousel1} alt="First slide"></img>
                     </div>
                    <div class="carousel-item">
                                  <img class="d-block w-100" src={carousel2} alt="Second slide"></img>
                    </div>
                    <div class="carousel-item">
                               <img class="d-block w-100" src={carousel3} alt="Third slide"></img>
                    </div>
                    <div class="carousel-item">
                               <img class="d-block w-100" src={carousel4} alt="Fourth slide"></img>
                    </div>
                    <div class="carousel-item">
                               <img class="d-block w-100" src={carousel5} alt="Fifth slide"></img>
                    </div>
                    <div class="carousel-item">
                               <img class="d-block w-100" src={carousel6} alt="sixth slide"></img>
                    </div>
             </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>

        </div>
    );
}

export default HomePage;