import React, { useState } from "react";
import { StyledCheckboxGroup } from "./CheckboxGroup.styled";
import { FormGroup, Checkbox, FormControlLabel } from "@mui/material";
import Text from "../Typography/Text";
const CheckboxGroup = ({ options, setState, state, title, ...props }) => {

  const onInputChange = (event) => {
    if (event.target.checked) {
      
      setState((state) => {
        return  [...state, event.target.value ];
      });
    } else {
      const newArray = state.filter(item => item !== event.target.value);
      setState(newArray);
    }
  };

  return (
    <>
      <StyledCheckboxGroup>
        <Text type="text" margin="1rem 0" color="#000">
          {`Filtrare dupa ${title}`}
        </Text>
        <FormGroup>
          {options.map((name) => {
            return (
              <FormControlLabel
                key={name}
                control={
                  <Checkbox
                    onChange={(e) => {
                      onInputChange(e);
                    }}
                    value={name}
                    defaultChecked
                  />
                }
                label={name}
              />
            );
          })}
        </FormGroup>
      </StyledCheckboxGroup>
    </>
  );
};

export default CheckboxGroup;
