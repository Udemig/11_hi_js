import Filter from "../../components/filter";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { useSelector } from "react-redux";
import "./home.scss";
import Card from "../../components/card";

const Home = () => {
  const { isLoading, error, jobs } = useSelector(
    (store) => store.jobReducer
  );

  return (
    <div className="home-page">
      <Filter />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <div className="cards-wrapper">
          {jobs.map((job) => (
            <Card key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
