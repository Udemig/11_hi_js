import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Video } from "@splidejs/splide-extension-video";
import ReactPlayer from "react-player";
import "@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css";

const VideoList = ({ videos }) => {
  return (
    videos.length > 0 && (
      <div className="my-10">
        <h2 className="font-semibold text-lg md:text-xl my-5">Fragmanlar</h2>

        <Splide Extensions={{ Video }}>
          {videos.map((video, key) => (
            <SplideSlide key={key}>
              <div className="w-full h-[30vh] md:h-[50vh]">
                <ReactPlayer
                  controls
                  width={"100%"}
                  height={"100%"}
                  url={`https://www.youtube.com/watch?v=${video?.key}`}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    )
  );
};

export default VideoList;
