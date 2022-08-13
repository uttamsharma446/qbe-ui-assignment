import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { ReactNode } from "react";
import { TypographyProps } from "./Props";
const useStyles = makeStyles<Theme>((theme) => ({
  h1: {
    color: theme.palette.primary.main,
    fontSize: "18px",
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  h2: {
    color: theme.palette.primary.main,
    fontSize: "16px",
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  p: {
    color: theme.palette.primary.main,
    fontSize: "16px",
    fontWeight: 400,
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
}));

export const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  children,
  text,
  className,
  style,
}) => {
  const classes = useStyles();
  if (variant === "h1")
    return (
      <h1 style={style} className={`${classes.h1} ${className}`}>
        {children || text}
      </h1>
    );
  if (variant === "h2")
    return (
      <h2 style={style} className={`${classes.h2} ${className}`}>
        {children || text}
      </h2>
    );
  return (
    <p style={style} className={`${classes.p} ${className}`}>
      {children || text}
    </p>
  );
};
