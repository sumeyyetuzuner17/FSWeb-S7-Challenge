import React from "react";
import { Link } from "react-router-dom";

const SiparisTamam = (props) => {
  // const { data,adres,isim ,soyisim,pizzaSecim,boyut,kalinlik,icecek} = props;

  console.log("PROPSLAR", props);

  // console.log("burdayım",props)
  // console.log("DATA",data)
  return (
    <>
      <div>
        <p>
          Tebrikler! Pizza'nız hazırlanmaya başlandı. <br /> Siparişiniz 30 dk
          içersinde em{props.data.adres} adrese {props.data.isim}
          {props.data.soyisim} müşterimize teslim edilecektir. <br />
        </p>
      </div>
      <div>
        <h3>Sipariş Detayı</h3>
      </div>
      <p>Pizza ismi:{props.data.pizzaSecim}</p>
      <p>Pizza Boyutu: {props.data.boyut}</p>
      <p>Pizza Hamur kalınlığı : {props.data.kalinlik}</p>
      <p>{props.data.icecek}</p>
      <div>
        Ekstra Malzemeler:
        {/* <ul>
        {props.data.malzemeler.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>  */}
      </div>

      <Link to="/">Tekrar sipariş ver!</Link>
    </>
  );
};

export default SiparisTamam;
