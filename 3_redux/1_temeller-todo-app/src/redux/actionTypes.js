/*
 * aksiyon tipleri string olduğundan dolayı yanlış yazma ihtimaliz oldukça yüksek
 * hata ihtimalini düşürmek için aksiyonları bu dosyada bir nesne içerisinde tutalım ve kullanılcağı zaman burdan çağıralım
 */

const ActionTypes = {
  ADD: "ADD",
  TOGGLE: "TOGGLE",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
  SET: "SET",
};

export default ActionTypes;
