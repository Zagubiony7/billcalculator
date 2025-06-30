import { type BoxProps } from "../../data";

const Box = ({ children, value, onChange }: BoxProps) => {
  const prevent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={prevent}>
      <label>{children}</label>
      <input type="number" required min={0} value={value} onChange={onChange} />
    </form>
  );
};

export default Box;
