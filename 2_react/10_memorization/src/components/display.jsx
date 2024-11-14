import React from "react";

/*
 * Sorun:
 * Display bileşenin içieriği değişmeyecek olsa bilse sırf Parent bileşen render oldu diye bu bileşende gereksiz yere tekrar render olyor
  
 * İstediğimiz şey bu bileşenin aldığı proplar  değişmediği sürece bileşenin render olmasını önüne geçmeliyiz 
*/

const Display = ({ count, fn }) => {
  console.log("display bileşeni render oldu");

  return (
    <>
      <h1>{count}</h1>
      <button onClick={fn}>Sayacı Arttır</button>
    </>
  );
};

export default React.memo(Display);

/*
 * React.memo() çalışma mantığında bir eksik var.
 * React.memo() gelen proplar değişmediği müddetçe tekrardan renderı engeller.
 * String / Number / Boolean  gibi proplarda sorun yoktur.
 * Ama fonksiyon proplarında prop olarak gelen fonksiyon değişmese bile bileşenin gereksiz yere tekrardan render olmasına sebep olur

*/
