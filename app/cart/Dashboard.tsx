// Dashboard.tsx
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Sorting from "./components/Sorting";
import BrandFilter from "./components/Brandfilter";
import CategoryFilter from "./components/categoryfilter";

interface DashboardProps {
  data: any[]; // Assuming data is passed as prop
  setSortedData: (sortedData: any[]) => void; // Function to set sorted data
}

const Dashboard = ({ data, setSortedData }: DashboardProps) => {
  const [sortOrder, setSortOrder] = useState<string>("");
  const [brandFilter, setBrandFilter] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");

  useEffect(() => {
    applyFilters();
  }, [brandFilter, categoryFilter]); // Listen for changes in brandFilter and categoryFilter

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
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      default:
        sorted = [...data];
    }
    setSortedData(sorted);
    setSortOrder(order);
  };

  const applyFilters = () => {
    let filteredData = [...data];

    if (brandFilter) {
      filteredData = filteredData.filter((item) => item.brand === brandFilter);
    }

    if (categoryFilter) {
      filteredData = filteredData.filter(
        (item) => item.category === categoryFilter
      );
    }

    setSortedData(filteredData);
  };

  return (
    <Box
      py={5}
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box py={2} px={2}>
        <Sorting sortOrder={sortOrder} handleSort={handleSort} />
      </Box>
      <Box py={2} px={2}>
        <BrandFilter
          brandFilter={brandFilter}
          setBrandFilter={setBrandFilter}
          data={data}
        />
      </Box>
      <Box py={2} px={2}>
        <CategoryFilter
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          data={data}
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
