import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'

export default function HomeScreen(props) {
    const {navigation} = props;

    const goToSetting = () => {
        navigation.navigate('Settings')
    };


  return (
    <SafeAreaView>
      <Text>We're on HomeScreen</Text>
      <Text>We're on HomeScreen</Text>
      <Text>We're on HomeScreen</Text>
      <Text>We're on HomeScreen</Text>
      <Text>We're on HomeScreen</Text>
      <Text>We're on HomeScreen</Text>
      <Text>We're on HomeScreen</Text>
      <Button title='Go to settings 🥵' onPress={goToSetting}/>
    </SafeAreaView>
  )
}