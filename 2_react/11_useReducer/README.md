# useReducer

- Bir react hook'udur.
- Bileşenlerdeki karmaşık state yönetimini daha etkili hale getirmek için kullanılır.
- Bilşeen içeirisndeki state'i yönetirken useState'İn yetersiz kaldığı durumlarda kullanılır.
- Bir bileşende 5-10+ tane state tutulması gerektiği seneryoda useState yerine kullanırız

# Action

- Aksiyon / Eylem anlamına gelir ve state nasıl değişeceğine ifade eden metinlerdir.
- EKLE | SİL | GÜNCELLE  | MESAJ GÖNDER

# Dispatch

- Eylemleri reducer'a aktarmaya yarayan fonksiyondur

dispatch("EKLE")
dispatch("SİL")

# Reducer

- useReducer ile yönetilen staet'in nasıl değişeceğine karar veren fonksiyon
- Gelen aksiyona bağlı olarak state'in nasıl güncelleniceğini belirler
