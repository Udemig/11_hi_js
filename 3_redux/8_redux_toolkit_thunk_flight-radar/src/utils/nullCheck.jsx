import { MdOutlineQuestionMark } from "react-icons/md";

const nullCheck = (value, color) => {
  return (
    value || (
      <MdOutlineQuestionMark style={{ color: color }} className="question" />
    )
  );
};

export default nullCheck;
