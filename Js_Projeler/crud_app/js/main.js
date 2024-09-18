// Bağlantı Kontrolü
// console.log(`Selam Js`);
// ! Düzenleme Modu Değişkenleri
let editMode = false; // Düzenleme modunu belirleyecek değişken
let editItem; // Düzenleme elemanının belirleyecek değişken
let editItemId; // Düzenleme elemanının id si
// ! HTML'den elemanları çağırma
const form = document.querySelector(".form-wrapper");
const input = document.querySelector("#input");
const itemList = document.querySelector(".item-list");
const alert = document.querySelector(".alert");
const addButton = document.querySelector(".submit-btn");

// console.log(form, input);

// !!!!!!!! FONKSİYONLAR
// * Form gönderildiğinde çalışacak fonksiyon
const addItem = (e) => {
  // Sayfanın yenilenmesini iptal et
  e.preventDefault();
  const value = input.value;
  if (value !== "" && !editMode) {
    // Silme işlemleri için benzersiz değere ihtiyacımız var bunun için id oluşturduk
    const id = new Date().getTime().toString();
    createElement(id, value);
    setToDefault();
    showAlert("Eleman Eklendi", "success");
    addToLocalStorage(id, value);
  } else if (value !== "" && editMode) {
    editItem.innerHTML = value;
    showAlert("Eleman Güncellendi", "success");
    setToDefault();
  }
};

//  * Uyarı veren fonksiyon
const showAlert = (text, action) => {
  // Alert kısımının içeriğini belirler
  alert.textContent = ` ${text}`;
  // Alert kısımına class ekle
  alert.classList.add(`alert-${action}`);
  // Alert kısımının içeriğini güncelle ve eklenen classı kaldır
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 2000);
};
// * Elemanları silen fonksiyon
const deleteItem = (e) => {
  // Silmek istenen elemana eriş
  const element = e.target.parentElement.parentElement.parentElement;
  const id = element.dataset.id;
  // Bu elemanı kaldır
  itemList.removeChild(element);
  showAlert("Eleman Silindi", "danger");
};
// Elemanları güncelleyecek fonksiyon
const editItems = (e) => {
  const element = e.target.parentElement.parentElement.parentElement;
  editItem = e.target.parentElement.parentElement.previousElementSibling;
  input.value = editItem.innerText;
  editMode = true;
  editItemId = element.dataset.id;
  addButton.textContent = "Düzenle";
};
// * Varsayılan değerlere döndüren fonksiyon
const setToDefault = () => {
  input.value = "";
  editMode = false;
  editItemId = "";
  addButton.textContent = "Ekle";
};

// * Eleman oluşturan fonksiyon

const createElement = (id, value) => {
  // Yeni bir div oluştur
  const newDiv = document.createElement("div");
  // Bu div e attribute ekle
  newDiv.setAttribute("data-id", id); // ! setAttribute ile bir elemana   attribute ekleyebiliriz.Bu özellik bizden eklenecek özelliğin adını ve bu özelliğin değerini ister
  // Bu div e class ekle
  newDiv.classList.add("items-list-item");
  // Bu divin Html içeriğini belirle
  newDiv.innerHTML = `
           <p class="item-name">${value} </p>
            <div class="btn-container">
              <button class="edit-btn">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="delete-btn">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
  `;
  // Delete butonuna eriş
  const deleteBtn = newDiv.querySelector(".delete-btn");
  //   console.log(deleteBtn);
  deleteBtn.addEventListener("click", deleteItem);
  // Edit butonuna eriş
  const editBtn = newDiv.querySelector(".edit-btn");
  //   console.log(editBtn);
  editBtn.addEventListener("click", editItems);
  itemList.appendChild(newDiv);
  showAlert("Eleman Eklendi", "success");
};
// * Localstorage a kayıt yapan fonksiyon
const addToLocalStorage = (id, value) => {
  const item = { id, value };
  localStorage.setItem("berke", JSON.stringify(item));
};

// ? Olay İzleyicileri
form.addEventListener("submit", addItem);
