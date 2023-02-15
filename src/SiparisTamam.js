import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SCDiv = styled.div`
  background-color: BurlyWood;
`;

const SCDivDis = styled.div`
  padding: 10px;
  background-color: BurlyWood;
`;

const SCP = styled.p`
  font-weight: bold;
  color: black;
  
`;

const SiparisTamam = (props) => {
  // const { data,adres,isim ,soyisim,pizzaSecim,boyut,kalinlik,icecek} = props;

  console.log("PROPSLAR", props);

  // console.log("burdayım",props)
  // console.log("DATA",data)

  const resim =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6mErKnc8rv6JdoLWxdcDYxa7-tWDilM8Bsg&usqp=CAU";

  return (
    <SCDiv>
      <div>
        <img id="siparisTamam" src={resim}></img>
      </div>

      <SCDivDis>
        <div>
          <SCP>
            <span>
             
              Tebrikler! Pizza'nız hazırlanmaya başlandı. <br /> Siparişiniz 30
              dk içersinde adresinize teslim edilecektir. <br />
            </span>
          </SCP>
        </div>
        <div>
          <h2>Sipariş Detayı</h2>
        </div>
        <div>
          <SCP>
            İsim/Soyisim : {props.data.isim} {props.data.soyisim}
          </SCP>
        </div>
        <div>
          <SCP>Adres: {props.data.adres}</SCP>
        </div>
        <div>
          <SCP>Pizza ismi:{props.data.pizzaSecim}</SCP>
        </div>
        <div>
          <SCP>Pizza Boyutu: {props.data.boyut}</SCP>
        </div>
        <div>
          <SCP>Pizza Hamur kalınlığı : {props.data.kalinlik}</SCP>
        </div>
        <div>
          <SCP>{props.data.icecek}</SCP>
        </div>
        <div>
          Ekstra Malzemeler:
          <ul>
            {props.data.malzemeler.map((item) => {
              return <li key={item.index}>{item}</li>;
            })}
          </ul>
        </div>
      </SCDivDis>

      <Link to="/pizza">Tekrar sipariş ver!</Link>
    </SCDiv>
  );
};

export default SiparisTamam;
