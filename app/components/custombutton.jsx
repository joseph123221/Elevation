import { View, Text } from 'react-native'
import React from 'react'

const custombutton = () => {
  return (
    <Pressable 
        style={styles.loginButton}
        onPress={goToLogin} // Navigate to login.jsx on press
      >
        <Text style={styles.loginButtonText}>Log In</Text>
      </Pressable>
  )
}

export default custombutton