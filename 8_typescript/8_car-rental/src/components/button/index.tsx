import { FC } from "react";

type Props = {
  text: string;
  designs?: string;
  disabled?: boolean;
  type?: "submit" | "button";
  handleClick?: () => void;
};

const Button: FC<Props> = ({ text, designs, disabled, type, handleClick }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={`custom-btn ${designs}`}
    >
      {text}
    </button>
  );
};

export default Button;
