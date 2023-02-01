import React from "react";
import "./pizzaItem.css";
import "../data";

const PizzaItem = (props) => {
  return (
    <div className="pizzaItem">
      <div className="pizzaIsim">{props.pizza.isim}</div>
      <div>
        <img src={props.pizza.url} alt="pizzalar" className="pizzaImg" />
      </div>
      <div className="pizzaIcindekiler">{props.pizza.icindekiler}</div>
      <div className="pizzaBoyut">{props.pizza.boyut} boy</div>
      <div className="pizzaFiyat">{props.pizza.fiyat} </div>
    </div>
  );
};

export default PizzaItem;
