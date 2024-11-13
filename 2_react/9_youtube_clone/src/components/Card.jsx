import millify from "millify";
import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ video, isRow }) => {
  const [isHover, setIsHover] = useState(false);

  // kapak fotoğrafı
  const thumbnail =
    isHover && !video.isLive && video.richThumbnail
      ? video.richThumbnail[0]?.url
      : video.thumbnail[video.thumbnail.length - 1].url;

  // kanal fotoğrafı
  const channelPic = video.channelThumbnail && video.channelThumbnail[0].url;

  return (
    <Link
      className={isRow ? "row" : "col"}
      to={`/watch?v=${video.videoId}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* resim alanı */}
      <div>
        <img className="rounded-lg w-full h-full" src={thumbnail} />
      </div>

      {/* alt detay alanı */}
      <div className="flex gap-4">
        <img className="size-14 rounded-full pp" src={channelPic} />

        <div>
          <h4 className="font-bold line-clamp-2">{video.title}</h4>

          <p>{video.channelTitle}</p>

          <div className="flex gap-3 items-center">
            <p>
              <span>{millify(video.viewCount)}</span>
              <span className="text-sm ms-1 views">Görüntülenme</span>
            </p>
            *
            {video.isLive ? (
              <p className="bg-red-500 py-0.5 px-2 rounded-lg">Canlı</p>
            ) : (
              <p>{video.publishedTimeText}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
