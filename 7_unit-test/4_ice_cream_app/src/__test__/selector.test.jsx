import { render, screen } from "@testing-library/react";
import Selector from "../components/list/selector";
import userEvent from "@testing-library/user-event";

describe("Selector bileşeni", () => {
  const mockFn = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Cornet seçilince butonun arkaplanı değişir", () => {
    render(<Selector selectedType="cornet" handleType={mockFn} />);

    // cornet butonunda seçili elemanın class'ı vardır
    const cornetBtn = screen.getByRole("button", { name: /külahta/i });
    expect(cornetBtn).toHaveClass("bg-white");

    // cup butonunda seçili elemanın class'ı yoktur
    const cupBtn = screen.getByRole("button", { name: /bardakta/i });
    expect(cupBtn).not.toHaveClass("bg-white");
  });

  it("Cup seçilince butonun arkaplanı değişir", () => {
    render(<Selector selectedType="cup" handleType={mockFn} />);

    // cup butonunda seçili elemanın class'ı vardır
    const cupBtn = screen.getByRole("button", { name: /bardakta/i });
    expect(cupBtn).toHaveClass("bg-white");

    // cornet butonunda seçili elemanın class'ı yoktur
    const cornetBtn = screen.getByRole("button", { name: /külahta/i });
    expect(cornetBtn).not.toHaveClass("bg-white");
  });

  it("Butonlara tıklanınca fonksiyon doğru parametrele ile çalışır", async () => {
    // userEvent kurulumu yap
    const user = userEvent.setup();

    // bileşeni renderla
    render(<Selector selectedType="cup" handleType={mockFn} />);

    // butonları al
    const cupBtn = screen.getByRole("button", { name: /bardakta/i });
    const cornetBtn = screen.getByRole("button", { name: /külahta/i });

    // bardakta butonuna tıkla
    await user.click(cupBtn);

    // fonksiyon cup parametresi ile çalıştı mı
    expect(mockFn).toHaveBeenCalledWith("cup");

    // kornet butonuna tıkla
    await user.click(cornetBtn);

    // fonksiyon cornet parametresi ile çalıştı mı
    expect(mockFn).toHaveBeenCalledWith("cornet");
  });
});
