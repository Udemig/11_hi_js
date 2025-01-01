// Unit Test yazmak yazdığımız kodun algoritmik olarak doğru çalışıp çalışmadığını kontrol etmek için kullanılır.

import { render, screen, fireEvent } from "@testing-library/react";
import Button from ".";

test("Butona tıklanma olayında renk ve yazı değişir", () => {
  //1) test edilecek bileşen render edilir
  render(<Button />);

  //2) test edilcek buton elementi seçilir
  const button = screen.getByRole("button");

  //3) butonun rengi "red" mi kontrol edilir
  expect(button).toHaveStyle({ background: "red" });

  //4) butonun içerisinde "Maviye Çevir" yazıyor mu kontrol edilir
  expect(button).toHaveTextContent("Maviye Çevir");

  //5) butona tıklanır
  fireEvent.click(button);

  //6) butonun rengi "aqua" mı kontrol edilir
  expect(button).toHaveStyle({ background: "aqua" });

  //7) butonun içerisinde "Kırmızıya Çevir" yazıyor mu kontrol edilir
  expect(button).toHaveTextContent("Kırmızıya Çevir");

  //8) butona tıklanır
  fireEvent.click(button);

  //9) butonun rengi "red" mi kontrol edilir
  expect(button).toHaveStyle({ background: "red" });

  //10) butonun içerisinde "Maviye Çevir" yazıyor mu kontrol edilir
  expect(button).toHaveTextContent("Maviye Çevir");
});
