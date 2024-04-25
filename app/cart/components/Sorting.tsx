import React from "react";
import { Box, MenuItem, FormControl, InputLabel, Select } from "@mui/material";

interface SortingProps {
  sortOrder: string;
  handleSort: (order: "asc" | "desc" | "newest") => void;
}

const Sorting = ({ sortOrder, handleSort }: SortingProps) => {
  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select
          label="Sort by"
          id="sort-select"
          value={sortOrder}
          onChange={(e) =>
            handleSort(e.target.value as "asc" | "desc" | "newest")
          }
        >
          <MenuItem value="asc">Price - Low to high</MenuItem>
          <MenuItem value="desc">Price - High to low</MenuItem>
          <MenuItem value="newest">Newest</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Sorting;
