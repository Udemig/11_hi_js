import Header from "./components/Header";
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import Card from "./components/Card";
import { products } from "./constants";

function App() {
  // bu kısıma ise js kodları yazarız
  const title = "React'a Hoşgeldin";
  const message = "Yetkiniz yok";
  const isAuth = false;

  // return satırı içerisine sadece jsx kodları yazılır
  return (
    <div className="app">
      <Header />

      <main>
        {/* terneray : else koşulu var */}
        <h1>{isAuth === true ? title : message}</h1>

        {/* and : else koşulu yok*/}
        <h1>{isAuth === true && title}</h1>

        {/* uyarı bileşenleri */}
        <Alert tema="hata" />
        <Alert tema="basari" />
        <Alert tema="uyari" />

        {/* cart bileşenleri */}
        <div className="wrapper">
          {/* çoklu render */}
          {products.map((i) => (
            <Card key={i.id} url={i.url} title={i.title} price={i.price} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
