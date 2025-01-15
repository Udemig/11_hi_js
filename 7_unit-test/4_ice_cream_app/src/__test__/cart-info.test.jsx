import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { toast } from "react-toastify";
import CartInfo from "../components/modal/cart-info";
import { createOrder } from "../redux/cartSlice";

// toast bildirimlerini mock'layalım
jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
  },
}));

// Redux store'u mock'layalım
const mockStore = configureStore([]);

describe("CartInfo Component Tests", () => {
  test("renders CartInfo component with correct subtotal, shipping, and total", () => {
    const cart = [
      { id: 1, name: "Product 1", price: 25, amount: 2 },
      { id: 2, name: "Product 2", price: 30, amount: 1 },
    ];

    const store = mockStore({});
    const close = jest.fn();

    render(
      <Provider store={store}>
        <CartInfo cart={cart} close={close} />
      </Provider>
    );

    // Ara Toplam kontrolü
    expect(screen.getByTestId("subtotal")).toHaveTextContent("80₺");

    // Kargo kontrolü
    expect(screen.getByTestId("shipping")).toHaveTextContent("20₺");

    // Toplam kontrolü
    expect(screen.getByTestId("total")).toHaveTextContent("100₺");
  });

  test("dispatches createOrder action and shows toast notification on button click", () => {
    const cart = [
      { id: 1, name: "Product 1", price: 50, amount: 2 },
      { id: 2, name: "Product 2", price: 30, amount: 1 },
    ];

    const store = mockStore({});
    const close = jest.fn();

    render(
      <Provider store={store}>
        <CartInfo cart={cart} close={close} />
      </Provider>
    );

    // Butonu bul ve tıkla
    const button = screen.getByTestId("order-button");
    fireEvent.click(button);

    // Redux action'ının dispatch edilip edilmediğini kontrol et
    const actions = store.getActions();
    expect(actions).toEqual([createOrder()]);

    // toast bildiriminin gösterilip gösterilmediğini kontrol et
    expect(toast.success).toHaveBeenCalledWith("Ürünler hazırlanıyor..");

    // close fonksiyonunun çağrılıp çağrılmadığını kontrol et
    expect(close).toHaveBeenCalled();
  });

  test("disables order button when cart is empty", () => {
    const cart = [];
    const store = mockStore({});
    const close = jest.fn();

    render(
      <Provider store={store}>
        <CartInfo cart={cart} close={close} />
      </Provider>
    );

    // Butonun disabled olup olmadığını kontrol et
    const button = screen.getByTestId("order-button");
    expect(button).toBeDisabled();
  });

  test("shows free shipping message when subtotal is greater than or equal to 100", () => {
    const cart = [{ id: 1, name: "Product 1", price: 100, amount: 1 }];

    const store = mockStore({});
    const close = jest.fn();

    render(
      <Provider store={store}>
        <CartInfo cart={cart} close={close} />
      </Provider>
    );

    // Kargo ücretsiz mesajını kontrol et
    expect(screen.getByTestId("shipping")).toHaveTextContent("Ücretsiz");
  });

  test("shows total as 0 when cart is empty", () => {
    const cart = [];
    const store = mockStore({});
    const close = jest.fn();

    render(
      <Provider store={store}>
        <CartInfo cart={cart} close={close} />
      </Provider>
    );

    // Toplamın 0 olarak gösterilip gösterilmediğini kontrol et
    expect(screen.getByTestId("total")).toHaveTextContent("0₺");
  });
});
