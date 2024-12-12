# Mimari

- Yazılım mimarisi, bir yazılım sisteminin nasıl organize edildiğini ve farklı bileşenlerin biribiryle nasıl etkileşime girdiğini tanımlayan genel bir plandır. Doğru mimari seçimi uzun vadede bir çok fayda sağlar.

- Yazılım her alanında farklı mimariler kullanılır Backend (MVC - Microservice...), Mobile, React, Vue, Angular (Component Based Arc.), .NET(MVC) mimarileir kullanılır.

## Frontend Mimari Yaklaşımları

## Component Based Architeture

- React, Vue, Angular gibi modern frameworklerde uygulaman küçük, tekrar kullanılabilir parçalardan oluşturulur.

## Tek Sayfa Uygulama (SPA)

- Sayfa yenilemeden, hızlı kullanıcı deneyimi için react-router-dom kullanrak sayfalanaya denir

# S.O.L.I.D Prensipleri
- SOLID prensipleri, yazılım geliştirme süreçlerinde daha esnek, sürdürelebilir ve hataya dayınıklı kod yazmamımıza yardımcı olan beş temel prensibi ihtimal eder.

## S - Single Responsibilty Prenciple (Tek Sorumluluk Prensibi)
Bir sınıf veya fonksiyon yalnızca tek bir şeyden sorumlu olmalıdır

## O - Open/Closed Prenciple (Açık/Kapalı Prensibi)
Kodunuz yeni özelliklere açık ancak mevcut kod değişikliğine kapalı olmalı

## L - Liskov Substitution Prenciple (Liskov Yerine Geçme Prensibi)
Bir alt sınıf üst bileşenin yerine kullanılabiliro olmalı yani üst sınıfın methodlarını değiştirmemeli.

## I - Interface Segregation Prenciple (Arayüz Ayrımı Prensibi)
Bir nesne/bileşen sadece aynı türdeki verileri tutmalı. Yani bir nesede hem araç hemde motosiklet verisni tutmak yerine bir araç bir motosoiklet nesnesi oluşturulmalı.

## D - Dependency Invasion Prenciple (Bağımlılıkların Tersine Çevirme Prensibi)
- Yüksek seviyeli modüller, düşük seviyeli modüllere doğrudan bağlı olmamalıdır.
