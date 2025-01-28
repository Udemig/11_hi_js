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

```js
import React, { FC } from "react";

// Component'ın aldığı prop'larının tipini tanımlama
type Props = {
  text: string,
};

// Component tipi tanımla - RETURN TİPİ OTO ALGILAMA
const Button = ({ text }: Props) => {
  return <button>{text}</button>;
};

// Component tipi tanımla - RETURN TİPİ AYRI PROP TİPİ AYRI
const Input = ({ text }: Props): JSX.Element => {
  return <input />;
};

// Component tipi tanımla - REACT.FC Yöntemi
const Select: FC<Props> = ({ text }) => {
  return <select />;
};

const Form: FC = () => {
  // form gönderilince
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // butona tıklanınca
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {};

  // input değişince
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" placeholder="İsminiz" />

      <button onClick={handleClick}>gönder</button>
    </form>
  );
};
```
