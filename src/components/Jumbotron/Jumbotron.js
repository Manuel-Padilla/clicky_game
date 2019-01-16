import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
  <div className="jumbotron text-white text-center">
    <img
      className="jumbo-logo"
      src="https://vignette.wikia.nocookie.net/logopedia/images/3/37/Martin_TV_Show_logo.png/revision/latest?cb=20140424043403"
      alt=""
    />
    <h1 className="jumbo-heading">Clicky Game!</h1>
    <p className="jumbo-p">
      Test your memory by clicking on all Martin characters.
      <br />
      Just don't click an image twice.
    </p>
  </div>
);

export default Jumbotron;
