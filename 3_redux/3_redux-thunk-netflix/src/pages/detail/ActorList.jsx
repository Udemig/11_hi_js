import { Splide, SplideSlide } from "@splidejs/react-splide";
import { baseImgUrl } from "../../constants";

const ActorList = ({ actors }) => {
  console.log(actors);
  return (
    <div className="mb-10">
      <h2 className="font-semibold text-lg md:text-xl my-5">Oyuncular</h2>

      <Splide options={{ autoWidth: true, gap: "20px", pagination: false }}>
        {actors.map((actor) => {
          const url = actor.profile_path
            ? baseImgUrl + actor.profile_path
            : actor.gender === 1
            ? "/woman.jpg"
            : actor.gender === 2
            ? "/man.jpg"
            : "/default.webp";

          return (
            <SplideSlide>
              <div className="w-[160px] h-full flex flex-col">
                <img className="h-full object-cover" src={url} />

                <h2 className="text-center font-semibold mt-2">{actor.name}</h2>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default ActorList;
