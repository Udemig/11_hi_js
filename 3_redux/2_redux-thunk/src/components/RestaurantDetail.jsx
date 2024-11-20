import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import Loader from "./Loader";
import { FaArrowDown, FaClock, FaStar } from "react-icons/fa";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    api
      .get(`/restaurants/${id}`)
      .then((res) => setRestaurant(res.data));
  }, []);

  if (!restaurant) return <Loader />;

  return (
    <div className="flex gap-5">
      <img className="w-[150px] rounded-md" src={restaurant.photo} />

      <div className="flex flex-col justify-between">
        <div className="text-red-500 flex gap-4">
          <p className="flex items-center gap-2">
            <FaArrowDown />
            <span className="text-gray-700">
              min {restaurant.minPrice} TL
            </span>
          </p>
          <p className="flex items-center gap-2">
            <FaClock />
            <span className="text-gray-700">
              min {restaurant.estimatedDelivery} dak.
            </span>
          </p>
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold">
          {restaurant.name}
        </h1>

        <p className="flex items-center gap-2">
          <FaStar className="text-red-500" />
          <span className="text-gray-700">{restaurant.rating}</span>

          <button className="text-red-500 font-semibold p-1 rounded hover:bg-red-100 transition">
            Yorumları Gör
          </button>
        </p>
      </div>
    </div>
  );
};

export default RestaurantDetail;
