import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelectGroup({ data, setdata, group }) {
  const handleChange = (event) => {
    setdata((prev) => {
      return { ...prev, group: event.target.value };
    });
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Group</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={group}
          label="Group"
          onChange={handleChange}
        >
          {data.map((item) => {
            return <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
