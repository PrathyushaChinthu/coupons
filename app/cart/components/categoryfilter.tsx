"use client";
import React, { useState } from "react";
import {
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  ListItemText,
} from "@mui/material";

interface CategoryFilterProps {
  categoryFilter: string;
  setCategoryFilter: (value: string) => void;
  data: any[];
}

const CategoryFilter = ({
  categoryFilter,
  setCategoryFilter,
  data,
}: CategoryFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Extract unique category from the data
  const uniqueCategory = Array.from(new Set(data.map((item) => item.category)));

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="category-filter-label">Category Filter</InputLabel>
        <Select
          label="Category Filter"
          id="category-filter"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value as string)}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
        >
          {uniqueCategory.map((category) => (
            <MenuItem key={category} value={category}>
              {isOpen && (
                <Checkbox
                  defaultChecked
                  checked={categoryFilter.includes(category)}
                />
              )}
              <ListItemText primary={category} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CategoryFilter;

// import React from "react";
// import { Box, MenuItem, FormControl, InputLabel, Select } from "@mui/material";

// interface CategoryFilterProps {
//   categoryFilter: string;
//   setCategoryFilter: (value: string) => void;
//   data: any[];
// }

// const CategoryFilter = ({
//   categoryFilter,
//   setCategoryFilter,
//   data,
// }: CategoryFilterProps) => {
//   // Extract unique category from the data

//   const uniqueCategory = Array.from(new Set(data.map((item) => item.category)));
//   return (
//     <Box>
//       <FormControl fullWidth>
//         <InputLabel id="category-filter-label">Category Filter</InputLabel>
//         <Select
//           label="Category Filter"
//           id="category-filter"
//           value={categoryFilter}
//           onChange={(e) => setCategoryFilter(e.target.value as string)}
//         >
//           <MenuItem value="">All</MenuItem>
//           {uniqueCategory.map((category) => (
//             <MenuItem key={category} value={category}>
//               {category}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </Box>
//   );
// };

// export default CategoryFilter;
