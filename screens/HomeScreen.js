import { View, Text, SafeAreaView, TextInput, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import img2 from '../assets/PromoAdvertising.png'
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
     
    const navigation = useNavigation();

    useLayoutEffect (() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

  return (
    <View>
        <SafeAreaView>
            <View className="mt-5 ml-5 flex flex-row justify-between">
                <View className="mt-5">
                <Text className="text-2xl">Find Your</Text>
                <Text className="text-2xl">Favorite Food</Text>
                </View>
                <View>
                <Icon name="notifications" className="mx-10 mt-5 text-3xl text-yellow-400" />
                </View>
            </View>
            <View className="ml-5 mt-4">
                <TextInput className="bg-white w-[70%] h-10 p-2 rounded-lg" placeholder='Search'></TextInput>
            </View>
            <View className="items-center flex justify-center">
                <Image className=" mt-5 text-center" source={img2}></Image>
            </View>
        </SafeAreaView>
    </View>
  )
}

export default HomeScreen