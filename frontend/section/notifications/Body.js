import { View, Text, FlatList } from 'react-native'
import React from 'react'
import NotificationCard from '../../components/NotificationCard'

export default function Body() {
  return (
    <View className=" pt-4 h-10 bg-blend-lighten w-full flex justify-center items-center shadow-black shadow-xl ">
      <View>
        <Text className="text-xl dark:text-white ">The Newest Notifications</Text>
      </View>
      <View className="bg-black dark:bg-white w-full h-1 my-2"/>
{/*       <FlatList 
        data={allData}
        keyExtractor={((item)=> item.name)}
        initialNumToRender={20}
        contentContainerStyle={{ paddingBottom: 150 }}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="h-4" />}
        renderItem={({ item }) => <NotificationCard {...item} />}
      /> */}

    </View>
  )
}