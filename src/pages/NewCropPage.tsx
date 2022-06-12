import { ArrowLeft, Menu } from 'iconoir-react-native';
import { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import tw from 'twrnc';
import { ButtonWithIcon, IconButton } from '../components/ButtonWithIcon';


export const NewCropPage = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={[styles.newCropPage, tw`w-full justify-between`]}>
            <View>
                <View style={tw`flex flex-row w-full items-center justify-between`}>
                    <IconButton>
                        <ArrowLeft />
                    </IconButton>
                    <IconButton>
                        <Menu />
                    </IconButton>
                </View>
                <View style={tw`w-full mt-8 flex flex-col`}>
                    <Text style={tw`text-xl`}>Crear nuevo cultivo</Text>
                    <Text style={tw`mt-2 text-gray-500`}>Seleccionar un tipo de cultivo permite prefilar el invernadero y sugerir parámetros de configuración por defecto</Text>
                    <View style={tw`mt-4`}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Hello World!</Text>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}
                                    >
                                        <Text style={styles.textStyle}>Hide Modal</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                        <Pressable
                            style={[styles.button, styles.buttonOpen]}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={styles.textStyle}>Show Modal</Text>
                        </Pressable>
                        <Text style={tw`text-gray-500 mb-1`}>Tipo de cultivo</Text>
                        <TextInput style={tw`border border-gray-300 rounded px-3 py-3`} placeholder="Tomates" onChangeText={(e) => console.log(e)} />
                    </View>
                    <View style={tw`mt-2`}>
                        <Text style={tw`text-gray-500 mb-1`}>Código de Arduino</Text>
                        <TextInput style={tw`border border-gray-300 rounded px-3 py-3`} placeholder="Código" onChangeText={(e) => console.log(e)} />
                    </View>
                    <View style={tw`mt-2`}>
                        <Text style={tw`text-gray-500 mb-1`}>Nombre del cultivo</Text>
                        <TextInput style={tw`border border-gray-300 rounded px-3 py-3`} placeholder="Nombre del cultivo" onChangeText={(e) => console.log(e)} />
                    </View>
                    <View style={tw`mt-2`}>
                        <Text style={tw`text-gray-500 mb-1`}>Descripción</Text>
                        <TextInput style={tw`border border-gray-300 rounded px-3 py-3`} placeholder="Descripción" onChangeText={(e) => console.log(e)} />
                    </View>
                </View>
            </View>
            <View style={tw`mt-4 w-full mt-3 flex flex-col`}>
                <ButtonWithIcon styleText={tw`text-white`}
                    style={tw`px-3 bg-green-600 py-3`}
                    title="Crear cultivo"></ButtonWithIcon>
            </View>
        </View>
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