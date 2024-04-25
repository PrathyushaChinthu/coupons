"use client";
import React, { useState } from "react";
import { Box, MenuItem, FormControl, InputLabel, Select } from "@mui/material";

interface DashboardProps {
  data: any[];
  setSortedData: React.Dispatch<React.SetStateAction<any[]>>; // Function to set sorted data
}

const Dashboard: React.FC<DashboardProps> = ({ data, setSortedData }) => {
  const [sortOrder, setSortOrder] = useState("");

  const handleSort = (order: "asc" | "desc" | "newest") => {
    let sorted;
    switch (order) {
      case "asc":
        sorted = [...data].sort((a, b) => a.dealPrice - b.dealPrice);
        break;
      case "desc":
        sorted = [...data].sort((a, b) => b.dealPrice - a.dealPrice);
        break;
      case "newest":
        sorted = [...data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;
      default:
        sorted = [...data];
    }
    setSortedData(sorted);
    setSortOrder(order);
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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

export default Dashboard;
