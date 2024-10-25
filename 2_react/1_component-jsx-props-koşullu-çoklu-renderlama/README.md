# Kurulum

- Projeyi oluşturmak için `npx create-react-app proje_ismi`

# Create React App Klasör Yapısı

1. `node_modules`: Bu klasör, projenin bağımlılıklarını (3.parti kütüphaneler / paketeler) örneğin React, Bootstrap gibi paketleri içerir. Yeni indirdiğimiz kütüphan,n çalışması için gerekli olan kodlar otomatik olarak bu klasörün içerisinde kaydedilir. Paket indirme / silme gibi işlemleri her zaman komutlar aracılığı ile yapıcaz.

2. `public`: Bu klasör, projenin genel olarak herkes tarafından erişilebilir olmasını istediğimiz dosyalarını barındırır. Logo'lar resimler iconlar ve html dosyası

3. `.gitignore`: Git tarafında takip eidlmemesi gerken ve githuba gönderilmeyecek dosya veya klasörlerin isimlerini yazarız genelde özel veri içerene veya çok büyük boyutlu dosya/klasörleri githuba göndermek istemeyiz.

4. `package.json`: Projede kullanılan kütüphaneleri ve sürümlerini, projeyi çalıştırmak için bazı komutları içeren bir json dosyasıdır. Projemizin Kimliği.

5. `package-lock.json`: Bağımlılkların spesifik sürümlerini ve bağımlılıklar arasındaki ilişkilerin verisini tutar.

6. src: Bu klasör, uygulamamızın kaynak kodunu içerir. Projei bu klasör içerisinde geliştiririz

- - App.css / index.css: Stillendirme dosyları

- - App.js: Varsayılan olarak oluşturulan temel uygulama bileşeni. Bu dosya içerisine yazdıklarımız ekrana basılır.

- - index.js: React uygulamasının başlangıç noktasıdır. Bu dosya uygulamada / app.js'de oluşturduğumuz sayfa veya bileşenleri DOM'un içerisinde ekrana basar.

# Komutlar

- `npx create-react-app proje_ismi`: yeni react projesi oluşturma

- `npm i paket_ismi`: projeye yeni bir paket dahil etmeye yarar

- `npm install paket_ismi`: projeye yeni bir paket dahil etmeye yarar

- `npm i paket_ismi@sürüm_no`: dahil edilecek pakedin sürümünüde belirlemeye yarar

- `npm i paket_ismi -D`: pakedi sadece geliştirme ortamına özel indirir build aşamasında silinir

- `npm uninstall paket_ismi`: projedeki varolan pakedi kaldırmaya yarar

- `npm start`: react projesini ayağa kaldırmaya yarar.(Bu komutu kullanırken terimalin proje klasöründe olduğundan emin olun)

# HTML - JSX Farkları

- JSX kodunda htmlde kullandığınız bütün etiketleri kullanbilirsiniz
- Ama jsx'de html'e göre bazı farklar ile karşılaşırız

1. Özellik İsimlendirme:

- class yerine className
- for yerine htmlFor

2. Javascript Kullanmı

- normalde html içerisinde doğrudan js kullanmak mümkün değil
- jsx içerisinde `{}` içine alarak javascript kodu çalışıtırabiliriz

# Koşullu Renderlama

- Render: bir elementin ekrana basılması olayı

- Koşullu renderlama ise render işleminin belirli bir koşula bağlı olma durumuna bağlı olması.

- Örneğin kullanıcının yetkisi varsa bir içerik gösterilmeli yoksa gizlenmeli.

- Eğer kullanıcı giriş yaptıysa çıkış butonu ekranda olmalı giriş yapmadısya giriş yap butonu ekranda olmalı.

- 2 farklı şekilde koşullu renderlama yapabiliyoruz.

## 1) Terneray Yöntemi (? :)

- Bu yöntemde else koşuluda vardır yani ekrana basma koşulu gerçekleşmediği zaman else koşulu devreye girer ve farklı bir bileşen / element ekrana basılır

## 2) And Yöntemi (&)

- Bu yöntemde else koşulu yoktr koşul gerçekleşirse element ekrana basılır aksi takdirde hiç bir şey renderlanmaz

# Prop (Bileşenlerde Veri Aktarımı)

- Bir bileşeni kullanırken, kullandığımız bileşen veri aktarmak isteyebilir. Bu durumda prop yöntemini kullanırız.

- Prop olarak veri gönderebilmek için o bileşni kullanırken etiketin sağını göndermek istediğiniz verinin ismi ve değri gönderilir.

- Gönderilen proplar ilgili bileşene parametre olarak gider

# Çoklu Renderlama

- Birden fazla elemanı ekrana basmak istediğimizde bu yapıyı kullanırız.

- Elimizde bir dizi olduğu zaman bu diziyi dönüp dizideki her br eleman için ekrana bir bileşen basmak isteyebiliriz.

- jsx içerisinde {} ile birilikte map aracılığı ile diziyi dönüp çoklu renderlama yapabiliyoruz

- Mapleyip ekrana bastığımız her bir bileşn için raect benzersiz bir key propu göndermemizi bekler. Bu key sayesinde bir bileşen güncellediğinde tam olarak hangi bileşenin güncellendiğini belirler ve sadece onu renderla aksi takdirde hangi elemanın güncellendiğini tespi edemip hepsini tekrardan renderla. Sonuç olarak react'ın daha performanslı çalışması için maplediğimiz zaman key propunu göndermeliyiz
  .
  ...
