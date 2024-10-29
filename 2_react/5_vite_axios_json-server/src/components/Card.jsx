import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const Card = ({ contact }) => {
  // isim ve soyisimi ayrı değişkenlere atıyoruz
  const [name, surname] = contact.name.split(" ");

  return (
    <div className="card">
      <h1>
        {name[0]} {surname[0]}
      </h1>

      <h3>{contact.name}</h3>
      <p>{contact.position}</p>
      <p>{contact.company}</p>

      <div className="bottom">
        <div>
          <span>
            <FaPhone />
          </span>
          <span>{contact.phone}</span>
        </div>

        <div>
          <span>
            <MdMail />
          </span>
          <span>{contact.email}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
