import React from "react";
import PizzaItem from "../pizzaItem/PizzaItem";
import { data } from "../data";
import "./pizzaAll.css";

const PizzaAll = () => {
  return (
    <div className="pizzaAllForm">
      <div>
        <p> HAZIR PİZZALAR</p>
      </div>
      <div className="pizzaAll">
        {data.map((pizza) => (
          <PizzaItem pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaAll;