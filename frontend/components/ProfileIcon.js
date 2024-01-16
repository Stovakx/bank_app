import { View, Text,  TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { person } from '../utils/data';

export default function ProfileIcon() {
    const navigation = useNavigation();

  return (
    <View className="border-2 border-white rounded-full overflow-hidden my-4">
    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <Image
        source={person[0].profilePicture}
        style={{
          width: 45,
          height: 45,
        }}
      />
    </TouchableOpacity>
  </View>
  )
}