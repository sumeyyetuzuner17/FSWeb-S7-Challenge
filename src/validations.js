import * as yup from "yup";

const validations = yup.object().shape({
  isim: yup.string().min(3, "3 karakterden az olamaz").required("Zorunlu alan"),
  soyisim: yup
    .string()
    .min(2, "2 karakterden az olamaz")
    .required("Zorunlu alan"),
  adres: yup
    .string()
    .min(10, "10 karakterden az olamaz")
    .required("Zorunlu alan"),
  boyut: yup.string().required("Lütfen bir pizza boyutu seçin"),
  kalinlik: yup.string().required("Lütfen bir hamur kalınlığı seçin"),
  pizzaSecim: yup
    .mixed()
    .oneOf(
      ["Margherita", "Sucuk Sever", "Süperos", "Mantar Sever, Sosyal"],
      "Lütfen bir pizza seçimi yapın"
    )
    .required("Lütfen bir pizza seçimi yapın"),
});

export default validations;
