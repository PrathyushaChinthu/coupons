import React from "react";
import { Box, MenuItem, FormControl, InputLabel, Select } from "@mui/material";

interface BrandFilterProps {
  brandFilter: string;
  setBrandFilter: (value: string) => void;
  data: any[];
}

const BrandFilter = ({
  brandFilter,
  setBrandFilter,
  data,
}: BrandFilterProps) => {
  // Extract unique brands from the data
  const uniqueBrand = Array.from(new Set(data.map((item) => item.brand)));

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="brand-filter-label">Brand Filter</InputLabel>
        <Select
          label="Brand Filter"
          id="brand-filter"
          value={brandFilter}
          onChange={(e) => setBrandFilter(e.target.value as string)}
        >
          <MenuItem value="">All</MenuItem>
          {/* Render unique brands */}
          {uniqueBrand.map((brand) => (
            <MenuItem key={brand} value={brand}>
              {brand}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BrandFilter;

// import React from "react";
// import { Box, MenuItem, FormControl, InputLabel, Select } from "@mui/material";

// interface BrandFilterProps {
//   brandFilter: string;
//   setBrandFilter: (value: string) => void;
//   data: any[];
// }

// const BrandFilter = ({
//   brandFilter,
//   setBrandFilter,
//   data,
// }: BrandFilterProps) => {
//   // Extract unique brands from the data
//   const uniqueBrand = [...new Set(data.map((item) => item.brand))];

//   return (
//     <Box>
//       <FormControl fullWidth>
//         <InputLabel id="brand-filter-label">Brand Filter</InputLabel>
//         <Select
//           label="Brand Filter"
//           id="brand-filter"
//           value={brandFilter}
//           onChange={(e) => setBrandFilter(e.target.value as string)}
//         >
//           <MenuItem value="">All</MenuItem>
//           {/* Render unique brands */}
//           {uniqueBrand.map((brand) => (
//             <MenuItem key={brand} value={brand}>
//               {brand}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </Box>
//   );
// };

// export default BrandFilter;
