import { fireEvent, render, screen } from "@testing-library/react";
import Accordion from ".";

test("Accordion componenti düzgün çalışır", () => {
  // 1) Test edilecek component'ı rederla
  render(<Accordion />);

  // 2) Gerekli elementleri seç
  const btn = screen.getByRole("button");
  const content = screen.getByRole("paragraph");

  // 3) Butonun içerisinde "Göster" yazıyor mu
  expect(btn).toHaveTextContent("Göster");

  // 4) İçerik elementinin class'ı "hide" mı
  expect(content).toHaveClass("hide");

  // 5) Butona tıkla
  fireEvent.click(btn);

  // 6) Butonun içerisinde "Gizle" yazıyor mu
  expect(btn).toHaveTextContent("Gizle");

  // 7) İçerik elementinin class'ı "show" mu
  expect(content).toHaveClass("show");

  // 8) Butona tıkla
  fireEvent.click(btn);

  // 9) Butonun içerisinde "Göster" yazıyor mu
  expect(btn).toHaveTextContent("Göster");

  // 10) İçerik elementinin class'ı "hide" mı
  expect(content).toHaveClass("hide");
});
