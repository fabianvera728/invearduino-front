import { ReactElement } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

interface LayoutProps {
  backgroundImage: string;
  header?: any;
  children: ReactElement;
}

interface StaticImage {
  image: any;
  name: string;
}
class BackgroundStaticImage {
  private static images: StaticImage[] = [
    {
      image: require("../../assets/images/edit_crop.png"),
      name: "backgroundGradient",
    },
  ];

  static getImage(name: string): StaticImage | undefined {
    const found = BackgroundStaticImage.images.find(e => e.name === name);
    return found ? found.image : null;
  }
}

export const Layout = ({
  children,
  header = "",
  backgroundImage,
}: LayoutProps) => {
  const background = BackgroundStaticImage.getImage(backgroundImage);
  
  return (
    <View style={styles.layout}>
      <ImageBackground
        resizeMode="cover"
        source={background}
        style={styles.image}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
