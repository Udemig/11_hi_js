import { FaClock, FaStar } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { Link } from "react-router-dom";

const RestaurantCard = ({ data }) => {
  return (
    <Link
      to={`/restaurant/${data.id}`}
      className="relative shadow rounded-lg overflow-hidden hover:bg-gray-200 hover:shadow-lg cursor-pointer transition"
    >
      <span className="bg-red-500 p-1 px-3 text-sm absolute end-1 top-2 rounded-md text-white">
        {data.distance} km uzakta
      </span>

      <img
        src={data.photo}
        className="w-full object-cover max-h-[300px]"
      />

      <div className="p-3">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl md:text-xl font-semibold">
            {data.name}
          </h3>

          <p className="flex items-center gap-2 text-red-500">
            <FaStar />
            {data.rating}
          </p>
        </div>

        <p className="text-sm my-3 text-gray-500">
          {data.minPrice} TL minimum
        </p>

        <div className="flex gap-4 justify-between items-center">
          <p className="flex gap-2 items-center font-semibold">
            <FaClock className="text-red-500" />
            <span className="text-gray-500">
              {data.estimatedDelivery} dak.
            </span>
          </p>

          {data.isDeliveryFree && (
            <p className="flex gap-2 items-center">
              <MdDeliveryDining className="text-red-500 text-lg" />
              <span className="font-bold text-sm text-gray-500">
                Ücretsiz
              </span>
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
