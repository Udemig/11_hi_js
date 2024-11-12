import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { millify } from 'millify';

const Channel = ({ video }) => {
  return (
    <div className="flex  justify-between max-sm:flex-col">
      {/* sol */}
      <div className="flex items-center gap-2 sm:gap-4 max-sm:justify-between">
        <div className="flex gap-2 sm:gap-4 items-center">
          <img
            className="rounded-full size-10 sm:size-12"
            src={video.channelThumbnail[0].url}
          />

          <div>
            <h4 className="font-bold">{video.channelTitle}</h4>
            <p className="text-gray-400">{video.subscriberCountText}</p>
          </div>
        </div>

        <button className="bg-white text-black px-3 py-1 sm:py-2 hover:bg-gray-400 transition rounded-full">
          Abone Ol
        </button>
      </div>

      {/* sağ */}
      <div className="flex items-center bg-secondary rounded-full cursor-pointer max-sm:mt-3 max-sm:w-fit">
        <div className="py-1 px-3 sm:py-2 sm:px-4 flex items-center gap-2 font-bold border-r border-gray-500">
          <AiFillLike />
          <span className="text-sm">{millify(video.likeCount)}</span>
        </div>

        <div className="py-1 px-3 sm:py-2 sm:px-6">
          <AiFillDislike />
        </div>
      </div>
    </div>
  );
};

export default Channel;
