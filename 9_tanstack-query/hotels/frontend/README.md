# Kütüphaneler

- react-router-dom
- @tanstack/react-query
- react-toastify
- react-icons
- tailwindcss
- axios

## Api'dan Gelen Verilerin State'ini Tutma

### Klasik Yol

```js
const [isLoading, setIsLoading] = useState(true);
const [data, setData] = useState(null);
const [error, setError] = useState(null);

useEffect(() => {
  setIsLoading(true);

  axios
    .get("http://localhost:4001/api/places")
    .then((res) => setData(res.data))
    .catch((err) => setError(err.message))
    .finally(() => setIsLoading(true));
}, []);
```

### TanstackQuery

```js
const { isLoading, error, data } = useQuery({
  queryKey: ["places"],
  queryFn: getPlaces,
});
```

## Component Template

```js
import { FC } from "react";

interface Props {}

const Images: FC = () => {
  return <div>Images</div>;
};

export default Images;
```
