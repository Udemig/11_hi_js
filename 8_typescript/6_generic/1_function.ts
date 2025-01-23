/*
 ! Generic
 * Bir fonksiyon'un, type'ın, class'ın veya interface'in içerisindeki bazı tiplerin dinamik olarak dışarıdan gelen değere bağlı değişmesini istediğimiz durumlarda kullanırız.
 * Bu durumda generic çzelliğini kullanarak dışardıdan parametre olarak tip alabiliyoruz.
*/

// bizim niyetimiz gelen değer string[] ise string döndürmesi number[] ise number döndürmesi
// union type ile bu sorunu çözenmeyiz çünkü return satırı gelen değerden bağımıszı olabilir
const getRandomNumber = (array: number[] | string[]): number | string => {
  const i = Math.round(Math.random() * array.length);

  return array[i];
};

getRandomNumber([12, 45, 67, 89, 23]);

getRandomNumber(["a", "b", "c", "d", "e"]);

// Generic yardımıyla yukarıdaki fonksiyonu tekrar yazalım
const getRandomEle = <TypeParam>(array: TypeParam[]): TypeParam => {
  const i = Math.round(Math.random() * array.length);

  return array[i];
};

getRandomEle<number>([12, 45, 67, 89, 23]);

getRandomEle<string>(["a", "b", "c", "d", "e"]);

getRandomEle<boolean>([true, false, true, false]);

interface IPerson1 {
  name: string;
}

getRandomEle<IPerson1>([{ name: "Ali" }, { name: "Selda" }]);

// Gerçek Projede
// useState<string>("")
// useState<number>(0)
// const data = axios.get<IPerson[]>("/users")
