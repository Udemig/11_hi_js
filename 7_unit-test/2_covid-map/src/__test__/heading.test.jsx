import { render, screen } from "@testing-library/react";
import Heading from "../pages/detail/Heading";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { exampleCountryDetail } from "../utils/constants";

// redux kullaılan bileşenleri test ederlen test ediceğimiz seneryodaki store'un datasına göre store'un sahte bir versiyonunu oluşturmalıyız
const mockStore = configureStore([thunk]);

it("store yüklenme durumundayken ekrana loader basılır", () => {
  // bu test senaryosuna özel store'un kopyasını oluştur
  const store = mockStore({ isLoading: true, error: null, data: null });

  // bileşeni render et
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Heading />
      </BrowserRouter>
    </Provider>
  );

  // ekrana loader basılıyor mu?
  screen.getByTestId("header-loader");
});

it("store'da yüklenme bittiğinde ekranda loader yoktur", () => {
  // bu test senaryosuna özel store'un kopyasını oluştur
  const store = mockStore({ isLoading: false, error: null, data: null });

  // bileşeni renderla
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Heading />
      </BrowserRouter>
    </Provider>
  );

  // todo YARIN BAKALIM
});

it("store'a veri geldiğinde ekrana veriler basılır", () => {
  // store'un veri geldiği seneyodaki kopasını oluştur
  const store = mockStore({
    isLoading: false,
    error: null,
    data: exampleCountryDetail,
  });

  // bileşeni renderla
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Heading />
      </BrowserRouter>
    </Provider>
  );

  // ülke ismi ekrana geldi mi?
  screen.getByRole("heading", { name: exampleCountryDetail.country });

  // resim ekran geldi mi?
  const img = screen.getByAltText("Flag");

  // resmin kaynağı doğru mu?
  expect(img).toHaveAttribute("src", exampleCountryDetail.flags.png);
});
