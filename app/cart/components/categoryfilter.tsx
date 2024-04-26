import React, { useState } from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface CategoryFilterProps {
  categoryFilters: string[];
  setCategoryFilters: (value: string[]) => void;
  data: any[];
}

const CategoryFilter = ({
  categoryFilters,
  setCategoryFilters,
  data,
}: CategoryFilterProps) => {
  // Extract unique categories from the data (store in a separate state)
  const [allCategories, setAllCategories] = useState([
    ...new Set(data.map((item) => item.category)),
  ]);

  const handleCategoryChange = (category: string) => {
    const updatedFilters = [...categoryFilters];
    const index = updatedFilters.indexOf(category);

    if (index > -1) {
      updatedFilters.splice(index, 1); // Remove category from filter if checked
    } else {
      updatedFilters.push(category); // Add category to filter if unchecked
    }

    setCategoryFilters(updatedFilters); // Update the filter state
  };

  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Category Filter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {allCategories.map((category) => (
              <FormControlLabel
                key={category}
                control={
                  <Checkbox
                    checked={categoryFilters.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                }
                label={category}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CategoryFilter;

// "use client";
// import React, { useState } from "react";
// import {
//   Box,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Select,
//   Checkbox,
//   ListItemText,
// } from "@mui/material";

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
//   const [isOpen, setIsOpen] = useState(false);

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
//           onOpen={() => setIsOpen(true)}
//           onClose={() => setIsOpen(false)}
//         >
//           {uniqueCategory.map((category) => (
//             <MenuItem key={category} value={category}>
//               {isOpen && (
//                 <Checkbox
//                   defaultChecked
//                   checked={categoryFilter.includes(category)}
//                 />
//               )}
//               <ListItemText primary={category} />
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </Box>
//   );
// };

// export default CategoryFilter;
