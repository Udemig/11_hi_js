import { useSelector } from "react-redux";
import ContentLoader from "../../components/loader/content-loader";
import Error from "../../components/error/index";
import Card from "./Card";

const Content = () => {
  const { isLoading, error, data } = useSelector((store) => store);

  // data nesnesini diziye çevir
  const arr = Object.entries(data || {}).filter((i) => i[0] !== "flags");

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {isLoading ? (
        <ContentLoader />
      ) : error ? (
        <Error info={error} />
      ) : (
        arr.map((item, key) => <Card key={key} item={item} />)
      )}
    </div>
  );
};

export default Content;
