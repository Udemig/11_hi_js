import { fireEvent, render, screen } from "@testing-library/react";
import Error from "../components/error";

const info = "İnternetiniz çok yavaş";

it("prop olarak alınan hata mesajı ekrana basılır", () => {
  render(<Error info={info} />);

  screen.getByText(info);
});

// Eğerki bir bileşene prop olarak gönderilen fonksiyonu test etmek istiyorsak boş bir fonksiyon göndermek yerine bir mock fonksiyon oluşturup onu  prop olarak göndermeliyiz.
it("prop olarak alınan fonksiyon butona tıklanınca çalışır", () => {
  // jest ile sahte bir fonksiyon oluştur
  const mockFn = jest.fn();

  // bileşeni renderla
  render(<Error info={info} refetch={mockFn} />);

  // tekrar denen butonuna tıkla
  fireEvent.click(screen.getByRole("button"));

  // jest ile oluşturulan test edilebilir mock fonksiyonu çalıştı mı kontrol et
  expect(mockFn).toHaveBeenCalled();
});
