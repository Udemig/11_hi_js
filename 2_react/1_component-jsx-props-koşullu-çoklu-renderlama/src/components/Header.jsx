/*
 ! React Bileşeni (Component)
 * Kullanıcı arayüzü oluşturmak için kullanılan temel arayüz parçalarıdır.

 * Bileşen Oluşturma
 * 1) Bir fonksiyon oluşturulmalı
 * 2) Fonksiyonun ismine bileşenin ismini veriyoruz
 
 * Bileşen isminin ilk harfi büyük olmalı
 * Birden fazla kelimeden oluşuyorsa bitişik yazılmalı ve her kelimenin ilk harfi büyük olmalı (PascalCase)
 
 * 3) Bileşen return satırında kullanıcının görüceği arayüz kodunu döndürmek zorundadır. (JSX - Javascript XML)

 * 4) Bileşeni farklı dosyalarda kullanabilmek için export etmeliyiz
*/

function Header() {
  return (
    <header>
      <h1>REACT</h1>

      <nav>
        <button>Giriş Yap</button>
        <button>Kayıt Yap</button>
      </nav>
    </header>
  );
}

export default Header;
