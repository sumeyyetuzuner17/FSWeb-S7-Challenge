import React from "react";
import { useFormik } from "formik";
import validations from "./validations";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import SiparisTamam from "./SiparisTamam";

const SCDiv = styled.div`
  margin: 0 auto;
`;

const SCForm = styled.form`
  background-color: peru;
`;

const SCerors = styled.div`
  color: red;
  font-size: 10px;
`;

const SCInput = styled.input`
  color: blue;
  width: 200px;
  height: 20px;
`;

const SCH1 = styled.h1`
  color: brown;
`;
const SCH2 = styled.h2`
  color: brown;
`;
const SCPizzaSelect = styled.select`
  width: 200px;
  height: 25px;
`;
//handleBlur: inputtan ayrıldığımızda hatayı veriyor.
//touched: kullanıcı daha önce oraya fokus olmşmu girmişmi

function Formson(props) {
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: {
      isim: "",
      soyisim: "",
      adres: "",
      pizzaSecim: "",
      boyut: "",
      kalinlik: "",
      malzemeler: [],
      icecek: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validations,
  });
  //   console.log(errors);
  // console.log(values)

const {setData}=props

  setData(values)
  
// console.log("yeni data",setData)

  return (
    <>
      <SCDiv>
        <SCForm onSubmit={handleSubmit}>
          <div>
            <SCH2>Kullanıcı Bilgileri</SCH2>

            <label htmlFor="name"></label>
            <SCInput
              htmlFor="name"
              type="text"
              name="isim"
              placeholder="İsminiz.."
              onChange={handleChange}
              value={values.isim}
              onBlur={handleBlur}
            />
            {errors.isim && touched.isim && <SCerors>{errors.isim}</SCerors>}
            {/* erors altında isim key'i varsa uyarı göstersin */}
          </div>

          <div>
            <label htmlFor="surname"></label>
            <SCInput
              htmlFor="surname"
              type="text"
              name="soyisim"
              value={values.soyisim}
              placeholder="Soyisminiz.."
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.soyisim && touched.soyisim && (
              <SCerors>{errors.soyisim}</SCerors>
            )}
          </div>
          <div>
            <label htmlFor="adress"></label>
            <SCInput
              htmlFor="adress"
              type="text"
              name="adres"
              value={values.adres}
              placeholder="Adresiniz.."
              onChange={handleChange}
            />
            {errors.adres && touched.adres && <SCerors>{errors.adres}</SCerors>}
          </div>
          <hr />
          <hr />
          <hr />

          <div>
            <SCH1>Pizzanı oluşturmaya başla....</SCH1>
          </div>

          <div>
            <div>
              <h3>Pizzalar</h3>
              <SCPizzaSelect
                name="pizzaSecim"
                onChange={handleChange}
                value={values.pizzaSecim}
              >
                <option value="">Pizzanızı Seçin</option>
                <option value="margarita">Margarita</option>
                <option value="sucukSever">Sucuk Sever</option>
                <option value="superos">Süperos</option>
                <option value="mantarSever">Mantar Sever</option>
                <option value="sosyal">Sosyal</option>
              </SCPizzaSelect>
            </div>
            {errors.pizzaSecim && touched.pizzaSecim && (
              <SCerors>{errors.pizzaSecim}</SCerors>
            )}
            <h3>Pizza Boyutu</h3>
            <div>
              <input type="radio" name="boyut" onChange={handleChange} />
              <span> Küçük</span>
            </div>
            <div>
              <input type="radio" name="boyut" onChange={handleChange} />
              <span> Orta</span>
            </div>
            <div>
              <input type="radio" name="boyut" onChange={handleChange} />
              <span> Büyük</span>
            </div>
            {errors.boyut && touched.boyut && <SCerors>{errors.boyut}</SCerors>}
          </div>

          <div>
            <h3>Hamur Kalınlığı</h3>
            <div>
              <input type="radio" name="kalinlik" onChange={handleChange} />
              <span> Küçük</span>
            </div>
            <div>
              <input type="radio" name="kalinlik" onChange={handleChange} />
              <span> Orta</span>
            </div>
            <div>
              <input type="radio" name="kalinlik" onChange={handleChange} />
              <span> Büyük</span>
            </div>
            {errors.kalinlik && touched.kalinlik && (
              <SCerors>{errors.kalinlik}</SCerors>
            )}
          </div>

          <div>
            <h3>Ekstra Malzemeler</h3>
            <div>
              <input
                type="checkbox"
                name="malzemeler"
                value="Mozarella"
                onChange={handleChange}
              />
              Mozarella
            </div>
            <div>
              <input
                type="checkbox"
                name="malzemeler"
                value="Mantar"
                onChange={handleChange}
              />
              Mantar{" "}
            </div>
            <div>
              <input
                type="checkbox"
                name="malzemeler"
                value="Sucuk"
                onChange={handleChange}
              />
              Sucuk
            </div>
            <div>
              <input
                type="checkbox"
                name="malzemeler"
                value="Salam"
                onChange={handleChange}
              />
              Salam{" "}
            </div>
            <div>
              <input
                type="checkbox"
                name="malzemeler"
                value="Sosis"
                onChange={handleChange}
              />
              Sosis
            </div>
            <div>
              <input
                type="checkbox"
                name="malzemeler"
                value="Biber"
                onChange={handleChange}
              />
              Biber
            </div>
            <div>
              <input
                type="checkbox"
                name="malzemeler"
                value="Mısır"
                onChange={handleChange}
              />
              Mısır
            </div>
          </div>

          <div>
            <h3>İçecekler</h3>
            <SCPizzaSelect
              name="icecek"
              onChange={handleChange}
              value={values.icecek}
            >
              <option value="">İçecekler</option>
              <option value="Su">Su</option>
              <option value="Kola">Kola</option>
              <option value="Fanta">Fanta</option>
              <option value="Gazoz">Gazoz</option>
            </SCPizzaSelect>
          </div>
          <hr />
          <hr />
          <hr />
          <div>
            {/* <button type="submit" >Sipariş Oluştur</button> */}
            <Link to="/siparis" >
              Siparişi Tamamla! 
            </Link>
          </div>
             

         
        </SCForm>
      </SCDiv>
    </>
  );
}

export default Formson;
