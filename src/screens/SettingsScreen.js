import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'

export default function SettingsScreen(props) {
    const {navigation} = props;

    const goToSetting = () => {
        navigation.navigate('Home')
    };

  return (
    <SafeAreaView>
      <Text>We're on SettingsScreen</Text>
      <Text>We're on SettingsScreen</Text>
      <Text>We're on SettingsScreen</Text>
      <Text>We're on SettingsScreen</Text>
      <Text>We're on SettingsScreen</Text>
      <Text>We're on SettingsScreen</Text>
      <Text>We're on SettingsScreen</Text>
      <Text>We're on SettingsScreen</Text>
      <Button title='Go to Home putito 😈' onPress={goToSetting} />
    </SafeAreaView>
  )
}