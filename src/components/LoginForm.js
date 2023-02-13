import { TextInput, Button, View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function LoginForm() {
  return (
    <View style={styles.loginForm}>
      <Text>LoginForm</Text>
      <TextInput placeholder="Username"/>
      <TextInput placeholder="Password"/>
      <Button title="Login" onPress={()=> console.log('Enviado')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  loginForm: {
    backgroundColor: 'red'
  }
})