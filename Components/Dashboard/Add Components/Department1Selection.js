import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function BasicSelectDepartMent1({ data, setdata, department }) {
  const handleChange = (event) => {
    setdata((prev) => {
      return { ...prev, department: event.target.value };
    });
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Department 1</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={department}
          label="Department 1"
          onChange={handleChange}
        >
          <MenuItem value={null}>None</MenuItem>
          {data.map((item) => {
            return <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
