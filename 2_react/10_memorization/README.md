# React Memorization

- React'ta memorization, bileşenlerin performanısını arttırmak için belirli işlemlerin sonucunu önbeleeğe alma yöntemidir. React'ta bu amaçla birden fazla yöntem kullanılabilir.

## 1- useMemo()

- useMemo, bir fonksiyonun sonucunu önbelleğe alarak, bileşenin her render edilmesinde bu fonksiyonu yeniden çalıştırmaktan kaçınır.
- Genellikle ağır hesaplamalar veya bağımlılıkları değişmedikçe sabit kalan veri işlemlerinde kullanılır.
- ```js
  const yeniDizi = useMemo(() => {
    const dizi = new Array(1000).fill("Merhaba Dünya");

    return dizi.map((item) => item + "!");
  }, []);
  ```

## 2- React.Memo()

- Bir bileşeni yalnızca props'ları değiştiğinde render etmeye yarayan bir HOC'dır.
- Normal şartlarda bir alt bileşenin kapsayıcı bileşenin render olması alt bileşenin'de render olmasına seebep olur.
- React.Memo() bunu önler.

## 3- useCallback()

# Önbellek

- Önbellek (cache), verilerin veya işlemlerin geçici olarak saklandığı bir depolama alanıdır.
- Bir pc veya yazılım, sık erişilen veya tekrar kullanılacak verileri, ana bellekten (RAM) ya da diskten daha hızlı bir hafızada saklayarak daha hızlı erşim sağlar.
- Böylece sistemin performansı ve verimliliği artar.
- Önbelleğ alınan veriler tekrar ihtiyaç duyuldğunda doğrudan buradan getirilir, böylece yeniden hesaplanma veya yeniden yükleme işlemini yapmasına gerek kalmaz
