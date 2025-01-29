import { FC } from "react";

// Higher Order Components
// Bir component jsx elementini veya farklı bir component'ı prop olarak aldığı seneryoda HOC'deriz. Prop olarak alınan jsx.elementi children propuyla erişilir
type Props = {
  children: JSX.Element | string;
};

const Warning: FC<Props> = ({ children }) => {
  return (
    <div className="padding-x max-width">
      <p className="home-error-container">{children}</p>
    </div>
  );
};

export default Warning;
