import React, { useState } from "react";
import { Input } from "../components/form/Input";
import { Toggle } from "../components/toggle/Toggle";
import { InfoOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Button } from "../components/form/Button";
import { Typography } from "../components/typography/Typography";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  inputDetails: {
    marginTop: "40px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
}));
export const UserDetails = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState<string>("");
  const [toggleValue, setToggleValue] = useState("Registeration number");
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <div className={classes.root}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Toggle
          firstLabel="Registeration number"
          secondLabel="Postcode"
          value={toggleValue}
          onChange={setToggleValue}
        />
      </div>

      <div className={classes.inputDetails}>
        <Typography variant="h2" className="text-center">
          {toggleValue === "Postcode"
            ? `What's your postcode?`
            : "What's your vechical registration number?"}
          <InfoOutlined />
        </Typography>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Input
            style={{ width: "350px" }}
            value={inputValue}
            onChange={(value) => {
              setInputValue(value);

              setIsError(false);
            }}
            helperText={
              toggleValue === "Postcode"
                ? "Please enter the postcode where your car is garaged"
                : "Please enter the registration of insured vehicle"
            }
            onBlur={(value) => {
              const regx = new RegExp("^[0-9]+$");

              if (value.length > 0 && !regx.test(value)) {
                setIsError(true);
              }
            }}
            label={toggleValue}
            isError={isError}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          <Button>Countinue</Button>
        </div>
      </div>
    </div>
  );
};
