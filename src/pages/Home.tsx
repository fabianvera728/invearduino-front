import { Menu} from 'iconoir-react-native';
import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';

export const HomePage = () => {
    const [] = useState(false)
    return (
        <View style={[styles.homePage, tw`w-full`]}>
            <View style={tw`flex flex-row w-full items-center justify-between`}>
                <Image
                    source={require('../../assets/abeho.png')}
                    style={tw`w-[134px] h-[32px]`}
                />
                <View><Menu/></View>
            </View>
            <View style={tw`w-full mt-8 flex flex-col`}>
                <Text><strong>Cultivos</strong></Text>
                <View></View>
            </View>
            <View style={tw`mt-4 w-full mt-3 flex flex-col`}>
                <Text><strong>Imagenes recientes</strong></Text>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    homePage: {
        flex: 1,
        alignContent: "center",
        alignItems: "flex-start",
        paddingVertical: "2rem",
        paddingHorizontal: "2rem"
    },
    text: {
        backgroundColor: '#333333',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    }
});

