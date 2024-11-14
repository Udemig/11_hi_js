import { useState, useMemo } from "react";

const Use_Memo = () => {
  const [count, setCount] = useState(0);

  /*
    Bilgi: Bileşendeki state her değiştiğinde tekrar render olur.
    
    Sorun: Aşağıdaki hesaplama bileşen her render olduğunda gereksiz yere en baştan tekrar yapılır

    Çözüm: useMemo kullanıp yaptığımız hespalamanın sonucunu cache'e atarak ve her render sırasında yeni sonuç üretmek yerine cache'deki veriyi kullanarak gereksiz hesaplamanın önüne geçicez
  */

  const yeniDizi = useMemo(() => {
    // 1) maliyetli hesaplama > 10.000 elemanlı bir dizi oluştur
    const dizi = new Array(1000).fill("Merhaba Dünya");

    console.log("hesaplama yapıldı", dizi.length);

    // 2) maliyetli hesaplama > diziyi dön ve yeni dizi oluştur
    return dizi.map((item) => item + "!");
  }, []);

  return (
    <div>
      <h2>useMemo() Örneği</h2>

      <button onClick={() => setCount(count + 1)}>Sayacı Arttır ({count})</button>
    </div>
  );
};

export default Use_Memo;
