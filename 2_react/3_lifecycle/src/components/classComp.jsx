import { Component } from "react";

class Pagination extends Component {
  // kurucu method
  // bu bileşene gelen proplara erişmemizi sağlar
  constructor(props) {
    super(props);

    // class component'larda state tanımlama
    this.state = {
      isLight: true,
      page: 10,
    };
  }

  //! class componentlarda yaşam döngüsü

  //* 1) bileşenin ekrana basılma anını izler
  componentDidMount() {
    console.log("componentDidMount çalıştı");
  }

  //* 2) bileşenin ekrandan gitme anını izler
  componentWillUnmount() {
    console.log("componentWillUnmount çalıştı");
  }

  //* 3) bileşenin güncellemesini (state değişimi) izler
  componentDidUpdate() {
    console.log("componentDidUpdate çalaıştı");
  }

  // render methodu ile ekrana basılacak arayüzü belirle
  render() {
    return (
      <div>
        <button
          onClick={() => this.setState({ page: this.state.page - 1 })}
        >
          -
        </button>

        <h1>Sayfa: {this.state.page}</h1>

        <button
          onClick={() => this.setState({ page: this.state.page + 1 })}
        >
          +
        </button>
      </div>
    );
  }
}

export default Pagination;
