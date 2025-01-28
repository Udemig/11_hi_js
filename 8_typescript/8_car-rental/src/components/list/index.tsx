import { useEffect } from "react";
import { fetchCars } from "../../utils/service";

const List = () => {
  //

  useEffect(() => {
    fetchCars()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return <div>List</div>;
};

export default List;
