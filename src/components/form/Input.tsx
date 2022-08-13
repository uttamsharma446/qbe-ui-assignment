import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { Theme } from "@mui/material";
const useStyles = makeStyles<Theme>((theme) => {
  const { main } = theme.palette.primary;
  return {
    inputBox: {
      position: "relative",
      width: "100%",
    },
    label: {
      transition: "all .2s",
      fontSize: "16px",
      position: "absolute",
      top: "25px",
      left: "20px",
      lineHeight: "1",
      cursor: "text",
      color: "#c7c7c7",
    },
    input: {
      width: "100%",
      border: "none",
      borderBottom: `2px solid ${main}`,
      outline: "none",
      fontSize: "16px",
      backgroundColor: "#F1F2F4",
      padding: "25px 20px 15px",
      transition: "all 1s",

      "&:focus + $label,&:not(:placeholder-shown)  + $label": {
        top: "8px",
        cursor: "none",
        color: main,
        fontSize: "12px",
      },
    },
    errorInput: {
      borderBottom: "2px solid #A20000",
      "&:focus + $label,&:not(:placeholder-shown)  + $label": {
        color: "#A20000",
      },
    },
    helperText: {
      margin: "8px 0",
      textAlign: "center",
      fontSize: "12px",
      fontWeight: "normal",
      color: main,
      padding: "0 10px",
    },
    error: {
      color: "#A20000",
    },
  };
});
interface InputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  helperText: string;
  isError?: boolean;
  onBlur?: (value: string) => void;
  style?: React.CSSProperties;
}
export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  label,
  helperText,
  isError,
  onBlur,
  style,
}) => {
  const classes = useStyles();
  return (
    <div style={style}>
      <div className={classes.inputBox}>
        {isError && (
          <ReportProblemIcon
            sx={{
              position: "absolute",
              right: "20px",
              top: "25px",
              color: "#A20000",
            }}
          />
        )}
        <input
          id="label"
          onBlur={() => onBlur && onBlur(value)}
          className={`${classes.input} ${isError ? classes.errorInput : ""}`}
          type="text"
          value={value}
          placeholder=""
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
        <label className={`${classes.label} `} htmlFor="label">
          {label}
        </label>
      </div>
      {helperText && (
        <div
          className={`${classes.helperText} ${isError ? classes.error : ""}`}
        >
          {helperText}
        </div>
      )}
    </div>
  );
};
