// Soyut bir sınıf
abstract class MusicPlayer {
  constructor(public apiUrl: string) {}

  getMusics() {
    console.log(this.apiUrl + " api'ndan müzikler alınıyor...");
  }

  abstract playMusic(name: string): void;
}

// Soyut sınıfı miras alan sınıflar
class Spotify extends MusicPlayer {
  playMusic(name: string): void {
    console.log(name + " spotify'da çalıyor...");
  }
}

// Soyut sınıfı miras alan sınıflar
class AppleMusic extends MusicPlayer {
  playMusic(name: string): void {
    console.log(name + " apple'da çalıyor...");
  }
}

const spo = new Spotify("www.api.spotify.com");
const apple = new AppleMusic("www.apple.api.com");

spo.getMusics();
spo.playMusic("test");

apple.getMusics();
apple.playMusic("deneme");
