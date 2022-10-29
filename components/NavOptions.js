import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import dodlogo from "../assets/dod_logo.png";
import car from "../assets/dod_car.png";

const NavOptions = () => {
  const [login, setLogin] = useState(true);
  const [verification, setVerification] = useState(false);
  const [details, setDetails] = useState(false);
  return (
    <SafeAreaView style={styles.home}>
      <Text>
        <Image
          style={{ width: 140, height: 140, resizeMode: "contain" }}
          source={dodlogo}
        />
      </Text>
      <View
        style={{  
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 25,
          marginVertical: 20,
        }}
      >
        {login && (
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
              position: "absolute",
              zIndex: 2,
              // marginLeft: 29
            }}
            source={car}
          />
        )}
        <View
          style={
            login
              ? {
                  flex: 1,
                  height: 6,
                  borderColor: "#D0D1E4",
                  borderRadius: "50",
                  borderWidth: 5,
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 20,
                }
              : {
                  flex: 1,
                  height: 6,
                  borderColor: "#8180A1",
                  borderRadius: "50",
                  borderWidth: 5,
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 20,
                }
          }
        />
        {verification && (
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
              position: "absolute",
              zIndex: 2,
              marginLeft: 120,
            }}
            source={car}
          />
        )}
        <View
          style={
             {
                  flex: 1,
                  height: 6,
                  borderColor: "#D0D1E4",
                  borderRadius: "50",
                  borderWidth: 5,
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 20,
                }
          }
        />
        {!login && !verification && (
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
              position: "absolute",
              zIndex: 2,
              // marginLeft: 220
            }}
            source={car}
          />
        )}
        <View
          style={{
            flex: 1,
            height: 6,
            borderColor: "#D0D1E4",
            borderRadius: "50",
            borderWidth: 5,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 20,
          }}
        />
      </View>
      {/* {login && (
        <Login
          login={login}
          setLogin={setLogin}
          setVerification={setVerification}
        />
      )}
      {verification && (
        <OTPVerification
          setVerification={setVerification}
          setDetails={setDetails}
        />
      )} */}
    </SafeAreaView>
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  home: {
    alignItems: "center",
    justifyContent: "center",
  },
  pagination: {
    flex: "1",
    flexDirection: "row",
    width: "100%",
  },
  pageLines: {
    borderBottomWidth: "12",
    borderRadius: "50",
    borderHeight: "1em",
    borderBottomColor: "#D0D1E4",
  },
});
