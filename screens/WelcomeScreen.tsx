import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen({ navigation }: any) {
  return (
    <ImageBackground source={{uri:"https://png.pngtree.com/png-clipart/20221001/original/pngtree-welcome-text-png-image_8648505.png"}} style={styles.container}>
      <Text>WelcomeScreen</Text>
      <Button title='Ir a Login' onPress={() => navigation.navigate("Login")} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
  }
})


