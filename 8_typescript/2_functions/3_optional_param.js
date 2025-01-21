/*
 * Optional Param

 * Normal şartlarda fonksiyonu çalıştırabilmemiz için paramaetrelerin tamamına değer göndermemiz gerekir.

 * Bazı durumlarda parametrelerin zorunlu olmasını istemeyebiliriz
 
 * Tanım:
 * (a:string,b?:number) => null
 
 * Opsiyonel parametreler parametre listesinin en sonunda yer alır.
 * Bir opsiyonel parametrenin arından zorunlu bir parametre yazılamaz

*/
function example(par1, par2) {
    console.log("1.param", par1);
    console.log("2.param", par2);
}
example(125);
example(125, undefined);
example(125, "selam");
// Örnek - 2
var karsilama = function (isim, zaman) {
    if (zaman) {
        return "\u0130yi ".concat(zaman, ", ").concat(isim);
    }
    else {
        return "Merhaba, ".concat(isim);
    }
};
console.log(karsilama("Ahmet"));
console.log(karsilama("Ali", "akşamlar"));
