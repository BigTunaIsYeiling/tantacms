"use client";
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};
export default function Scelection({ data, user, setUser }) {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setUser({ ...user, divisions: value });
  };
  return (
    <FormControl sx={{ m: 1, width: 370 }}>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        displayEmpty
        multiple
        value={user.divisions}
        onChange={handleChange}
        input={<OutlinedInput sx={{ maxHeight: "40px" }} />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <p>All</p>;
          }

          //   return selected.join(", ");
          return data
            .filter((divis) => selected.indexOf(divis.id) > -1)
            .map((divis) => divis.name)
            .join(", ");
        }}
        MenuProps={MenuProps}
      >
        {data.map((divis) => (
          <MenuItem key={divis.id} value={divis.id}>
            <Checkbox checked={user.divisions.indexOf(divis.id) > -1} />
            <ListItemText primary={divis.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
