import moment from "moment";
import { MdEdit } from "react-icons/md";

const User = ({ tweet }) => {
  // kullanıcı ismi oluştur
  const username = tweet.user.name.toLowerCase().replaceAll(" ", "_");

  // tarihi object veri formatına çevirdik
  let date = tweet.createdAt?.toDate();

  // gönderi tarihinin şuanın tarihinden uzaklığınıı hesapla
  date = moment(date).fromNow(true);

  return (
    <div className="flex gap-2 items-center whitespace-nowrap text-gray-400">
      <p className="text-white font-semibold">{tweet.user.name}</p>
      <p className="text-sm">@{username}</p>
      <p className="text-sm">{date}</p>

      {tweet.isEdited && (
        <p>
          <MdEdit className="md:hidden" />
          <span className="max-md:hidden text-xs">* düzenlendi</span>
        </p>
      )}
    </div>
  );
};

export default User;
