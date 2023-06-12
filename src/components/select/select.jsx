import AsyncSelect from "react-select/async";

import "./select.css";

const Select = ({
  value,
  loadOptions,
  onInputChange,
  onChange,
  cacheOptions,
  placeholder,
  isClearable,
}) => {
  return (
    <AsyncSelect
      value={value}
      loadOptions={loadOptions}
      onInputChange={onInputChange}
      onChange={onChange}
      cacheOptions={cacheOptions}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      className="react-select"
      placeholder={placeholder}
      isClearable={isClearable}
      maxMenuHeight={200}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: "grey",
          primary: "black",
        },
      })}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          cursor: "pointer",
        }),
        option: (baseStyles) => ({
          ...baseStyles,
          cursor: "pointer",
        }),
      }}
    />
  );
};

export default Select;
