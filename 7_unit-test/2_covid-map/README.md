# Gerekli Kütüphaneler

- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event@14.0
- axios@^0.27.2
- millify
- @reduxjs/toolkit
- redux-thunk
- react-simple-maps
- react-router-dom
- react-icons
- tailwindcss

# Kaynaklar

- API : https://rapidapi.com/api-sports/api/covid-193/playground/apiendpoint_2feca6f0-0f58-40b7-9196-98c45c7d5083

- GEO.JSON : https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json

# Selector Methods

- Ekrandaki elementleri almak için kullandığımız seçici methodları 3 ana parçadan oluşur.

1. Method:

- Get: Ekranda element yoksa hata verir.
- Query: Ekranda element yoksa hata vermesz null döndürür.
- Find: Ekrana asenkron olarak basılan elementleri alır.

2. All ifadesi:

- Eğerki ekrandan tek bir methodla birden fazla eleman almak istiyorsak kullandığımız methodun devamına All ifadesi ekleriz.
- All kullanırsak dönen cevap her zaman dizi içerisinde olur.
- [ele1,ele2,ele3] - [ele1]
- queryAllBy | getAllBy | findAllBy

3. Query:

- Hangi yötemle elementi seçiceğimiz belirleyen method
- ByRole
- ByLabelText
- ByPlaceholderText
- ByText
- ByDisplayValue
- ByAltText
- ByTitle
- ByTestId

# 100% Test Covorage
