import { render, screen } from "@testing-library/react";
import App from "./App";

// App bileşeninin testlerinin yazıldığı dosya
// Bir dosyanın test dosyası olduğunu anlamak için .test.js/.test.jsx uzantsına bakabiliriz.

/*
 ! Unit Test
 * Yazdığımız dinamik olan bütün react bileşenlerinin testinin yazarız

 * Unit test yazmamız sayesinde kod değişikliği yapıldığında, yaptığımız değişiklikleri githuba göndermeden önce testleri çalıştırarak hata olup olmadığını kontrol ederiz.

 * Projelerde her işlevi el ile kontrol etmek çok fazla zaman alıcağından ve gözden bir şey kaçma ihtimali yüksek olduğundan test yazmak önemlidir.

 * Bu yüzden unit test ile bileşenlerimizin doğru çalışıp çalışmadığını kontrol eden testler yazarız.
 */

// Bir fonksiyonun veya bileşenin testini yazmak için "test" veya "it" methodunu kullanırız.
// Test fonksiyonları 2 parametre alır.
// 1) string : testin adı
// 2) function : testin yapıldığı fonksiyon

test("react öğren linki ekrana basılır", () => {
  // test edilecek olan bileşeni render ederiz (virtual - sanal DOM)
  render(<App />);

  // test edilecek olan elementi çağır
  // eğer component tarayıcada ekrana basılıyor olsaydı document.querySelector() / document.getElementById() gibi methodlarla elementi çağırırdık
  // sanal DOM olduğu için document yerine screen ve onun içindeki methodları kullanırız.
  const linkElement = screen.getByText("React Öğren");

  // çağrılan elementten beklentimizi söyleriz
  expect(linkElement).toBeInTheDocument();
});
