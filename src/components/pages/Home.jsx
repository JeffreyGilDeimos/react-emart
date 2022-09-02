import React from "react";

export default function Home() {
  return (
    //  {/* // <!-- ---- Hero ---- --> */}
    <section
      id="hero"
      class="vh-100 carousel slide"
      data-bs-ride="carousel"
      style={{ paddingTop: "104px" }}
    >
      <div class="container carousel-inner h-100 d-flex align-items-center">
        <div class="carousel-item text-center active">
          <h2 class="text-white">Best Collection</h2>
          <h1 class="text-white py-2 fw-bold">NEW ARRIVALS</h1>
          <a href="login.html" class="btn">
            SHOP NOW
          </a>
        </div>
        <div class="carousel-item text-center">
          <h2 class="text-white">Best Price & Offer</h2>
          <h1 class="text-white py-2 fw-bold">NEW SEASON</h1>
          <a href="login.html" class="btn">
            BUY NOW
          </a>
        </div>
        <div class="carousel-item text-center">
          <h2 class="text-white">Best Time To Buy</h2>
          <h1 class="text-white py-2 fw-bold">SUMMER SALE</h1>
          <a href="login.html" class="btn">
            GET IT NOW
          </a>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-slide="prev"
          data-bs-target="#hero"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-slide="next"
          data-bs-target="#hero"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
}
