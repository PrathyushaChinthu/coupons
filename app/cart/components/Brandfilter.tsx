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
          {/* Assume brands are unique in the data */}
          {data.map((item) => (
            <MenuItem key={item.brand} value={item.brand}>
              {item.brand}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BrandFilter;
