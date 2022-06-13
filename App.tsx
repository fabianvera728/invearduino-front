import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View } from 'react-native';
import { HomePage } from './src/pages/Home';
import { NewCropPage } from "./src/pages/NewCropPage";
import { StatisticsPage } from "./src/pages/StatisticsPage";
import { NewCropCustomParametersPage } from "./src/pages/NewCropCustomParametersPage";
import { LoginPage } from './src/pages/Login';
import { WelcomePage } from './src/pages/WelcomePage';
import { AdminDashboard } from './src/pages/AdminDashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="New crop" component={NewCropPage} />
        <Stack.Screen name="Custom params" component={NewCropCustomParametersPage} />
        <Stack.Screen name="Dashboard" component={AdminDashboard} />
      </Stack.Navigator>
      {/*       <View style={styles.container}>
        {/* <WelcomePage /> 
        {/* <LoginPage /> 
        {/* <HomePage /> 
        {/* <NewCropPage /> 
        <AdminDashboard />
        {/* <NewCropCustomParametersPage /> 
        {/* <StatisticsPage />
      </View> */}
    </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    overflow: "hidden"
    /*     paddingHorizontal: "2rem",
        paddingVertical: "2rem" */
  },
  footer: {
    alignContent: "flex-end",
    alignItems: "center",
  },
  text: {
    backgroundColor: '#333333',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10
  }
});
