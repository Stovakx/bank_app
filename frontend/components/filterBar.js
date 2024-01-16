import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { StyledText } from "../styles";
import React from "react";

const FilterBar = ({ onSelectFilter, filters }) => {
  return (
    <View classname="flex-col space-y-1">
      <StyledText>Filters</StyledText>
      <View classname="flex-row justify-between">
{/*         <Picker
          selectedValue={filters.year}
          onValueChange={(value) => onSelectFilter("year", value)}
        ></Picker> */}
      </View>
      <View classname="flex-row justify-between"></View>
    </View>
  );
};

export default FilterBar;
