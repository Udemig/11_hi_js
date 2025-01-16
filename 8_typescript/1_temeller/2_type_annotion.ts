/*
 * Type Annotations
 * Javascript'te değişkenin türünü belirleme gibi bir özellik söz konusu değildir.
 * Fakat typescript'de tanımladığımız değişkenlerin tiplerinide belirleyebiliyoruz.
 * Bu sayede değer ataması yaparken belirlenen tip kısıtlamasının dışarısına çıkamıyoruz. Bu sayede kodda oluşabilcek hataların erkanden önüne geçmiş oluyoruz
 */

let foo: number;

foo = 46;

foo = 56;

// foo = true; !HATA

// foo = "merhaba"; !HATA

// Soru: Değişken tanımlarken type belirlemek zorunda mıyız?
// Cevap: Hayır, biz type'ı belirlemesek bile ts oto. olarak değişkenin tipini algılar ve kontrollerini ona göre ayapar ama biz yinede bütün değişkenlerin tipini tanımlıyıcaz çünkü oto tip algılama bazen yanlış kararlar verebilir bundan dolayı hatalar alabilirisiniz.

let bar: string = "4";

/*
 * Javascript'de bulunan veri tipleri nelerdir
 * string
 * number
 * boolean
 * array
 * object
 * null
 * undefined
 * function
 * Date
 * symbol (pek kullanmıyoruz)
 * bigint (pek kullanmıyoruz)
 */

let company: string = "Udemig";

let age: number = 35;

let has_license: boolean = true;

let student: object = { id: 2, name: "Ali" };

let value: null = null;

let value1: undefined;

let value2: undefined = undefined;

let value3: Function = () => {};

let value4: Date = new Date();

let value5: bigint = BigInt(9007199254740991);

let value6: symbol = Symbol("foo");
