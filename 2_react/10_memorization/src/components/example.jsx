import { useCallback, useState } from "react";
import Display from "./display";

const Example = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  //* Sorun: Bu fonksiyon bu bileşen her render olduğunda tekrardan oluşturulur. Bu kopya her seferinde bellekte farklı bir noktaya kaydedilir.

  //* Çözüm: useCallback aracılığı ile oluşan fonksiyonu önbellekta saklayıp fonksiyona her hitiyaç duyulduğunda yeniden oluşturmak yerine önbellekteki methoda erişiriz
  const fn = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  //* eğerki fonksiyon bir state'i kullanıyorsa o state her değişitiğinde önbellektekini almak yerine yeni bir fonk. oluştumrak isteriz bu noktada state'i bağımlılık dizisine eklemek yeterli olur

  return (
    <div>
      <h2>React.memo() Örneği</h2>

      <Display count={count} fn={fn} />

      <br />
      <br />

      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </div>
  );
};

export default Example;
