import { GitHub, Google } from 'iconoir-react-native';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import { ButtonWithIcon } from '../components/ButtonWithIcon';

export const LoginPage = () => {
    return (
        <View style={styles.layoutLogin}>
            <ImageBackground source={require('../../assets/background_login.png')}
                style={styles.image}>
                <View style={[styles.loginPage]}>
                    <View>
                        <Text>Bienvenido a</Text>
                        <Image
                            source={require('../../assets/abeho.png')}
                            style={tw`w-[134px] mt-2 h-[32px]`}
                        />
                    </View>
                    <View style={tw`w-full mt-3 flex flex-col items-center`}>
                        <Image
                            source={require('../../assets/brand_abeho.png')}
                            style={tw`w-[109px] h-20 `}
                        />
                    </View>
                    <View style={tw`mt-4 w-full flex flex-col gap-3`}>
                        <ButtonWithIcon style={tw`mb-3`} title="Iniciar sesión con Google">
                            <Google />
                        </ButtonWithIcon>
                        <View style={tw`mb-2`}/>
                        <ButtonWithIcon
                            styleText={tw`text-white`}
                            style={tw`bg-black text-white`} title="Iniciar sesión con GitHub">
                            <GitHub />
                        </ButtonWithIcon>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export const styles = StyleSheet.create({
   /*  appButtonContainer: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    }, */
    loginPage: {
        flex: 1,
        alignContent: "center",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingVertical: "14rem",
        paddingHorizontal: "3rem"
    },
    layoutLogin: {
        flex: 1,
        flexDirection: "column",
        width: "100%"
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    text: {
        backgroundColor: '#333333',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    }
});

