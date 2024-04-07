import React, { useState } from "react";
import {
  FormControl,
  FilledInput,
  IconButton,
  InputAdornment,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import Description from "./Description";

export default function InputField({ value, aboveMin, type }) {
  const [isMouseHovering, setIsMouseHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseHovering(!isMouseHovering);
  };

  const handleMouseLeave = () => {
    setIsMouseHovering(false);
  };

  return (
    <FormControl variant="filled" fullWidth>
      <FilledInput
        defaultValue={value}
        disabled
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {aboveMin ? (
                <CheckIcon color="success" />
              ) : (
                <ClearIcon color="error" />
              )}
            </IconButton>
          </InputAdornment>
        }
      />
      {isMouseHovering && <Description aboveMin={aboveMin} type={type} />}
    </FormControl>
  );
}
