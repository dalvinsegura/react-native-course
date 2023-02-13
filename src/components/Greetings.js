import { View, Text } from 'react-native';
import React from 'react'
import PropTypes from 'prop-types'

export default function Greetings({name, lastName, age}) {
  return (
    <View>
      <Text>Hello {name} {lastName}, your age is {age}, right?</Text>
    </View>
  )
}

// Greetings.defaultProps ={
//     name: "Dalvin", 
//     lastName: "Segura",
//     age: 18
// }

Greetings.propTypes ={
    name: PropTypes.string.isRequired, 
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number
}

