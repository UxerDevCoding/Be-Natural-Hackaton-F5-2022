import React from "react";
import {Link} from "react-router-dom"
import "./carousel.css";
import image_first from "../../../assets/img/Group 17.png";

export const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div id="carrusel1">
            <div id="parrafo">
              <h1 className="parra_title">BE A SUPER GREEN HUMAN BEAN</h1>
              <p className="parra_par">
                Enter the world of wellnes and Superfood benefits with our
                Greens Range products, and yoga practices.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div id="second_item">
            <div className="image_sitem">
              <img src={image_first} alt="" className="image_first" />
            </div>
            <div id="second_parra">
              <h1 className="title_seller">Our Best Sellers</h1>
              <p className="name_seller">Facial recovery oil serum</p>
              <h3 className="off_price">Receive 30% off</h3>
              <button id="carru_btn"><Link to={'/product/1'}>Watch More</Link></button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div id="carrusel2">
            <div id="parra_second">
              <h1 className="third_title">
                Try our <span className="yoga">yoga</span> and meditation
                classes.
              </h1>
              <div id="box_yoga">
                <h3 className="off_price">Receive 30% off</h3>
                <button id="carru_btn"><Link to={'/product/11'}>Watch More</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
