import { ReactElement } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native"

interface LayoutProps {
    backgroundImage: string;
    header: any;
    children: ReactElement;
}


export const Layout = ({ children, header = "", backgroundImage }: LayoutProps) => {
    return (
        <View style={styles.layout}>
            <ImageBackground source={{ uri: backgroundImage }} style={styles.image}>
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

