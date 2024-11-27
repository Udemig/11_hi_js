import { useEffect, useState } from "react";
import api from "../../api/index";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/loader/index";
import Banner from "./Banner";
import Content from "./Content";
import ActorList from "./ActorList";
import VideoList from "./VideoList";
import { RiArrowLeftSLine } from "react-icons/ri";
import SaveButton from "../../components/savebtn";

const Detail = () => {
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const params = {
      append_to_response: "credits,videos",
      language: "tr",
    };

    api
      .get(`movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <Error info={error} />;

  if (!movie) return <Loader />;

  return (
    <div>
      <div className="flex mb-5 justify-between">
        <Link
          to={-1}
          className="bg-gray-600 py-2 px-4 rounded hover:bg-gray-500 transition flex gap-2 items-center"
        >
          <RiArrowLeftSLine className="text-xl" />
          Geri
        </Link>

        <SaveButton movie={movie} />
      </div>

      <Banner movie={movie} />

      <Content movie={movie} />

      <ActorList actors={movie.credits.cast} />

      <VideoList videos={movie.videos.results} />
    </div>
  );
};

export default Detail;
