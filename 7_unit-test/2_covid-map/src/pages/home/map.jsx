import { useNavigate } from "react-router-dom";
import { geoUrl } from "../../utils/constants";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  const navigate = useNavigate();

  const redirect = (geo) => {
    navigate(`/detail/${geo.properties.name.toLowerCase()}`);
  };

  return (
    <div className="container p-0 mt-10 mb-20">
      <h1 className="p-5 text-2xl font-semibold">Ülke Seçin</h1>

      <div className="border shadow-lg md:rounded-xl bg-gray-200">
        <ComposableMap>
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: { fill: "white", stroke: "gray" },

                      hover: { fill: "#DB2777" },
                    }}
                    onClick={() => redirect(geo)}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
};

export default Map;
