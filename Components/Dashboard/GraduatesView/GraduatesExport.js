"use client";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  FormControlLabel,
  Stack,
} from "@mui/material";
import { useState } from "react";
import exportFromJSON from "export-from-json";
import { useSelector } from "react-redux";
import { Filters, order, sort } from "@/Lib/FiltersSlices/GraduatesSlice";
export default function ExportData({ data }) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [filename, setfileName] = useState("");
  const SortType = useSelector(sort);
  const OrderType = useSelector(order);
  const filtersOption = useSelector(Filters);
  const [ExportedFields, SetExported] = useState({
    name: true,
    division: true,
    gpa: true,
    total_mark: true,
    year: true,
    semester: true,
  });
  const handleClick = (e) => {
    SetExported({ ...ExportedFields, [e.target.name]: e.target.checked });
  };
  return (
    <>
      <Button
        sx={{
          alignSelf: "flex-end",
          fontWeight: "500",
          textTransform: "none",
          color: "white",
          backgroundColor: "#fb5c25",
          ":hover": {
            backgroundColor: "#fb5c25",
          },
        }}
        onClick={handleClickOpen}
      >
        Export Data
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Stack direction={"column"} padding={"3rem"}>
          <Box
            fontSize={"22px"}
            fontWeight={600}
            whiteSpace="nowrap"
            alignSelf={"center"}
            marginBottom={2}
            marginTop={3}
          >
            Export Data
          </Box>
          <Box
            component={"input"}
            autoCorrect={"false"}
            marginY={"1rem"}
            paddingY={"10px"}
            paddingX="8px"
            sx={{
              outline: "0",
              border: "0",
              ":focus": {
                boxShadow: " rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
              },
              borderRadius: "3px",
              fontWeight: 400,
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
            placeholder={"File Name"}
            value={filename}
            onChange={(e) => setfileName(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox checked={ExportedFields.name} />}
            label="Name"
            name="name"
            onChange={handleClick}
          />
          <FormControlLabel
            control={<Checkbox checked={ExportedFields.division} />}
            label="Division"
            name="division"
            onChange={handleClick}
          />
          <FormControlLabel
            control={<Checkbox checked={ExportedFields.gpa} />}
            label="GPA"
            name="gpa"
            onChange={handleClick}
          />
          <FormControlLabel
            control={<Checkbox checked={ExportedFields.total_mark} />}
            label="Total mark"
            name="total_mark"
            onChange={handleClick}
          />
          <FormControlLabel
            control={<Checkbox checked={ExportedFields.semester} />}
            label="Semester"
            name="semester"
            onChange={handleClick}
          />
          <FormControlLabel
            control={<Checkbox checked={ExportedFields.year} />}
            label="Year"
            name="year"
            onChange={handleClick}
          />
          <Button
            sx={{
              alignSelf: "flex-end",
              fontWeight: "500",
              textTransform: "none",
              color: "white",
              backgroundColor: "#fb5c25",
              ":hover": {
                backgroundColor: "#fb5c25",
              },
            }}
            onClick={() => {
              if (filename.trim() === "") {
                return alert("Please enter file name");
              }
              exportFromJSON({
                data: data
                  .filter((row) =>
                    row.name.toLowerCase().includes(filtersOption.name)
                  )
                  .filter((row) =>
                    filtersOption.year.length < 4
                      ? row
                      : row.year == filtersOption.year
                  )
                  .filter((stu) => {
                    if (filtersOption.division.length === 0) return true;
                    if (
                      filtersOption.division.includes(
                        stu.division ? stu.division.name : stu.group.name
                      )
                    )
                      return true;
                    return false;
                  })
                  .filter((stu) => {
                    if (filtersOption.month.length === 0) return true;
                    if (filtersOption.month.includes(stu.semester.toString()))
                      return true;
                    return false;
                  })
                  .sort((a, b) => {
                    return (
                      SortType === "id" &&
                      (OrderType === "asc" ? a.id - b.id : b.id - a.id)
                    );
                  })
                  .sort((a, b) => {
                    return (
                      SortType === "mark" &&
                      (OrderType === "asc"
                        ? a.total_mark - b.total_mark
                        : b.total_mark - a.total_mark)
                    );
                  })
                  .sort((a, b) => {
                    return (
                      SortType === "gpa" &&
                      (OrderType === "asc" ? a.gpa - b.gpa : b.gpa - a.gpa)
                    );
                  })
                  .filter((row, index) => {
                    if (filtersOption.limit === "") return true;
                    return index < Number(filtersOption.limit);
                  })
                  //remove the unchecked fields
                  .map((row) => {
                    let newRow = {};
                    if (ExportedFields.name) newRow.name = row.name;
                    if (ExportedFields.division)
                      newRow.division = row.division
                        ? row.division.name
                        : row.group.name;
                    if (ExportedFields.gpa) newRow.gpa = row.gpa;
                    if (ExportedFields.total_mark)
                      newRow.total_mark = row.total_mark;
                    if (ExportedFields.semester && row.semester == 1)
                      newRow.semester = "يناير";
                    if (ExportedFields.semester && row.semester == 2)
                      newRow.semester = "يونيو";
                    if (ExportedFields.semester && row.semester == 3)
                      newRow.semester = "الترم الصيفي";
                    if (ExportedFields.year) newRow.year = row.year;
                    return newRow;
                  }),
                fileName: filename,
                exportType: exportFromJSON.types.csv,
              });
            }}
          >
            Export
          </Button>
        </Stack>
      </Dialog>
    </>
  );
}
