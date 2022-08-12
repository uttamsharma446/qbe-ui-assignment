import { makeStyles } from "@mui/styles";
import React, { MouseEvent } from "react";
const useStyles = makeStyles(() => ({
  root: {
    padding: "12px",
    fontSize: "14px",
    borderRadius: "100px",
    border: "none",
    cursor: "pointer",
    fontWeight: "normal",
    color: "#42526F",
    transition: "all 0.5s",
    "&:hover": {
      backgroundColor: "#1F3254",
      color: "#FFFFFF",
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
