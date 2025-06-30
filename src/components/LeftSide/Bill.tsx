import { type BillProps } from "../../data";
import Box from "../global/Box";
const Bill = ({ bill, ...props }: BillProps) => {
  return (
    <Box {...props}>
      <p>Bill</p>
      {bill ? "" : <p style={{ color: "#f05d5d54" }}>Can't be zero</p>}
    </Box>
  );
};

export default Bill;
