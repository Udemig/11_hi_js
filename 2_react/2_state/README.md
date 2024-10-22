# State'in Ortaya Çıkma Noktası

React uygulamalrında bileşen içerisinde kullanıcı etkileşimi sonucu arayüzde değişim olmasını isteyebiliriz. Örn:
Butona tıklandığında tema değişimi.
Api'a istek atıldığında ekrana loader gelmesi.

# State

State, bileşen içerisinde verileri saklamaya ve yönetmeye yarayan yapıdır.

State'in değeri her değiştiğinde bileşen otomatik olarak tekrardan render olur, bu satede state'e bağlı olarak görünümü değişecek olan arayüz yapıları güncellenmeiş olur.

Yine normal const veya let değişkenlerini kullanmya devam edicez ancak değişken, değiştiğinde arayüze bunun yansımasını istiyorsak o zaman let veya const yerine state kullanmalıyız.

# Kullanım

` const [count, setCount] = useState(0);`

useState'e parametre olarka tutucamuz state'in ilk değerini veriri
useState dizi içerisinde iki değer döndürür

1. tutuğumuz state'in son haline erişmemize yarayan değişken
2. bu değişkeni güncellemeye yarayan method

not: state'in değiştiriken sadece yanında gelen methodla değiştirirz bu sayede değişimden react'In haberi olur ve bileşi tekrardan renderla
