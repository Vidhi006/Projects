import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Carousel() {
  return (
    <>
      <style>
        {`
          .custom-arrow {
            background-color: black !important;
            border-radius: 100%;
            padding: 15px;
          }
        `}
      </style>

      <div className="App">
        <div id="foodCarousel" className="carousel slide" data-bs-ride="carousel">
          
          {/* Overlay Search Bar */}
          <div
            className="carousel-caption d-flex justify-content-center"
            style={{ top: "10%", zIndex: "10" }}
          >
            <form className="d-flex w-75">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for food..."
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>

          {/* Carousel Images */}
          <div className="carousel-inner">
            {/* 1st Image - Burger */}
            <div className="carousel-item active">
              <img
                src="https://recipesblob.oetker.in/assets/c8f69e58cfc5442e856f28d1f197de4f/1272x764/maharaja-burger.webp"
                className="d-block w-100"
                style={{ maxHeight: "600px", objectFit: "cover", filter: "brightness(30%)" }}
                alt="Burger"
              />
            </div>

            {/* 2nd Image - Momos */}
            <div className="carousel-item">
              <img
                src="https://www.natashamohan.com/wp-content/uploads/2025/01/Weight-Loss-Momos-Recipe-scaled.webp"
                className="d-block w-100"
                style={{ maxHeight: "600px", objectFit: "cover", filter: "brightness(30%)" }}
                alt="Momos"
              />
            </div>

            {/* 3rd Image - Pizza */}
            <div className="carousel-item">
              <img
                src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg"
                className="d-block w-100"
                style={{ maxHeight: "600px", objectFit: "cover", filter: "brightness(30%)" }}
                alt="Pizza"
              />
            </div>
          </div>

          {/* Prev Button */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#foodCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon custom-arrow"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          {/* Next Button */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#foodCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon custom-arrow"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
