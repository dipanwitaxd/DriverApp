import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/Login";
import OTPVerification from "./screens/OTPVerification";


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
          <Stack.Screen name={'Login'} component={Login} options={{
              headerShown: false,
            }} />
           <Stack.Screen name={'OTPVerification'} component={OTPVerification} options={{
              headerShown: false,
            }} />
          
          </Stack.Navigator>
          {/* <HomeScreen /> */}
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
