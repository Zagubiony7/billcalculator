import type { ButtonProps } from "../../data";

export const MyButton = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};
