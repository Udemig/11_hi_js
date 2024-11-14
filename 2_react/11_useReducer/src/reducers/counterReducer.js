/*
 * Reducer fonksiyonunda state'in nasıl değişeceğine karar veririz.

 * Reducer fonksiyonu parametre olarak state'in son halini ve tetiklene aksiyonu alır.

 * Dispatch ile bir aksiyon her tetiklendiğinde reducer fonksiyonu çalışır ve gelen aksiyona göre staete'in nasıl değişceğine belirler

 * Reducer fonksiyonun döndürdüğü değer state'in son hali olur
 */

const counterReducer = (state, action) => {
  if (action === "ARTTIR") return state + 1;
  if (action === "AZALT") return state - 1;
  if (action === "SIFIRLA") return 0;

  return 999;
};

export default counterReducer;
