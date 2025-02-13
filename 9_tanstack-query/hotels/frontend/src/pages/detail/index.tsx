import { useQuery } from "@tanstack/react-query";
import { Children, FC } from "react";
import { Link, useParams } from "react-router-dom";
import { getPlace } from "../../utils/service";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { FaArrowLeft } from "react-icons/fa6";
import Return from "./return";
import Container from "./container";
import Images from "./images";
import Info from "./info";
import Overview from "./overview";
import Button from "./button";

const Detail: FC = () => {
  const { id } = useParams();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["place"],
    queryFn: () => getPlace(id as string),
  });

  if (isLoading)
    return (
      <Container>
        <Loader />
      </Container>
    );

  if (error)
    return (
      <Container>
        <Error info={error} refetch={refetch} />
      </Container>
    );

  if (!data) return;

  return (
    <Container>
      <Images image={data.image_url} />

      <Info place={data} />

      <Overview place={data} />

      <Button id={id as string} />
    </Container>
  );
};

export default Detail;
