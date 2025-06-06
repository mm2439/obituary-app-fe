import React from "react";
import Select from "react-select";
import regionsAndCities from "@/utils/regionAndCities";

const DropdownWithCustomDesign = ({
  placeholder,
  onSelectRegion,
  onSelectCity,
  selectedRegion,
  selectedCity,
  isDisabled = false,
}) => {
  const flattenedOptions = Object.keys(regionsAndCities)
    .flatMap((region) =>
      regionsAndCities[region].map((city) => ({
        label: city,
        value: city,
        region,
      }))
    )
    .sort((a, b) => a.label.localeCompare(b.label, "sl"));

  const handleChange = (selected) => {
    if (selected) {
      const selectedRegion = selected.region;
      const selectedCity = selected.value;

      if (onSelectRegion) {
        onSelectRegion(selectedRegion);
      }
      if (onSelectCity) {
        onSelectCity(selectedCity);
      }
    } else {
      if (onSelectRegion) {
        onSelectRegion(null);
      }
      if (onSelectCity) {
        onSelectCity(null);
      }
    }
  };

  return (
    <div className="w-full mx-auto">
      <Select
        options={flattenedOptions} // Use flattened options without grouping
        onChange={handleChange}
        value={
          selectedCity
            ? flattenedOptions.find((option) => option.value === selectedCity)
            : null
        }
        placeholder={placeholder || ""}
        isSearchable
        filterOption={(option, inputValue) =>
          option.label.toLowerCase().startsWith(inputValue.toLowerCase())
        }
        isDisabled={isDisabled}
        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: "#f1fffe",
            border: "1px solid #d4d4d4", // Light gray border
            boxShadow: "none", // Remove default shadow
            borderRadius: "4px",
            "&:hover": { borderColor: "#105ccf" }, // Change border on hover
            minHeight: "36px", // Match the dropdown height in the image
          }),
          dropdownIndicator: (base) => ({
            ...base,
            color: "#7d7d7d", // Arrow color
            "&:hover": { color: "#808080" }, // Arrow hover color
          }),
          indicatorSeparator: () => ({
            display: "none", // Remove the separator line
          }),
          menu: (base) => ({
            ...base,
            borderRadius: "4px", // Rounded menu
            marginTop: "2px", // Minimal gap
            zIndex: 10,
          }),
          option: (base, { isFocused }) => ({
            ...base,
            backgroundColor: isFocused ? "#e8f5f4" : "#fff", // Highlight on hover
            color: "#333", // Text color
            cursor: "pointer",
          }),
          singleValue: (base) => ({
            ...base,
            color: "#105CCF",
            fontSize: "18px",
          }),
        }}
      />
    </div>
  );
};

export default DropdownWithCustomDesign;
