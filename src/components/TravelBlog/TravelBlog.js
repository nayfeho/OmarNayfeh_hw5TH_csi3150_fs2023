import React from "react";
import "./TravelBlog.css";

const TravelBlog = (props) => {
  return (
    <div className="section">
      <h1>{props.placeHeading}</h1>
      <div className="images">
        <img src={props.placeImg1} alt="Image 1" width={300} height={300} />
        <img src={props.placeImg2} alt="Image 2" width={300} height={300} />
        <img src={props.placeImg3} alt="Image 3" width={300} height={300} />
      </div>
      <h3>{props.placeDescription}</h3>
    </div>
  );
};

export default TravelBlog;
