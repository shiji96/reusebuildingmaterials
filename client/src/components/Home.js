import React from "react";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <p></p>

      <div class="container">
        <div class="row">
          <div>
            <img
              class="center"
              src="Dome-1.png"
              alt=""
              width={500}
              height={310}
            />
          </div>
        </div>
      </div>

      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <h1 className="text"> Welcome to Reuse Building Materials !</h1>
      <p></p>
      <p className="content">
        {" "}
        This is a MERN stack tool developed for the tracking, storing and
        accessing of reused building data. The user is able to add a material to
        the MongoDB database and also view, update and delete the materials
        saved in the database. For the tracking purpose, a QR code can be
        uniquely created and also read to see the material details.
      </p>
      <p className="content">
        {" "}
        This MERN stack tool is developed by Shiji Cheriyamulla as part of my Master Thesis.
      </p>

      <div className="home">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img src="Image5.jpg" alt="" width={500} height={300} />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Dome1 Project </h1>
              <p>
                This is the Project Page for Dome1 completed by CEA. Below are a
                list of the inventoried materials used in the construction of
                Dome1. Scan the QR code on the discrete elements to route
                directly to their product page displaying their relevant
                information documented or navigate through this page.
              </p>

              <a href="https://cea-eth.github.io/dome1/">Read more</a>
            </div>
          </div>
        </div>
      </div>

      <div className="home">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img src="Image6.jpg" alt="" width={500} height={300} />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">
                Circular Engineering for Architecture, ETH Zürich
              </h1>
              <p>
                The Chair of Circular Engineering for Architecture (CEA)
                develops research on matching reused architectural materials &
                projects through digitalization for circularity. Building design
                projects are often complex, multi-​variant problems addressed by
                numerous parties working in separate silos. The construction
                industry can learn from other sectors about adopting digital
                technologies and circular strategies. Automating the reuse of
                materials in architecture can fill this gap by connecting actors
                across the value chain.{" "}
              </p>

              <a href="https://cea.ibi.ethz.ch/">Read more</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
