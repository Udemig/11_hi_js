import { render, screen, waitFor } from "@testing-library/react";
import List from "../components/list";
import api from "../utils/api";
import { mockArray } from "../utils/constants";
import Card from "../components/list/card";

// api modülünü mock'la
jest.mock("../utils/api");

// card.jsx  bileşeni içerisinde provider/router gibi bağımlıklar kullandığımızdan ve bu bağımlıklaaeın list bileşenine etki etmesini istediğimizden card bileşenini mocklayalım
jest.mock("../components/list/card");

describe("List bileşeni testleri", () => {
  // her testin öncesinde önceki testlerden mock'lanmış api'a yapılan güncellemeleri temizle
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("veri çekilirken ekranda loader vardır", async () => {
    // bu test içerisinde api.get isteği atıldığında olumlu cevap gitsin
    api.get.mockResolvedValueOnce({ data: [] });

    // list bileşenini renderla
    render(<List />);

    // ekrada loader vardır
    screen.getByTestId("list-loader");

    // belirli bir süre sonra ekrandan loader gider
    await waitFor(() => {
      expect(screen.queryByTestId("list-loader")).toBeNull();
    });
  });

  it("api'dan error cevabı gelirse ekrana hata mesajı gelir", async () => {
    // bu test içerisinde api.get isteği atıldığında olumsuz cevap gitsin
    const errMsg = "bağlantı zaman aşımına uğradı";
    api.get.mockRejectedValueOnce(new Error(errMsg));

    // list bileşenini renderla
    render(<List />);

    // api'dan cevap gelince ekrana hata component'ı gelir
    await waitFor(() => screen.getByTestId("list-error"));
  });

  it("api'dan başarılı cevap gelirse ekrana card'lar gelir", async () => {
    // card component'ı çağrılınca ne return etmeli
    Card.mockImplementation(({ item }) => <div>{item.name}</div>);

    // bu test içerisinde api.get isteği atıldığında olumlu cevap gitsin
    api.get.mockResolvedValueOnce({ data: mockArray });

    // bileşeni renderla
    render(<List />);

    // veri gelince dizideki her bir nesne için ekrana kart gelir
    await waitFor(() => {
      mockArray.forEach((item) => {
        screen.getByText(item.name);
      });
    });
  });
});
