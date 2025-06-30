import Box from "../global/Box";
import iconDollar from "../../assets/icons/icon-dollar.svg";

const Bill = ({ ...props }) => {
  return (
    <Box {...props} icon={iconDollar}>
      Bill
    </Box>
  );
};

export default Bill;
