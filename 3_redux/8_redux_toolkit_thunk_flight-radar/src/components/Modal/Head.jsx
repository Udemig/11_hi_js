import c from "../../utils/nullCheck";

const Head = ({ info, close }) => {
  return (
    <div className="close-wrapper">
      <div>
        <h3 title="Call Sign">{c(info?.identification?.callsign, "white")}</h3>

        <span title="Flight Number">
          {c(info?.identification?.number?.default)}
        </span>
        <span title="Aircraft IATA/ICAO type code">
          {c(info?.aircraft?.model?.code)}
        </span>
      </div>

      <button onClick={close}>X</button>
    </div>
  );
};

export default Head;
