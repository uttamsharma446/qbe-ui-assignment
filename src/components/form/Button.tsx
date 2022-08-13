import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { MouseEvent } from "react";
const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    padding: "12px",
    fontSize: "14px",
    borderRadius: "100px",
    border: "none",
    cursor: "pointer",
    fontWeight: "normal",
    color: theme.palette.primary.main,
    transition: "all 0.5s",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.light,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
}));

interface ButtonProps {
  name?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  // onClick?:((event: MouseEvent<T, globalThis.MouseEvent>) => void)
}
export const Button: React.FC<ButtonProps> = ({ children, name }) => {
  const classes = useStyles();
  return (
    <button onClick={(e) => {}} className={classes.root}>
      {children || name}
    </button>
  );
};
