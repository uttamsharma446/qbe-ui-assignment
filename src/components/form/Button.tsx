import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { MouseEvent } from "react";
const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    padding: "16px 28px",
    fontSize: "16px",
    borderRadius: "100px",
    border: "none",
    cursor: "pointer",
    fontWeight: "normal",
    textTransform: "capitalize",
    color: theme.palette.primary.main,
    transition: "all 0.5s",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.light,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      padding: "12px 16px",
    },
  },
}));

interface ButtonProps {
  name?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}
export const Button: React.FC<ButtonProps> = ({ children, name, onClick }) => {
  const classes = useStyles();
  return (
    <button onClick={(e) => onClick && onClick()} className={classes.root}>
      {children || name}
    </button>
  );
};
