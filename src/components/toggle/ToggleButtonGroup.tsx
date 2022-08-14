import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { createContext, FC, useState } from "react";
import { ToggleButtonGroupProps } from "./Props";
const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    border: "1px solid #9FA7B5",
    display: "flex",
    padding: "5px",
    borderRadius: "5px",
    gap: "5px",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));
interface ToggleContextType {
  value: string;
  onChange: (value: string) => void;
}
export const ToggleContext = createContext<ToggleContextType | null>(null);
export const ToggleButtonGroup: FC<ToggleButtonGroupProps> = ({
  onChange,
  children,
  value,
}) => {
  const classes = useStyles();
  return (
    <ToggleContext.Provider value={{ onChange, value }}>
      <div className={classes.root}>{children}</div>
    </ToggleContext.Provider>
  );
};
