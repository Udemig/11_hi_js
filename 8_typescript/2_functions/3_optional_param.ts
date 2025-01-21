/*
 * Optional Param

 * Normal şartlarda fonksiyonu çalıştırabilmemiz için paramaetrelerin tamamına değer göndermemiz gerekir.

 * Bazı durumlarda parametrelerin zorunlu olmasını istemeyebiliriz
 
 * Tanım:
 * (a:string,b?:number) => null
 
 * Opsiyonel parametreler parametre listesinin en sonunda yer alır.
 * Bir opsiyonel parametrenin arından zorunlu bir parametre yazılamaz.

*/

function example(par1: number, par2?: string) {
  console.log("1.param", par1);
  console.log("2.param", par2);
}

example(125);
example(125, undefined);
example(125, "selam");

// Örnek - 2
const karsilama = (isim: string, zaman?: string, id?: string): string => {
  if (zaman) {
    return `İyi ${zaman}, ${isim}`;
  } else {
    return `Merhaba, ${isim}`;
  }
};

console.log(karsilama("Ahmet"));
console.log(karsilama("Ali", "akşamlar"));
console.log(karsilama("Ali", undefined, "1234"));
