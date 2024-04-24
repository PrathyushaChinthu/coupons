import React from "react";
import { Box, Card, Typography } from "@mui/material";
import data from "../../dummy-data.json";
import Image from "next/image";

const Cart = ({ id }) => {
  const selectedItem = data.find((item) => item.id === id);

  if (!selectedItem) {
    return null;
  }

  const { title, mrp, asin, image, url, dealPrice, regularPrice } =
    selectedItem;
  const truncatedTitle =
    title.length > 50 ? `${title.substring(0, 50)}...` : title;

  const discountPercentage = Math.round(((mrp - regularPrice) / mrp) * 100);

  return (
    <Box bgcolor="black" mb={2} height="90%">
      <a href={url} style={{ textDecoration: "none", color: "inherit" }}>
        <Card sx={{ p: 2, height: "100%" }}>
          <Typography
            variant="body1"
            sx={{
              display: "inline",
              backgroundColor: "green",
              color: "white",
              padding: "2px 8px",
            }}
          >
            {discountPercentage}% off
          </Typography>
          <Box>
            <Image src={image} alt={title} width={400} height={400} />
          </Box>
          <Typography variant="h6">{truncatedTitle}</Typography>

          <Box display="flex">
            <Typography variant="body1">₹{regularPrice} </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.disabled", marginLeft: 1, marginRight: 1 }}
            >
              <s>₹{mrp}</s>
            </Typography>
            <Typography variant="body1" sx={{ color: "green" }}>
              {discountPercentage}% off
            </Typography>
          </Box>
          <Typography variant="body1">Deal Price: {dealPrice}</Typography>
          <Typography variant="body1">ASIN: {asin}</Typography>
        </Card>
      </a>
    </Box>
  );
};

export default Cart;

// import React from "react";
// import { Box, Card, Typography } from "@mui/material";
// import data from "../../dummy-data.json";
// import Image from "next/image";

// const Cart = ({ id }) => {
//   const selectedItem = data.find((item) => item.id === id);

//   if (!selectedItem) {
//     return null;
//   }

//   const { title, mrp, asin, image, url, dealPrice, regularPrice } =
//     selectedItem;
//   const truncatedTitle =
//     title.length > 50 ? `${title.substring(0, 50)}...` : title;

//   const discountPercentage = Math.round(((mrp - regularPrice) / mrp) * 100);

//   return (
//     <Box bgcolor="black" mb={2} height="90%">
//       <a href={url} style={{ textDecoration: "none", color: "inherit" }}>
//         <Card sx={{ p: 2, height: "100%" }}>
//           <Box>
//             <Typography
//               variant="body1"
//               sx={{
//                 display: "inline",
//                 backgroundColor: "green",
//                 color: "white",
//                 padding: "2px 8px",
//                 marginBottom: "8px",
//               }}
//             >
//               {discountPercentage}% off
//             </Typography>
//             <Image src={image} alt={title} width={400} height={400} />
//           </Box>
//           <Typography variant="h6">{truncatedTitle}</Typography>

//           <Box display="flex">
//             <Typography variant="body1">₹{regularPrice} </Typography>
//             <Typography
//               variant="body1"
//               sx={{ color: "text.disabled", marginLeft: 1, marginRight: 1 }}
//             >
//               <s>₹{mrp}</s>
//             </Typography>
//             <Typography variant="body1" sx={{ color: "green" }}>
//               {discountPercentage}% off
//             </Typography>
//           </Box>
//           <Typography variant="body1">Deal Price: {dealPrice}</Typography>
//           <Typography variant="body1">ASIN: {asin}</Typography>
//         </Card>
//       </a>
//     </Box>
//   );
// };

// export default Cart;
