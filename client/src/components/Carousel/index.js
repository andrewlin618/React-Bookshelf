import React from "react";
import "./style.css";

function Carousel(){
    return(
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://i.ibb.co/R044GQr/3.png" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://i.ibb.co/71DXTnY/2.png" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://i.ibb.co/hWbDDhv/1.png" alt="Third slide" />
                </div>
            </div>
        </div>
    )
}

export default Carousel;
