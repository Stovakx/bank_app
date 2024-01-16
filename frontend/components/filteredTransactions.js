import { View, FlatList, Text, } from "react-native";
import React from "react";

//TODO: přidělat TouchableOpacity a být možno rozkliknout DetailScreen? 
const FilteredTransactions = ({ data }) => {
    
  return (
    <View className="my-2">
      <FlatList
        className="mt-3"
        data={data}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={<View className="h-4"/>}
        renderItem={({ item }) => (
          <View className="space-y-2">
            <View className="rounded-3xl py-8 px-4 mx-3 justify-between flex-row items-center bg-[#e5e5e5] shadow-sm">
              <Text>{item.amount}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default FilteredTransactions;
