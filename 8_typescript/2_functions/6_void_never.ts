/*
 * Sadece fonksiyonların return tipinde kullanabilceğimiz iki yeni veri tipi:
 ! Void
 * Fonksiyon herhangi bir veri return etmiyorsak kullanılır.
 * Void varsa return satırı ya olmaz yada değer döndrümez.
*/

function selamla1(): void {
  console.log("Selam nasılsınız ?");
}

function selamla2(): void {
  console.log("Selam nasılsınız ?");

  return;
}

/*
 ! Never
 * Fonksiyon hata fırlatıyorsa kullanır
 * "Hiç bir zaman görevini tam olarak tamamlayamaz" durumunu ifade eder.
*/

function hataFonksiyonu(message?: string): string | never {
  if (!message) {
    throw new Error(message);
  } else {
    return "selam";
  }
}

hataFonksiyonu("naber");
hataFonksiyonu();
