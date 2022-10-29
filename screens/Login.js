import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { React, useState, useRef } from "react";
import PhoneInput from "react-native-phone-number-input";
import { useNavigation } from "@react-navigation/native";
import NavOptions from '../components/NavOptions';

const Login = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef < PhoneInput > null;
  return (
    <SafeAreaView style={{ alignItems: "center", justifyContent: "center" }}>
      <NavOptions />
      <KeyboardAvoidingView keyboardVerticalOffset={50} behavior={"padding"} style={{ alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            color: "#01013E",
            fontSize: "43px",
            fontWeight: "600",
            marginVertical: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Login
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
          Please enter your mobile number we will send you OTP to verify
        </Text>
        <PhoneInput
          // ref={phoneInput}
          defaultValue={value}
          defaultCode="IN"
          layout="first"
          onChangeText={(text) => {
            setValue(text);
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
          withDarkTheme
          withShadow
          autoFocus
        />
        <TouchableOpacity
          style={styles.bottomView}
          onPress={()=>navigation.navigate('OTPVerification')}
        >
          <Text style={styles.textStyle}>Generate OTP</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

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
