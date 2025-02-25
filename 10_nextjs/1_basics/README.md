# Nextjs Routing

- Bir nextjs projesinde routing için 2 farklı yol izlenebilir.
- Pages Router (Eski Yöntem)
- App Router (Önerilen Yöntem)

## App Router

- Dosya dizinine göre / klasör tabanlı sayfalamaya yarar.
- Bürün sayfalar src/app klasörü içerisinde tanımlanır.

* App içerisinde tanımlanan ve içinde page dosyası olan her klasör bir sayfaya denk gelir

## Nested Routes - İç İçe Yollar

- Örn:
- /profile > profili görüntüleyin
- /profile/friends > arkadaşlarını görüntüle
- /profile/edit > profili düzenle

- nested routes oluştururken, bir alt route oluşturmak için sadece bir sayfa klasörünü içine yeni bir sayfa oluşturmalıyız

## Dynamic Routes - Dinamik Yollar

- Bir, e-ticaret projesi yapıyorsak yüzlerce ürünün herbirine farklı sayfa oluşturamıyacğımızdan dolayı url'deki parametreye göre değişen dinamik sayfalar oluşturmalıyız

- Sayfa içeriği url'deki parametreye göre değişeceği için parametreyei tanımlamalıyız.
- Paramatre tanımlarken [parametre-ismi] syntaxı kullanırız

## Nested Dynamic Routes - İç İçe Dinamik Yollar

- /products/20/reviews > id'si 20 olan ürünün yorumları
- /products/20/reviews/4 > id'si 20 olan ürünün yorumlarından 4.

## Link

- Yönlendirme için kullanırız.
- href değeri yönlendirilecek url'i belirler.
- "." ile bir önceki sayfaya yönlendirirz

## Route Group

- Proje içerisindeki sayfa sayısı arttıkça daha organize olabilmek için sayfaları gruplandırmak isteyebiliriz.

- Yazdığımız sayfaların daha kolay erişlebilir olması için sayfaları gruplandırırız.

- Url'e etki etmesini istedğimiz klasörleri `()` içine alırız

## Metadata

- SEO açısından metadataları tanımlamak önemlidir.

- Sayfların metadata dediğimiz taryıcıda önce çıkması için ihtiyacı olan başlık/açıklama/logo gibi değerleri react'da sabit bir şekilde bütün sayfalarda aynı olarak ifade ederken next.js'de her sayfaya özel metadata tanımlayabiliyoruz

- statik ve dianmik şekilde tanımlanabilir

## Layout - Düzen bileşeni

- Bir uygulamanın veya sayfa grubunun genel sayfa düzenini ve ortak bileşenlerini tanımllamamızı sağlar

- RootLayout'da yapılan değişiklikler projedeki bütün sayfaları etkiler ama bazı durumlarda sadece bir route grubundaki sayfaların ortak componentlarını tanımlamak isteyebiliriz bu durumda o route grubuna özel layour oluşturuz

## Template - Düzen bileşeni

- Layout ile aynı görevi
- Tek farklı sayfa geçişlerinde layout state'i korurken template'de tutulam state sıfırlanır

## Özel Dosyalar

- Nextjs'de ismi varsayılan olarak belirlenmiş ve özel bir amaca hizmet eden dosyalar vardır.

- `page`: bir sayfa tanımlamaya yarar
- `layout`: sayfaların düzenini oluşturmaya yarar
- `template`: sayfaların düzenini oluşturmaya yarar
- `not-found`: 404 sayfası tanımlamaya yarar
- `loading`: bir sayfa async await ile beklediği süre boyunca syayfanın yerin ekrana basılır
- `error`: bir sayfada hata oluştuğu ada otomatik olarak ekrana basılır
