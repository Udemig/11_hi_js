import { render, screen, prettyDOM } from "@testing-library/react";
import Modal from "../components/modal/index";
import userEvent from "@testing-library/user-event";
import { useSelector } from "react-redux";
import CartInfo from "../components/modal/cart-info";
import CartItem from "../components/modal/cart-item";

// render'larda hata vermemesi için useSelector'ü mocklıyacağız ve test içerisinde useSelector çağrılınca ne return etmesi gerektiğini b.
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

// cartInfo ve cartItem component'ları modal içerisnde kullanıldığı için ve useDispatch içerrdiği için test hata veriyor şuan modal component'ını test ettiğim için bu componentları modal'dan soyutlamamız yani mocklamamız gerekiyor
jest.mock("../components/modal/cart-info", () => () => <h1>Cart Info</h1>);

jest.mock("../components/modal/cart-item", () => () => <h1>Item</h1>);

describe("Modal Component", () => {
  const closeMock = jest.fn();

  it("isOpen propuna göre modal ekrana basılır", () => {
    // useSelector çağrılığında sahte useSelector'un store olarak ne döndürmesi gerektiğini söyliyicez
    useSelector.mockReturnValue({ cart: [] });

    // bileşeni renderla
    const { rerender } = render(<Modal isOpen={false} close={closeMock} />);

    // modal ekranda yoktur
    expect(screen.queryByTestId("modal")).toBeNull();

    // isOpen true gönderip tekrar renderlayalım
    rerender(<Modal isOpen={true} close={closeMock} />);

    // modal ekranda vardır
    screen.getByTestId("modal");
  });

  it("X butonuna tıklanınca close fonksiyonu çalışır", async () => {
    // useSelector çağrılığında sahte useSelector'un store olarak ne döndürmesi gerektiğini söyliyicez
    useSelector.mockReturnValue({ cart: [] });

    // userEvent kurulumu
    const user = userEvent.setup();

    // bileşeni renderla
    render(<Modal isOpen={true} close={closeMock} />);

    // x butonunu al
    const closeBtn = screen.getByTestId("close");

    // butonuna tıkla
    await user.click(closeBtn);

    // closeMock fonksiyonu çalıştı mı
    expect(closeMock).toHaveBeenCalled();
  });

  it("Sepetin doluluk durumuna göre ekrana uyarı basılır", () => {
    // use çağrılınca sepet dizisi boş return edilmeli
    useSelector.mockReturnValue({ cart: [] });

    // bileşeni renderla
    const { rerender } = render(<Modal isOpen={true} close={closeMock} />);

    // ekranda uyarı mesajı vardır
    screen.getByText(/henüz/i);

    // use çağrılınca sepet dizisi dolu return edilmeli
    useSelector.mockReturnValue({ cart: ["selam"] });

    // bileşeni tekrar renderla (sepet dolu)
    rerender(<Modal isOpen={true} close={closeMock} />);

    // ekranda uyarı mesajı yoktur
    expect(screen.queryByText(/henüz/i)).toBeNull();
  });

  it("sepet dolu ise her bir eleman için ekran cart item basılır", () => {
    // useSelector çağrılınca dolu dizi döndür
    const cartItems = [
      { id: 1, name: "Ürün 1" },
      { id: 2, name: "Ürün 2" },
    ];
    useSelector.mockReturnValue({ cart: cartItems });

    // bileşeni renderla
    render(<Modal isOpen={true} close={closeMock} />);

    // ekrandaki bütün item componentlarını al
    const items = screen.getAllByRole("heading", { name: "Item" });

    // items dizisinin uzunluğu 2'dir
    expect(items.length).toBe(2);
  });
});
