import { type Side } from "../../data";
const LeftSide = ({ children }: Side) => {
  return <section className="left-side">{children}</section>;
};

export default LeftSide;
