import { AlignRight, ArrowLeft, Menu } from 'iconoir-react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import tw from 'twrnc';
import { Button, IconButton } from '../components/ButtonWithIcon';
import {Layout} from '../shared/Layout';


export const NewCropCustomParametersPage = () => {
    return (
        <Layout backgroundImage={require('../../assets/images/edit_crop.png')}>
            <View style={styles.newCropPage}>
                <View style={tw`flex flex-row w-full items-center justify-between`}>
                    <IconButton>
                        <ArrowLeft/>
                    </IconButton>
                    <IconButton>
                        <Menu/>
                    </IconButton>
                </View>
                <View style={tw`w-full mt-8 flex flex-col`}>
                    <Text style={tw`text-xl`}><strong>Personalizar parametros</strong></Text>
                    <View style={tw`mt-4`}>
                        <label style={tw`text-gray-500`}><strong>Rangos de riego activo</strong></label>
                        <View style={tw`flex flex-row`}>
                            <View style={tw`mt-2 w-[50%] pr-1`}>
                                <label style={tw`text-gray-500`}>Hora de inicio</label>
                                <TextInput style={tw`border border-gray-500 rounded px-3 py-2`} placeholder="10:00 a.m" onChangeText={(e) => console.log(e)} />
                            </View>
                            <View style={tw`mt-2 w-[50%] pl-1`}>
                                <label style={tw`text-gray-500`}>Hora de fin</label>
                                <TextInput style={tw`border border-gray-500 rounded px-3 py-2`} placeholder="10:00 a.m" onChangeText={(e) => console.log(e)} />
                            </View>
                        </View>
                    </View>
                    <View style={tw`mt-4`}>
                        <label style={tw`text-gray-500`}><strong>Rangos de iluminación activa</strong></label>
                        <View style={tw`flex flex-row`}>
                            <View style={tw`mt-2 w-[50%] pr-1`}>
                                <label style={tw`text-gray-500`}>Hora de inicio</label>
                                <TextInput style={tw`border border-gray-500 rounded px-3 py-2`} placeholder="10:00 a.m" onChangeText={(e) => console.log(e)} />
                            </View>
                            <View style={tw`mt-2 w-[50%] pl-1`}>
                                <label style={tw`text-gray-500`}>Hora de fin</label>
                                <TextInput style={tw`border border-gray-500 rounded px-3 py-2`} placeholder="10:00 a.m" onChangeText={(e) => console.log(e)} />
                            </View>
                        </View>
                    </View>
                    <View style={tw`mt-4`}>
                        <label style={tw`text-gray-500`}><strong>Horario de toma fotográfica</strong></label>
                        <TextInput style={tw`border mt-3 border-gray-500 rounded px-3 py-2`} placeholder="10:00 a.m" onChangeText={(e) => console.log(e)} />
                        <TextInput style={tw`border mt-3 border-gray-500 rounded px-3 py-2`} placeholder="10:00 a.m" onChangeText={(e) => console.log(e)} />
                    </View>
                    <View style={tw`mt-4`}>
                        <label style={tw`text-gray-500`}><strong>Rango de temperatura permitido</strong></label>
                        <input type="range" />
                    </View>
                    <View style={tw`mt-4`}>
                        <label style={tw`text-gray-500`}><strong>Rango de consumo eléctrico permitido</strong></label>
                        <input type="range" />
                    </View>
                </View>
                <View style={tw`mt-4 w-full mt-3 flex flex-col`}>
                    <Text><strong>Imagenes recientes</strong></Text>
                </View>
                <View style={tw`mt-4 w-full mt-3 flex flex-col`}>
                    <Button type="gradient">Hola mundo</Button>
                </View>
            </View>
           
        </Layout>
    );
};

const styles = StyleSheet.create({
    newCropPage: {
        flex: 1,
        alignContent: "center",
        alignItems: "flex-start",
        paddingVertical: "2rem",
        paddingHorizontal: "2rem",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});