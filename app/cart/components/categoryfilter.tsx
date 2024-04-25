// CategoryFilterComponent.tsx
import React from "react";
import { Box, MenuItem, FormControl, InputLabel, Select } from "@mui/material";

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
  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="category-filter-label">Category Filter</InputLabel>
        <Select
          label="Category Filter"
          id="category-filter"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value as string)}
        >
          <MenuItem value="">All</MenuItem>
          {/* Assume categories are unique in the data */}
          {data.map((item) => (
            <MenuItem key={item.category} value={item.category}>
              {item.category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CategoryFilter;
