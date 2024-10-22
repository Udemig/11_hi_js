export async function fetchUser() {
  try {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((res) => console.log(res));
  } catch (error) {
    console.log(`Hata: ${error}`);
  }
}
