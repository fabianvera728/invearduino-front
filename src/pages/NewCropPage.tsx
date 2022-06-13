import MaskedView, { MaskedViewBase } from '@react-native-masked-view/masked-view';
import { ArrowLeft, Menu } from 'iconoir-react-native';
import { useState } from 'react';
import { Alert, Modal, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import tw from 'twrnc';
import { Button, IconButton } from '../components/ButtonWithIcon';
import { Layout } from '../shared/Layout';
import { StyledText } from '../atoms/styled-text/StyledText';


export const NewCropPage = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [form, setForm] = useState({
        type: "N/A",
        arduino_code: "",
        name: "",
        description: "",
        banner: "",
    });

    const onChange = (name: "type" | "arduino_code" | "name" | "description" | "banner", value: string) => {
        setForm({ ...form, [name]: value })
    }

    const onSubmit = () => {
        console.table(form)
    }

    return (
        <Layout backgroundImage={"backgroundGradient"}>
            <View style={[styles.newCropPage, tw`w-full justify-between`]}>
                <View>
                   {/*  <View style={tw`flex flex-row w-full items-center justify-between`}>
                        <IconButton>
                            <ArrowLeft />
                        </IconButton>
                        <IconButton>
                            <Menu />
                        </IconButton>
                    </View> */}
                    <View style={tw`w-full flex flex-col`}>
                        <StyledText mode="gradient" tag="heading" weight="bold">Crear nuevo cultivo</StyledText>
                        <StyledText>Seleccionar un tipo de cultivo permite prefilar el invernadero y sugerir parámetros de configuración por defecto</StyledText>
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
                            <StyledText tag="label">Tipo de cultivo</StyledText>
                            <Pressable
                                style={tw`border border-gray-300 rounded px-3 py-3 block`}
                                onPress={() => setModalVisible(true)}
                            >
                                <Text>🍑 {form.type}</Text>
                            </Pressable>
                        </View>
                        <View style={tw`mt-2`}>
                            <StyledText tag="label">Código de Arduino</StyledText>
                            <TextInput style={tw`border border-gray-300 rounded px-3 py-3`} placeholder="Código" onChangeText={(e) => onChange("arduino_code", e)} />
                        </View>
                        <View style={tw`mt-2`}>
                            <StyledText tag="label">Nombre del cultivo</StyledText>
                            <TextInput style={tw`border border-gray-300 rounded px-3 py-3`} placeholder="Nombre del cultivo" onChangeText={(e) => onChange('name', e)} />
                        </View>
                        <View style={tw`mt-2`}>
                            <StyledText tag="label">Descripción</StyledText>
                            <TextInput style={tw`border border-gray-300 rounded px-3 py-3`} placeholder="Descripción" onChangeText={(e) => onChange("description", e)} />
                        </View>
                    </View>
                </View>
                <View style={tw`mt-4 w-full mt-3 flex flex-col`}>
                    <Button onPress={onSubmit} type="gradient" mode="primary">Registrar cultivo</Button>
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