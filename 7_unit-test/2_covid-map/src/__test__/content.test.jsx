import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import Content from "../pages/detail/Content";
import { Provider } from "react-redux";
import { exampleCountryDetail } from "../utils/constants";

// sahte store'lar oluşturmamızı sağlaycak methodu elde ettik
const mockStore = configureStore([thunk]);

test("store yüklenme durumundayken ekrana loader gelir", () => {
  const store = mockStore({ isLoading: true, error: null, data: null });

  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  screen.getAllByTestId("content-loader");
});

test("store hata durumundayken ekrana error gelir", () => {
  const store = mockStore({
    isLoading: false,
    error: "Zaman aşımı",
    data: null,
  });

  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  screen.getByTestId("error");
});

test("store'a veri geldiği durumda ekrana nesndeki her bir değer için kart basılır", () => {
  const store = mockStore({
    isLoading: false,
    error: null,
    data: exampleCountryDetail,
  });

  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  // data nesnesini diziye çevir
  const arr = Object.entries(exampleCountryDetail).filter(
    (i) => i[0] !== "flags"
  );

  // dizideki her değer için kart içerisinde bilgiler basılır
  arr.forEach((item) => {
    // ekrana item'ın key değerleri geliyor mu?
    screen.getByText(item[0]);

    // ekrana item'ın value değerleri geliyor mu?
    screen.getByText(item[1]);
  });
});
