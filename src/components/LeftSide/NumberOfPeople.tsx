import { type NumberOfPeopleProps } from "../../data";
import Box from "../global/Box";
const NumberOfPeople = ({ numPeople, ...props }: NumberOfPeopleProps) => {
  return (
    <Box className="box number-people" {...props}>
      <p>Number of people</p>
      {numPeople ? "" : <p style={{ color: "#f05d5d54" }}>Can't be zero</p>}
    </Box>
  );
};

export default NumberOfPeople;
