import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
  <div className="jumbotron jumbotron-fluid bg-cover text-white text-center">
    <img
      src="https://vignette.wikia.nocookie.net/logopedia/images/3/37/Martin_TV_Show_logo.png/revision/latest?cb=20140424043403"
      alt=""
    />
    <h1 className="display-4 font-weight-bold">Clicky Game!</h1>
    <p className="lead font-weight-bold">
      Click on an image to earn points, but don't click the same image twice!
    </p>
  </div>
);

export default Jumbotron;
