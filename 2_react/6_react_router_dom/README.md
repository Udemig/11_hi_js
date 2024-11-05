# React Routed DOM

- React uygulamalarında sayfalar veya bileşenler arasında gezinmeyi sağlayan bir kütüphanedir. Single Page Application (SPA) mimrisine sahip bir react projesi oluşturmamızı sağlar

# Route

- Her bir rota (URL) için hangi bileşenin gösterileceğini belirler

# Routes

- Taryıcıdaki url'i izler ve url her değiştiğinde yol tanımladığımızdan routelardan birinin path değeri eşleşirse o route'un bilşenini ekrana basar

# Link

- Proje içerisinde yönlendirme yaparken a etiketi sayfanın yeniden yüklenmesine sebep oluyor. Bundan kaynaklı olarak react router yönlendirme için Link elementi kullanmamızı ister

- Link etiketinin a etiketinden tek farkı href niteliği yerine to niteliği ile yönlendirilecek adres belirlenir

# NavLink

- Link ile aynı şekilde yönlendirm yapar.
- Kullanıcının bulunduğu mevcut sayfanın linline active class'ı verir

# useParams

- url'deki path params dediğimiz yol prametrelerine erişmemizi sağlar

# Dynamic Routes

- sayfa içeriği url'deki parametreye bağlı değişen sayfalar
- youtube video sayfası
- amazon ürün sayfası
- netflix film sayfası

# useSearchParams

- queryParams'ı yani aramaParametrelerine eirşmeeye veya güncellemeyi sağlayan hook

# useNavigate

- Link elementinin fonksiyon verisiyonu.
- Fonksiyon içeirisnde kullanıcıyı yönlendirmek için kullanırız.

# useLocation

- url ile alakalı bazı bilgiler erişmemizi sağlar
- parametreler / mevcut yol / hash / state

# Nested Routes

- İç içe gçmiş yollar, bu özellik alt bileşnlerin ana bilşenin bir parçası olarak yüklenmesine imkan tanır.

- Neden Nester Routes

1. Sadece bir kaç sayfaya özel ortak bir eleman (sidebar header hero) tanımlamak için kullanılabilir.

2. Kullanıcı yetkilendirmesi içinde nested routes'u kullanırız.
   Örneği adminin erişebilecğei sayfaları bir kapsayıroute içerisine, premium kullanıncın erişebilceği sayfları farklı bir kpasyaıcı route içerisine alıp gerekli koşulları yazdığımız zaman kullanıcı tolüne göre yetkilendirme işini nested routes özelliği sayesinde salayabiliriz.
