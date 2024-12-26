import User from "./user";
import Dropdown from "./dropdown";
import Content from "./content";
import Buttons from "./buttons";

const Post = ({ tweet }) => {
  return (
    <div className="border-b border-fourth p-4 flex gap-2">
      <img
        src={tweet.user.photo}
        alt="profile"
        className="size-12 rounded-full"
      />

      <div className="w-full">
        <div className="flex justify-between">
          <User tweet={tweet} />
          <Dropdown tweet={tweet} />
        </div>

        <Content data={tweet.content} />

        <Buttons tweet={tweet} />
      </div>
    </div>
  );
};

export default Post;
