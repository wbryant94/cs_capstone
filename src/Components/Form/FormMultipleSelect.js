import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, countryName, theme) {
  return {
    fontWeight:
      countryName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect(props) {
  const countryNames = props.countries;
  let countryList = [...new Set(countryNames)];
  const theme = useTheme();

  return (
    <div>
      <FormControl sx={{ m: 1, width: 150}}>
        <InputLabel id="demo-multiple-name-label">Country List</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          required
          multiple
          value={[...props.countryName]}
          onChange={props.onChange}
          input={<OutlinedInput label="Country" />}
          MenuProps={MenuProps}
        >
          {countryList.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, props.countryName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
