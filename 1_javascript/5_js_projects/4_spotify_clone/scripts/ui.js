export default class UI {
  // html'den çağırdığımız arayüz elementleri
  constructor() {
    this.list = document.querySelector(".list");
    this.form = document.querySelector("form");
    this.title = document.querySelector("#title");
    this.player = document.querySelector(".player");
    this.audio = document.querySelector(".player audio");
  }

  // ekrana kartları basar
  renderCards(songs) {
    // loader'ı temizle
    this.list.innerHTML = "";

    // api'dan gelen herbir nesne için ekrana kart bas
    songs.forEach((song) => {
      const div = document.createElement("div");
      div.className = "card";

      // kart elemanına müzik bilgelerini dataset olarak ekle
      div.dataset.title = song.title;
      div.dataset.subtitle = song.subtitle;
      div.dataset.img = song.images.coverarthq;
      div.dataset.mp3 = song.hub.actions[1].uri;

      div.innerHTML = `
           <figure>
              <img
                src="${song.images.coverarthq}"
              />
              <div class="play">
                <i class="bi bi-play-fill"></i>
              </div>
            </figure>

          <div class="card-info">
            <h3>${song.title}</h3>
            <h4>${song.subtitle}</h4>
          </div>
      `;
      this.list.appendChild(div);
    });
  }

  // ekrana loader basar
  renderLoader() {
    this.list.innerHTML = `
         <div class="loader">
            <div class="audio-player">
              <div class="album-cover"></div>
              <div class="player-controls">
                <div class="song-info">
                  <div class="song-title">Song Title</div>
                  <p class="artist">Artist</p>
                </div>
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
                <div class="buttons">
                  <button class="play-btn">
                    <svg
                      viewBox="0 0 16 16"
                      class="bi bi-play-fill"
                      fill="currentColor"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      style="color: white"
                    >
                      <path
                        fill="white"
                        d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                      ></path>
                    </svg>
                  </button>
                  <button class="pause-btn">
                    <svg
                      viewBox="0 0 16 16"
                      class="bi bi-pause-fill"
                      fill="currentColor"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      style="color: white"
                    >
                      <path
                        fill="white"
                        d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
    `;
  }

  // başlığı günceller
  updateTitle(text) {
    this.title.textContent = text;
  }

  // oynatma alanını güncelle
  renderPlayer(song) {
    this.player.innerHTML = `
      <div class="info">
        <img
          src="${song.img}"
        />

        <div>
          <h5>${song.title}</h5>
          <p>${song.subtitle}</p>
        </div>
      </div>

      <audio controls autoplay>
        <source src="${song.mp3}" />
      </audio>

      <div class="icons">
        <i class="bi bi-music-note-list"></i>
        <i class="bi bi-boombox-fill"></i>
        <i class="bi bi-pc-display"></i>
      </div>
    `;

    // audio elementini al ve oynat
    const audio = this.player.querySelector("audio");

    audio.addEventListener("play", this.toggleAnimation);
    audio.addEventListener("pause", this.toggleAnimation);
  }

  // animasyon yoksa ekle varsa çıkar
  toggleAnimation() {
    const img = document.querySelector(".info img");
    img.classList.toggle("animate");
  }
}
