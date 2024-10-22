// gönderilmesi gereken header'lar
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247",
    "x-rapidapi-host": "shazam.p.rapidapi.com",
  },
};

// fonksiyonların bir arada tutulması için class yapısını tercih edelim
export default class API {
  // popüler müzikleri getiricek
  async getPopular() {
    const data1 = await this.searchMusic("tarkan");
    const data2 = await this.searchMusic("müslüm");

    return [...data1, ...data2];
  }

  // aratulan kelimeye uygun sonuçları getirecek
  async searchMusic(query) {
    // term parametresini dinamik olarak belirledik
    const url = `https://shazam.p.rapidapi.com/search?term=${query}&locale=tr`;

    // api isteğini at - gelen cevabı işle
    const res = await fetch(url, options);
    const data = await res.json();

    // veriyi formatladık
    const formatted = data.tracks.hits.map((item) => item.track);

    // fonksiyonun çağrdılığı yere veriyi döndürdük
    return formatted;
  }
}
