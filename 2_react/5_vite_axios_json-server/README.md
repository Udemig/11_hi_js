# Vite

- Web projeleri için gizlı bir geliştirme ve build aracı sağlayan bir bundler'dır.
- Hızlı proje oluşturma, ve geliştirme deneyimi ile öne çıkar.

## Özellikler

1. Create React App ile karşılaştırdğımız zaman gereksiz olarak nitelenedirebileceiğimiz herhegi bir paket veya dosyayı indrimez bu sayede çok daha hızlı bir kurulumu vardır.

2. HMR: Projedki değişiklikleri hızlıca tayıcıya yansıtarak anlık gğncellemeler sağlar. HMR, sadece değişen modüller güncellenir ve tarayıcıda yeniden yüklenir

3. Build aşamasıda daha hızlıdır.

# Json Server

- Sahte bir api oluşturmak amacıyla kullanılan bir js kütüphanesi.

- db.json dosyasında oluşturlan json verisini baz alarak sadece siizn localinizde çalışan sahte bir api oluşturur.

- get,post,put,patch,delete methodllarıyla istek atılabilir ve gerçekleşen değişimler db.json dosyasını günceller

- json serverı gerçek bir projede backend hazır olana kadar frontedi ilerletmek amacıyla api'ın sahtesini oluşturmak amacıyla veya kendimizi geliştirmek isteyeceğimiz projelerin backenbd ihtiyacını kaşılması için kullanabiliriz.

- json-server kullandığınız projeleri jsons-server sadece localde çalıştığından dolayı yayınlayamazsınız

# Axios

- Axios, js'de http istekleri yapmak için kullanılan kütüphanedir.

- js'deki fetch methodunun daha gelişmiş bir versiyonudur.

## Axios'un Sağladığı Avantajlar

- Gelen isteğin datasını oto. olarak json'dan js'e çevirir.
- Gönderilcek isteğin body'sini oto. olarak js'den json'a çevirir.
- Nesne formatındaki parametreleri işleyebilir.
- İsteklere zaman aşımı eklenebilir.
- Projeye göre özelleştirebiliyoruz (baseUrl).

* GET

```js
fetch("http://localhost:3001/posts")
  .then((res) => res.json())
  .then((data) => console.log("fetch", data));
```

```js
axios
  .get("http://localhost:3001/posts")
  .then((res) => console.log("axios", res));
```

# CRUD

## Create - Read - Update - Delete
