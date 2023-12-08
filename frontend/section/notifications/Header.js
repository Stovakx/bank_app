import { View, Text } from 'react-native'
import React,{useState} from 'react'
import Filters from '../../components/filters'
export default function Header({children }) {
  return (
    /* změnit border-b potom */
    <View className="mt-5 w-full items-center justify-between pb-5 flex-row px-6">
      <View><Text className="text-2xl dark:text-white">Notifications</Text></View>
      <View>{children }</View>
    </View>
  )
}