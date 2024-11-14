import { useCallback, useMemo, useState } from "react";
import ListItem from "./ListItem";

const SearchList = () => {
  const items = ["Elma", "Armut", "Karpuz", "Muz", "Çilek"];

  const [query, setQuery] = useState("");

  // listeyi filtrele
  const filterList = useCallback(() => {
    const filtred = items.filter((i) => i.toLowerCase().includes(query.toLowerCase()));

    return filtred;
  }, [query]);

  const filtred = filterList();

  // bu fonksiyonu prop olarak list item'a gönderdiğimiz için ve list itemde react.memo kullanıldıüında hep aynı fonksiyonu gönderilebilek adına useCallback kullandık
  const addToBasket = useCallback((item) => {
    alert(`${item} sepete eklendi`);
  }, []);

  return (
    <div>
      <h1>Arama Inputu</h1>

      <input type="text" onChange={(e) => setQuery(e.target.value)} />

      <ul>
        {filtred.map((i) => (
          <ListItem key={i} item={i} fn={addToBasket} />
        ))}
      </ul>
    </div>
  );
};

export default SearchList;
