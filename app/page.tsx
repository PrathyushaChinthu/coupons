"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Cart from "./cart/page";
import Dashboard from "./cart/Dashboard";
import data from "../dummy-data.json";
const Page = () => {
  const [sortedData, setSortedData] = useState(data);

  return (
    <Box display="flex">
      <Box width="20%">
        <Dashboard data={sortedData} setSortedData={setSortedData} />
      </Box>
      <Box width="80%">
        <Box
          bgcolor="white"
          p={2}
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          {sortedData.map((item) => (
            <Box key={item.id} width="calc(25% - 16px)" mb={2}>
              <Cart id={item.id} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Page;

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
