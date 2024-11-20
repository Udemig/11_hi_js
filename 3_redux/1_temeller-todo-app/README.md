## State Yöntemi

- State: Uygulamadaki bileşenlerin sahip olduğu bilgi ve özelliklerdir.

- Prop Drilling: Bileşenkerin yukarıdan aşşağıya veri taşımasıdır.

- Context: Uygulamadki state'i bütün bileşenler tarafından erişilebilen ve oluşturduğumuz merkezlerde yönettiğimiz state yönetim aracı.

- Redux: Bileşenkerin sahip olduğu ve merkezi olarak tutulması gereken state'lerin yönetildiği merkezi state yönetim aracı

## Neden Context Yerine Redux

- Kod tekrarını önler
- Performansı daha iyidir
- Bileşenker içerisindeki karışıklığı azaltır.
- Hata ayıklama daha kolaydır
- Orta ve büyük ölçekli projelerde state yönetimini daha kolay hale getirir.

## Redux İle İlgili Bilinmesi Gerkenler

1. Store: Uygulamanın bütün bileşenleri tarafından erişlebilen ve yönetilebilen state deposu.

2. Reducer: Aksiyon ile aldığı talimata göre reducer'da tutulan state'in nasıl güncelleniceğine karar verir.

3. Action (Eylem & Emir & Haber): State'in nasıl değişceğini ifade eder.

- Action iki değere sahip bir nesnedir
- - type: action'un görevini tanımlayan string değer.
- - payload: action yanında gönderdiğimiz veri

4. Dispatch (Sevk etmek): Eylemi reducera aktarmaya yarayan fonksiyondur

5. Subscribe (Abone olmak): Bileşenlerin store'da tutulan veriye erişim sağlaması

6. Provider (Sağlayıcı): Store'da tutulan verileri uygulamaya sağlar

## Gerçek Hayattan Benzer

1. Store: Okul Binası

2. Reducer: Okul Yönetim Ekibi (Müdür, Müdür Yard.)

3. Action: "Yeni Kayıt" | "Okuldan Atılma" | "Sınav Geçildi"

4. Dispatch: Öğrenci İşleri | Öğretmen

5. Subscribe: e-okul |  rehberlik servisi

6. Provider: MEB
