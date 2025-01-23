/*
 ! Type Guards

 * Type guardsın amacı belirli türdeki değerleri kontrol etmek ve bu türe özgü işlemler gerçekleştirebilmek için kullanılan bir tekniktir.

 * 2 farklı typeGuards yöntemi bulunur (typeof, instanceof)
*/

// 1) type operatörü ike typeGuards tekniğini uygulayalım
function log(input: string | number): void {
  if (typeof input === "string") {
    // eğer inputun tipi string ise şu işlemi yap
    console.log("Değişken stringdir: ", input.toUpperCase());
  } else {
    // eğer inputun tipi number ise şu işlemi yap
    console.log("Değişken numberdır: ", input.toFixed(2));
  }
}

log("selam");
log(999);

// instanceof nedir?
// nir nesnenin hangi class'tan meydana geldiğini kontrol etmemizi sağlar
class Bird {}
class Rabbit {}

const tavsan = new Rabbit();

console.log(
  "Tavşan nesnesi rabbit class'ının örneği midir?",
  tavsan instanceof Rabbit
);

console.log(
  "Tavşan nesnesi bird class'ının örneği midir?",
  tavsan instanceof Bird
);

// instanceOf operatörü ile typeGuard tekniğini uygulayalım
class Cat {
  meow(): void {
    console.log("🐈🐈🐈 miyav miyav");
  }
}

class Dog {
  bark(): void {
    console.log("🐶🐶🐶 hav hav");
  }
}

function makeSound(animal: Cat | Dog) {
  if (animal instanceof Cat) {
    animal.meow();
  } else {
    animal.bark();
  }
}

const kedi = new Cat();
const kopek = new Dog();

makeSound(kedi);
makeSound(kopek);
