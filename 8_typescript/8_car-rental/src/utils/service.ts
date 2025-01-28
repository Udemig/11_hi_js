import axios from "axios";

export const fetchCars = async () => {
  const url = `https://auto.dev/api/listings`;

  const res = await fetch(url, {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer ZrQEPSkKZnVya2FuZXZpbjAwQGdtYWlsLmNvbQ==",
    },
  });

  console.log(await res.json());

  return res;
};
