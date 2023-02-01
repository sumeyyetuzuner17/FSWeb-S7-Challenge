import React from "react";
import { Link } from "react-router-dom";
import PizzaAll from "./pizzaAll/PizzaAll";
import "./App.css";
import styled from "styled-components";

const SCDisdiv = styled.div`
  margin: 0 auto;
  background-color: rgb(212, 209, 209);
`;

const SCImg = styled.img`
  margin-left: 550px;
  width: 400px;
`;

const SCH1=styled.h1`
text-align: center;
margin-top: 0;
`
const SCDivLink=styled.div`
text-align: center;

`
const bigImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPpXCtOFMN7ZV5e-1Pq7XkQIFGSaGOt5RacA&usqp=CAU";

const Home = () => {
  return (
    <SCDisdiv>
      <div className="homePizza">
        <SCH1>BİLMEMNE PİZZA</SCH1>
      </div>

      <SCDisdiv>
        <SCImg id="homePizzaImg" src={bigImg}></SCImg>
      </SCDisdiv>
      <SCDivLink>
        <Link to="/pizza" id="siparisOlustur" className="siparisButton">
          Sipariş Oluştur!
        </Link>
      </SCDivLink>
      <div>
        <PizzaAll />
      </div>
    </SCDisdiv>
  );
};

export default Home;
