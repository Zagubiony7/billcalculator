import Box from "../global/Box";

const NumberOfPeople = ({ ...props }) => {
  return (
    <Box className="box number-people" {...props}>
      Number of People
    </Box>
  );
};

export default NumberOfPeople;
