import React, { CSSProperties } from "react";

import Select from "react-select";

interface Option {
  label: string;
  value: string;
}

const options = [
  { label: "Organizar por", value: "chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default () => (
  <Select
    styles={{
      control(base, props) {
        return {
          ...base,
          backgroundColor: "transparent",
          border: 0,
          "::selected": {
            border: 0,
          },
        };
      },
    }}
    defaultValue={options[1]}
    options={options}
    formatOptionLabel={({ label, value }) => (
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
          alignItems: "center",
          width: 200,
          fontSize: 14,
        }}
      >
        <span>{label}</span>
      </div>
    )}
  />
);
