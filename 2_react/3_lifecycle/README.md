# Component

- React'ta iki çeşit component bileşen bulunur.

1. Class Component:

- Function component'lar ortaya çıkamdan önce kullanılırdır.
- Günümüz react projelerinde yerini funtion'a bıraktılar.
- React hook'ları kullanılamaz

2. Function Component:

- Class'lar fazla kod alanı kapladığından classların yerine tercih edilir.
- Class'ın sahip olduğu state, lifecycle vb. özelliklere sahip olmamasına rağmen react hookları sayesinde bu özellikleri kullanbiliyoruz.

# Optional Chaining (?.)

- bir ndesne içindeki değişkene erişirken veya bir method çağırıken değişkenin null veya undefined olma ihtimali varsa hatı önlemek için kullanırız.

- users?.map()
- users && users.map()
- yukarıdaki iki yöntemde aynı görevi yapar
