import { FC } from "react";
import { Shoe } from "../../types";

interface Props {
  item: Shoe;
}

const Images: FC<Props> = ({ item }) => {
  return (
    <div className="grid grid-cols-2 gap-4 rounded-[48px] h-fit">
      {item.picture.map((url, key) => (
        <img key={key} src={url} />
      ))}
    </div>
  );
};

export default Images;
