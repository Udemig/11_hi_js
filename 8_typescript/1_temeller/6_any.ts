/*
 * Any Type
 * Bir değişkene any type atadığımız zaman değişken herhangi bir türde değer alabilir ve bir tür kısıtlamasına maruz kalmaz.
 
 * TS'de any type ile tanımlanmış olan bir değişken JS değişkeni gibi davranır.
  
 * Type'ı any olan değişkenler için otomatik tamam devre dışı kalır.

 * Normal şartlarda any kullanılması TS mantığına aykırıdır. Çünkü ts'de amaç her değişkenin türünün farklı olmasıdır.

 * Any genelde "geçici / acil" durumlarda kullanılır. 
 * Örn api'dan gelen bir veri var ama verinin tipini tanımlayacak kadar zamanımız yok hemen çalışır hale getirmeli ve githuba yüklemeliyiz. Bu tarz "geçici" durumlarda any tipi kullanılabilir.
 
 * Mutlaka any tipleri bir noktadan sınra kaldırılıp yeribe doğru tipler tanımlanmalı
*/

let foo: any;

foo = "string";
foo = 45;
foo = true;
foo = function () {};

// dizilerde kullanımı

let bar: any[];

bar = ["s", 2, true];
