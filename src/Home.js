import React from "react";
import { Link } from "react-router-dom";
import PizzaAll from "./pizzaAll/PizzaAll";
import "./App.css";
import styled from "styled-components";

const SCDisdiv = styled.div` 
  background-color: BurlyWood;
`;

const SCImg = styled.img`
  width: 50%;
 height: 300px;
`;

const SCH1=styled.h1`
text-align: center;
margin-top: 0;
`
const SCDivLink=styled.div`
text-align: center;
padding: 30px;
height: 35px;
background-color: #d0c0c0;
text-decoration-color: antiquewhite;
margin-top: 25px;
`

const SCPizzaAll= styled.div`
padding: 10px;

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
      <SCPizzaAll>
        <PizzaAll />
      </SCPizzaAll>
    </SCDisdiv>
  );
};

export default Home;
