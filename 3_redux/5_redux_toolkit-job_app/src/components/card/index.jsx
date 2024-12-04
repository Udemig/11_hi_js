import { FaCalendar, FaSuitcase } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import "./card.scss";
import DelButton from "./DelButton";

const Card = ({ job }) => {
  const colors = {
    Reddedildi: "red",
    "Devam Ediyor": "orange",
    Mülakat: "green",
  };

  console.log();

  return (
    <div className="card">
      <section className="head">
        <div className="letter">
          <span>{job.company[0]}</span>
        </div>

        <div className="info">
          <p>{job.position}</p>
          <p>{job.company}</p>
        </div>

        <div>
          <DelButton id={job.id} />
        </div>
      </section>

      <section className="body">
        <div className="field">
          <MdLocationPin />
          <p>{job.location}</p>
        </div>

        <div className="field">
          <FaSuitcase />
          <p>{job.type}</p>
        </div>

        <div className="field">
          <FaCalendar />
          <p>
            {new Date(job.date).toLocaleDateString("tr", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="status">
          <p style={{ background: colors[job.status] }}>
            {job.status}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Card;
