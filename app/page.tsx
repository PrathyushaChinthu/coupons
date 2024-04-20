"use client";
import React, { useState } from "react";
import {
  Box,
  AppBar,
  Popover,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
} from "@mui/material";
import faker from "faker";

const couponsData = [
  {
    id: 1,
    title: "Savings! Buy 1, get 5%",
    description: faker.lorem.words(50),
    image: "/images/image_1.jpg",
  },
  {
    id: 2,
    title: "Savings! Buy 2, get 10%",
    description: faker.lorem.words(50),
    image: "/images/image_2.jpg",
  },
  {
    id: 3,
    title: "Savings! Buy 3, get 15%",
    description: faker.lorem.words(50),
    image: "/images/image_3.jpg",
  },
];

const HomePage = () => {
  const [coupons, setCoupons] = useState(couponsData);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "redeem-popover" : undefined;

  return (
    <Box width="100%">
      {" "}
      {/* Ensure that the content spans the full width */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Coupon Website</Typography>
        </Toolbar>
      </AppBar>
      <Box bgcolor="lightpink" width="100%">
        {" "}
        {/* Ensure that the pink box spans the full width */}
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Available Coupons
          </Typography>
          <Grid container spacing={2}>
            {coupons.map((coupon) => (
              <Grid item key={coupon.id} xs={12}>
                <Card sx={{ display: "flex", marginBottom: 2 }}>
                  <Box sx={{ minWidth: "30%" }}>
                    <CardMedia
                      component="img"
                      height="200"
                      src={coupon.image}
                      alt="Coupon Image"
                      style={{ width: "100%" }}
                    />
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <CardContent>
                      <Typography variant="h5">{coupon.title}</Typography>
                      <Typography variant="body1">
                        {coupon.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        aria-describedby={id}
                        onClick={handleClick}
                        variant="contained"
                        size="small"
                        color="primary"
                      >
                        Redeem
                      </Button>
                      <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                      >
                        <Typography style={{ padding: 2 }}>
                          Click to copy
                        </Typography>
                      </Popover>
                    </CardActions>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;

// "use client";
// import React, { useState } from "react";
// import {
//   Box,
//   AppBar,
//   Button,
//   Container,
//   Grid,
//   Toolbar,
//   Typography,
//   Card,
//   CardContent,
//   CardActions,
//   CardMedia,
// } from "@mui/material";
// import faker from "faker";

// const couponsData = [
//   {
//     id: 1,
//     title: "Savings! Buy 1, get 5%",
//     description: faker.lorem.words(50),
//     image: "/images/image_1.jpg",
//   },
//   {
//     id: 2,
//     title: "Savings! Buy 2, get 10%",
//     description: faker.lorem.words(50),
//     image: "/images/image_2.jpg",
//   },
//   {
//     id: 3,
//     title: "Savings! Buy 3, get 15%",
//     description: faker.lorem.words(50),
//     image: "/images/image_3.jpg",
//   },
// ];

// const HomePage = () => {
//   const [coupons, setCoupons] = useState(couponsData);

//   return (
//     <Box>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6">Coupon Website</Typography>
//         </Toolbar>
//       </AppBar>
//       <Container>
//         <Typography variant="h4" align="center" gutterBottom>
//           Available Coupons
//         </Typography>
//         <Grid container spacing={2}>
//           {coupons.map((coupon) => (
//             <Grid item key={coupon.id} xs={12}>
//               <Card sx={{ marginBottom: 2 }}>
//                 <CardMedia
//                   component="img"
//                   height="100"
//                   src={coupon.image}
//                   alt="Coupon Image"
//                   style={{ width: "20%" }} // Adjust width as needed
//                 />
//                 <CardContent>
//                   <Typography variant="h5">{coupon.title}</Typography>
//                   <Typography variant="body1">{coupon.description}</Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button size="small" color="primary">
//                     Redeem
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default HomePage;
