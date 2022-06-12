import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View } from 'react-native';
import { HomePage } from './src/pages/Home';
import { NewCropPage } from "./src/pages/NewCropPage";
import { StatisticsPage } from "./src/pages/StatisticsPage";
import { NewCropCustomParametersPage } from "./src/pages/NewCropCustomParametersPage";
import { LoginPage } from './src/pages/Login';
import { WelcomePage } from './src/pages/WelcomePage';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <WelcomePage /> */}
      {/* <LoginPage /> */}
      {/* <HomePage /> */}
      <NewCropPage />
{/*       <NewCropCustomParametersPage />
 */}      {/* <StatisticsPage /> */}
    </View>
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
