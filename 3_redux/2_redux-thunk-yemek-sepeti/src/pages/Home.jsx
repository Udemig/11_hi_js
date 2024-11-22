import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { getRestaurants } from "../redux/actions/restActions";
import Error from "../components/Error";
import RestaurantCard from "../components/RestaurantCard";

const Home = () => {
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurantReducer
  );

  const dispatch = useDispatch();

  const retry = () => dispatch(getRestaurants());

  return (
    <div className="container">
      <h1 className="font-semibold text-lg md:text-xl">
        Yakınızdaki Restoranlar
      </h1>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error} retry={retry} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {restaurants.map((item) => (
            <RestaurantCard key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
