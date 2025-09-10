import React from "react";
import data from "./Card.json";

const Car = () => {
  return (
    <div
      id="1"
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        padding: "20px",
      }}
    >
      {data.limitedPopularModels.map((car, index) => (
        <div key={index} className="card" style={{ width: "18rem" }}>
          <img
            src={car.image}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
            className="card-img-top"
            alt={car.model.name}
          />
          <div className="card-body">
            <h5 className="card-title">{car.brand.name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Car Model: {car.model.name}</li>
            <li className="list-group-item">Car Price: {car.lowestTrimPrice}</li>
            <li className="list-group-item">Car Year: {car.year.name}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Car;
