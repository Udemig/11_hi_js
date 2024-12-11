import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/actions";
import Head from "./Head";
import Gallery from "./Gallery";
import Airport from "./Airport";
import Time from "./Time";
import Aircraft from "./Aircraft";
import Loader from "../Loader";
import Error from "../Error";

const Modal = ({ id, close }) => {
  const { isLoading, error, info } = useSelector((store) => store.detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(id));
  }, [id]);

  return (
    <div className="modal-outer">
      <div className="modal-inner">
        <Head info={info} close={close} />

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error info={error} />
        ) : (
          info && (
            <div className="info-wrapper">
              <div className="details">
                <Gallery data={info.aircraft.images} />

                <Airport data={info.airport} />

                <Time data={info.time} />

                <Aircraft data={info.aircraft} />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Modal;
