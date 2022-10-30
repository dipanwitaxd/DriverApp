import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";

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
        <TouchableOpacity
          style={styles.bottomView}
          // onPress={()=>navigation.navigate('OTPVerification')}
        >
          <Text style={styles.textStyle}>Continue</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default OTPVerification;

const styles = StyleSheet.create({
  bottomView: {
    width: "80%",
    height: 50,
    backgroundColor: "#02013C",
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    left: 0,
    borderRadius: 4,
    marginTop: "70%",
    paddingHorizontal: 90,
    paddingVertical: 10,
  },
  textStyle: {
    color: "#D0D1E4",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 23,
  },
});
