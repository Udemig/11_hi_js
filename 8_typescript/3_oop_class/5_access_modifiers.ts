/*
 * Access Modifiers - Erişim Belirteçleri
 
 * Class elemanları ile hasas bilgiler tutucağımız zaman bu bilgilerin class'ın dışarısından erişilip erişilmeyeceğini belirtmek isteriz

 * 3 adet erişim belirteçleri

 * public: hem class dışarısından hemde class'ı miras alan diğer class'lardan erişilebilir
 * proteceted: class'ın dışarısında erişilemez ama class'ı miras alan diğer class'lardan erişilebilir
 * private: hem clas'ın dışarısından hemde class'I miras alan diğer class'lardan erişilemez
*/

class Arac1 {
  public marka: string = "BMW";
  public model: string = "M4";
  private doğrulama_kodu: number = 202045347583424;

  tanit() {
    console.log(this.marka); // class'ın içerisinden erişim
  }

  constructor(marka: string) {
    this.marka = marka;
  }

  doğrulama() {
    console.log("gerekli doğrulamalar yapılıyor...");
  }
}

class Motor extends Arac1 {
  calistir(): void {
    console.log(this.marka); // miras alan class'ın içerisinden erişim
  }
}

const arac = new Arac1("Mercedes");
arac.marka; // class'ın dışarısında erişim

/*
 * Not: Erişim belirteçleri ts'e özel olan bütün kodlarda olduğu gibi js' derlediğimizde ortadan kalkar. Yani beliteçler sadece gelişrtime aşamasını dah gücenli hale getirmek için kullanılır.


 * ERİŞİM            DIŞARIDAN          MİRAS ALAN CLASS'DAN          TANIMLANDIĞI CLASS'DAN
 
 * PUBLIC               💥                        💥                               💥

 * PROTECTED                                      💥                               💥 

 * PRIVATE                                                                         💥  

*/
