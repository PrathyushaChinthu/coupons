import React from "react";
import data from "../dummy-data.json";
import { Box } from "@mui/material";
import Cart from "./cart/page";
const page = () => {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Box
      bgcolor="white"
      p={2}
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
    >
      {ids.map((id) => (
        <Box key={id} width="calc(25% - 16px)" mb={2}>
          <Cart id={id} />
        </Box>
      ))}
    </Box>
  );
};

export default page;

// import React from "react";

// import Coupons from "./coupons/page";
// import { Box } from "@mui/material";

// const page = () => {
//   return (
//     <Box>
//       <Coupons />
//     </Box>
//   );
// };

// export default page;
