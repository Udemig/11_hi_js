/*
 ! Type Guards

 * Type guardsın amacı belirli türdeki değerleri kontrol etmek ve bu türe özgü işlemler gerçekleştirebilmek için kullanılan bir tekniktir.

 * 2 farklı typeGuards yöntemi bulunur (typeof, instanceof)
*/
// 1) type operatörü ike typeGuards tekniğini uygulayalım
function log(input) {
    if (typeof input === "string") {
        // eğer inputun tipi string ise şu işlemi yap
        console.log("Değişken stringdir: ", input.toUpperCase());
    }
    else {
        // eğer inputun tipi number ise şu işlemi yap
        console.log("Değişken numberdır: ", input.toFixed(2));
    }
}
log("selam");
log(999);
// instanceof nedir?
// nir nesnenin hangi class'tan meydana geldiğini kontrol etmemizi sağlar
var Bird = /** @class */ (function () {
    function Bird() {
    }
    return Bird;
}());
var Rabbit = /** @class */ (function () {
    function Rabbit() {
    }
    return Rabbit;
}());
var tavsan = new Rabbit();
console.log("Tavşan nesnesi rabbit class'ının örneği midir?", tavsan instanceof Rabbit);
console.log("Tavşan nesnesi bird class'ının örneği midir?", tavsan instanceof Bird);
// instanceOf operatörü ile typeGuard tekniğini uygulayalım
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        console.log("🐈🐈🐈 miyav miyav");
    };
    return Cat;
}());
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log("🐶🐶🐶 hav hav");
    };
    return Dog;
}());
function makeSound(animal) {
    if (animal instanceof Cat) {
        animal.meow();
    }
    else {
        animal.bark();
    }
}
var kedi = new Cat();
var kopek = new Dog();
makeSound(kedi);
makeSound(kopek);
