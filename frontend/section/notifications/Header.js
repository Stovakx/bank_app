import { View, Text } from 'react-native'
import React from 'react'
import ProfileIcon from '../../components/ProfileIcon'
import CloseBtn  from '../../components/CloseBtn'

export default function Header({ }) {
  return (
    /* změnit border-b potom */
    <View className="mt-8 w-full items-center justify-between pb-5 flex-row px-6">
      <View className="flex-row items-center justify-between space-x-5">
      <CloseBtn  />
      <ProfileIcon/>
      </View>
      <View><Text className="text-2xl dark:text-white">Notifications</Text></View>
    </View>
  )
}