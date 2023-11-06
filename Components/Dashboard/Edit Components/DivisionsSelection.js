import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ data, setdata, division }) {
  const handleChange = (event) => {
    setdata((prev) => {
      return { ...prev, division: event.target.value };
    });
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Division</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={division}
          label="Division"
          onChange={handleChange}
        >
          {data.map((item) => {
            return <MenuItem value={item.id}>{item.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
