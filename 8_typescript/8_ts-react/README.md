# TS ile React Yazılırken Dikkat

- Tip tanımlanabilecek her değişkenin / fonksiyonun tipi tanımlanmalı.
- Tipi tanımlanmamış bir değişken bile bırakılmamalı
- Oto tip algılama özelliği olabiilidğince az kullanılmalı, mümkünse hiç kullanılmamalı

## useState

- useState kullanırken state'ini tutucağımız değişkenin tipini useState'e generic olarak gödeririz

- evet useState oto olarak algılayabilir ama yukarıdada dediğiimiz gibi mümkünse o özelliği hiç kullanmamalıyız

## Prop Tipi

- Bir bileşenin aldığı prop'lardan ziyade artık prop'ları tipinide tanımlamak zorundayız.

- Ve bu bilşeni kullanırken tanımladığımız tipteki propları göndermezsek hata alırız
