import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';



export function WelcomePage() {
  return (
    <View style={styles.layoutWelcome}>

      <ImageBackground source={require('../../assets/background_login.png')} style={[styles.image, tw`overflow-hidden`]}>
        <View style={styles.welcomePage}>
          <View></View>
          <Image
            source={require('./assets/logo.png')}
            style={tw`w-48 h-29`} />
          <View style={[styles.footer]}>
            <Text>Power by</Text>
            <Text><strong>WeTheDevs</strong></Text>
          </View>
        </View>

      </ImageBackground>
    </View>

  );
}

export const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  welcomePage: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "14rem",
    paddingVertical: "4rem"
  },
  layoutWelcome: {
    flex: 1,
    flexDirection: 'column',
  },
  footer: {
    alignContent: "flex-end",
    alignItems: "center",
  }
});
