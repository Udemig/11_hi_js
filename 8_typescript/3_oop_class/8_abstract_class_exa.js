var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Soyut bir sınıf
var MusicPlayer = /** @class */ (function () {
    function MusicPlayer(apiUrl) {
        this.apiUrl = apiUrl;
    }
    MusicPlayer.prototype.getMusics = function () {
        console.log(this.apiUrl + " api'ndan müzikler alınıyor...");
    };
    return MusicPlayer;
}());
// Soyut sınıfı miras alan sınıflar
var Spotify = /** @class */ (function (_super) {
    __extends(Spotify, _super);
    function Spotify() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Spotify.prototype.playMusic = function (name) {
        console.log(name + " spotify'da çalıyor...");
    };
    return Spotify;
}(MusicPlayer));
// Soyut sınıfı miras alan sınıflar
var AppleMusic = /** @class */ (function (_super) {
    __extends(AppleMusic, _super);
    function AppleMusic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppleMusic.prototype.playMusic = function (name) {
        console.log(name + " apple'da çalıyor...");
    };
    return AppleMusic;
}(MusicPlayer));
var spo = new Spotify("www.api.spotify.com");
var apple = new AppleMusic("www.apple.api.com");
spo.getMusics();
spo.playMusic("test");
apple.getMusics();
apple.playMusic("deneme");
