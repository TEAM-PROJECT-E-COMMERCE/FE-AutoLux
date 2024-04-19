import { Box, Heading } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

const ListBrands = () => {
  return (
    <Box
      bg={"black"}
      p={4}
      color={"white"}
      mb={10}
      justifyContent={"center"}
      display={"flex"}
      gap={10}
    >
      <Marquee gradient={false} speed={100}>
        <Heading fontFamily={"abril"}>Toyota Volkswagensaya Honda Hyundai Ford Nissan Chevrolet Kia BMW </Heading>
      </Marquee>
    </Box>
  );
};

export default ListBrands;
