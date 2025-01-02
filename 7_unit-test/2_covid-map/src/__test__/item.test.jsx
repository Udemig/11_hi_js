// Normal şartlarda bir bileşeni kullanırken prop gönderiyorsanız, test ederken de aynı şekilde prop göndermeniz gerekmektedir.
// Test ortamında prop gönderirken, normalde gönderdiğiniz değerlere benzer değerler göndermelisiniz

import { render, screen } from "@testing-library/react";
import Item from "../pages/home/item";

test("Gönderilen proplar doğru şekilde kullanılır", () => {
  // bileşeni renderla
  render(<Item color="text-blue-500" text="Toplam Vaka" value="300,8M" />);

  // icon elementini al
  const icon = screen.getByTestId("icon");

  // color propu ile gönderdiğimiz değer className'de var mı?
  expect(icon).toHaveClass("text-blue-500");

  // text propu ile gönderdiğimiz değer ekranda var mı?
  screen.getByText("Toplam Vaka");

  // value propu ile gönderdiğimiz değer ekranda var mı?
  screen.getByText("300,8M");
});
