import { fireEvent, render, screen } from "@testing-library/react";
import Counter from ".";

test("sayaç doğru şekilde çalışır", () => {
  //1) test edilecek bileşen render edilir
  render(<Counter />);

  //2) gerekli elementler seçilir
  const decBtn = screen.getByRole("button", { name: "Azalt" });
  const incBtn = screen.getByRole("button", { name: "Arttır" });
  const count = screen.getByText("0"); // sayacın ilk değeri 0 olmalı

  //3) azalt butonu disabled mı
  expect(decBtn).toBeDisabled();

  //4) arttır butonuna tıklanır
  fireEvent.click(incBtn);

  //5) sayacın değeri 1 olmalı
  expect(count).toHaveTextContent("1");

  //6) azalt butonu aktif mi
  expect(decBtn).toBeEnabled();

  //7) arttır butonuna tıklanır
  fireEvent.click(incBtn);

  //8) sayacın değeri 2 olmalı
  expect(count).toHaveTextContent("2");

  //9) azalt butonuna tıklanır
  fireEvent.click(decBtn);

  //10) sayacın değeri 1 olmalı
  expect(count).toHaveTextContent("1");

  //11) azalt butonuna tıklanır
  fireEvent.click(decBtn);

  //12) sayacın değeri 0 olmalı
  expect(count).toHaveTextContent("0");

  //13) azalt butonu disabled mi
  expect(decBtn).toBeDisabled();
});
