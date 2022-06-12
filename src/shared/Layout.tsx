import { ReactElement } from "react";
import { ImageBackground, ImageSourcePropType, StyleSheet, Text, View } from "react-native"

interface LayoutProps {
    backgroundImage?: ImageSourcePropType;
    header?: any;
    children: ReactElement;
}


export const Layout = ({ children, header = "", backgroundImage }: LayoutProps) => {
    return (
        <View style={styles.layout}>
            <ImageBackground source={backgroundImage || require('../../assets/images/edit_crop.png')} style={styles.image}>
                {children}
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        flexDirection: "column",
        width: "100%"
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
})

