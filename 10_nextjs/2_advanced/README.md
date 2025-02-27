# Catch-All Segments

- Url'den 1'den fazla paraemtre alamak istediğiniz durumda kullanılan yöntemdir
- [...param_ismi] syntaxı ile kullanılır

# Parallel Routes

- Parallel Routes, aynı anda birden fazla bağımsız sayfayı aynı layout içerisinde ekrana basmaya yarar.

- Her sayfa kendi bağımsız loading | error 'una sahiptir

- Slot: @ işareti ile tanımlanan sayfalara slot ismi velirlir.
- Slot olarak tanımlanan sayfalar layout'a prop olarak gider.
- Layout üzerinden slot olarka tanımlı sayfaları aynı anda veya koşullu ekrana basbiliriz

# Intercepted Routes - Önizlemeli Route

- Bir sayfaya yönlendiren linke tıkladığınızda öncelikle bir modal açıp sayfa detaylarını modalda gösterip eğer sayfa yenilenirse bu sefer modal yerine sayfanın kendisini göstermek istiyorsak bu yöntemi kullanırız.

- Bu özellik genel olarak ürün/gönderi detay sayfalarında, login/register sayfaların kullanıcıyı ana sayfa akışından koparmadan işlemlerini yaptırmak istiyorsak kullanırız

# Next.js Image

- Nextjs resimler için optimizasyonlara sahiptir.
- NEXT.JS resimlerin hem seo dostu hem de daha düşük boyutlu/daha hızlı ekrana basılmasınıs sağlar
- Image component'ını kullanarak resimleri ekrana basarız

# Client Side Render - Server Side Render (CSR - SSR)

- Client side rendering yöntemi uygulanan bir sayfaya girdğimizde `js kodu` ve `boş html dosyası` indiriz. İndirilen js kodu `kendi bilgisayarımızda` çalışır ve html dosyasını doldurur ardından ekrana içerik gelir.

- Server side rendering yöntemi uygulanan bir sayfaya girdiğimizde `js kodu` ,client'da değil `sunucuda` çalışır ve HTML `sunucuda` oluşur. Client tarafı sayfaya gidiğinde sunucudan `dolu html'i` indirip ekrana basar.

## Neden SSR ?

1. Performans: JS kodu, client tarafta (bilgisayar/telefon) çalışması yerine server tarafında (sunucuda) çalışıyor olması. Js kodununun daha hızlı çalışıcağı anlmına gelir. Bu noktada sayfalar daha hızlı yüklenir.

2. SEO: SEO açısından dolu html indermek önemlidir. Bu sayede google robotlarına sayfalarımızı indexleme fırsatı vermiş oluruz aksi takdirde client side render yöteminde boş bir sayfayı indexlerler bu açından SSR'ın SEO dostu olduğunu söyleyebiliriz.

## Nasıl Server veya Client'da render ederiz?

- Next.js'de 2 farklı component türü vardır
- Server Component: İçeriğini server'da render eder
- Client Component: İçeriğini client'da render eder

- Next.js biz aksini belirtmedikçe componentları server component olarak ayarlar.
- Eğer client component istiyorsak bileşenin en üst kısmına "use client" ibaresi ekleriz
- Nextjs bizden olabildiğince fazla server component kullanmamızı ister

- Her component'ı server component yapamıyoruz. Sebebi ise server componentlar kullanıcı etkilişimlerini takip edemez veya react hooks kullanamaz

# Data Fetching

- Next.js api'dan gelen cevabı cache'de tutar ve aynı api isteğini tekrar attığımız zaman api'a gitmek yerine cache'de tuttuğu cevabı getirir.

- Bu sayede:
- - ilk istek sonrasında api'dan cevap beklemeye gerek kalmaz > daha hızlı
- - api'a gereksiz istek gitmez > daha az maliyet

- Cache özelliği sayesinde eğer api'dan gelen cevabı birden fazla component'da kullanmak istiyorsak redux vb. ye gerek kalamdan bütün componentlardan api isteğini atmak yeterli olucaktır.

# SSG & generateStaticParams

- Next.js 13 ve sınrasında app router ile birlikte kullanılan

- Dinamik olan (parametreye sahip) sayfalar normalde ssg kapsamına girmez

- generateStaticParams, fonksiyonu ile build sırasında belirli parametreleri dizi olarak veririz ve nextjs bu paremetrler için statik detay sayfaları oluşrurur.

- generateStaticParams({id:1,id:2,id:3})
- yukarıdaki dizideki her bir parametre için detay sayfasının build anında statik bir versiyonun oluşturur

# Fonts

- Next.js resimlerde olduğu gibi fontlarda da optimizasyonlara sahiptir.
- Örneğin bir fontun sadece projede kullanılan genişliklerini import eder.

# Next Methods

## useRouter

- sadece `client` component'larda kullanulır
- proje içerisnde yönlendirme yapmak için kullanılır
- back() | forward() | refresh() | push() methodları vardır

## redirect

- sadece `server` component'larda kullanulır
- proje içerisnde yönlendirme yapmak için kullanılır

## notFound

- hem `server` hemde `client` component'larda kullanılır
- 404 sayfasını renderla

## todo diğer methodlar
