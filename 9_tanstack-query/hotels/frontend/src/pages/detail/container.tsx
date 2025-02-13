import { FC, JSX } from "react";
import Return from "./return";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Container: FC<Props> = ({ children }) => {
  return (
    <div className="container">
      <Return />

      {children}
    </div>
  );
};

export default Container;
