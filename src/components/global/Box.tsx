import { type BoxProps } from "../../data";

const Box = ({ children, ...props }: BoxProps) => {
  return (
    <div className="form">
      <label>{children}</label>
      <input type="number" required min={0} {...props} />
    </div>
  );
};

export default Box;
