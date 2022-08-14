import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useContext } from "react";
import { colors } from "../../assets/colors/colors";
import { ToggleButtonProps } from "./Props";
import { ToggleContext } from "./ToggleButtonGroup";
const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    padding: "5px 15px",
    borderRadius: "5px",
    fontSize: "14px",
    display: "flex",
    cursor: "pointer",
    justifyContent: "center",
    transition: "1s",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      flex: "1",
    },
  },
}));
export const ToggleButton: React.FC<ToggleButtonProps> = ({
  children,
  value,
}) => {
  const classes = useStyles();
  const toggleContext = useContext(ToggleContext);
  const activeStyle = {
    backgroundColor: toggleContext?.value === value ? colors.blue : "",
    color: toggleContext?.value === value ? "#ffffff" : colors.blue,
  };
  return (
    <div
      onClick={() => {
        toggleContext?.onChange(value);
      }}
      style={activeStyle}
      className={`${classes.root}`}
    >
      {children}
    </div>
  );
};
