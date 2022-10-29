import { KeyboardAvoidingView, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'

const OTPVerification = () => {
  return (
    <KeyboardAvoidingView>
      <NavOptions />
    <SafeAreaView style={{ alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{
          color: "#01013E",
          fontSize: "43px",
          fontWeight: "600",
          marginVertical: 10,
        }}
      >
        Verification
      </Text>
      <Text
        style={{
          color: "#8180A1",
          fontSize: "16px",
          fontWeight: "600",
          width: 349,
          textAlign: "center",
          marginTop: 10,
          marginBottom: 30,
        }}
      >
        Please enter OTP code sent to your number +91 9777925002
      </Text>
      <View>
        
      </View>
    </SafeAreaView></KeyboardAvoidingView>
  )
}

export default OTPVerification

const styles = StyleSheet.create({})