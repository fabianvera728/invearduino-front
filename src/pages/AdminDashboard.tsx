import { ArrowLeft, Menu } from 'iconoir-react-native';
import { useState } from 'react';
import { Alert, StyleSheet, Switch, TextInput, View } from 'react-native';
import tw from 'twrnc';
import { Button, IconButton } from '../components/ButtonWithIcon';
import { Layout } from '../shared/Layout';
import { StyledText } from '../atoms/styled-text/StyledText';


export const AdminDashboard = () => {

    const [form, setForm] = useState({
        arduino_code: "",
    });

    const onChange = (name: "arduino_code", value: string) => {
        setForm({ ...form, [name]: value })
    }

    const onSubmit = () => {
        console.table(form)
    }

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        console.log("funciona", form.arduino_code == "")
        if (form.arduino_code == "") {
            Alert.alert("abeho", "Registre primero el codigo del arduino")
            return
        }
        setIsEnabled(previousState => !previousState)
    };

    return (
        <Layout backgroundImage={"backgroundGradient"}>
            <View style={[styles.newCropPage, tw`w-full justify-between`]}>
                <View style={{ width: "100%" }}>
{/*                     <View style={tw`flex flex-row w-full items-center justify-between`}>
                        <IconButton>
                            <ArrowLeft />
                        </IconButton>
                        <IconButton>
                            <Menu />
                        </IconButton>
                    </View> */}
                    <View style={tw`w-full flex flex-col`}>
                        <StyledText mode="gradient" tag="heading" weight="bold">Panel de control</StyledText>
                        <StyledText>Maneje sus cultivos desde aquí</StyledText>
                        <View style={tw`mt-2 mb-3`}>
                            <StyledText tag="label">Código de Arduino</StyledText>
                            <TextInput style={tw`border border-gray-300 rounded px-3 py-3`} placeholder="Código" onChangeText={(e) => onChange("arduino_code", e)} />
                        </View>
                        <StyledText tag="heading" weight="medium">Controles</StyledText>
                        <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between"}}>
                            <View style={tw`mt-2`}>
                                <StyledText tag="label">Leds</StyledText>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                            <View style={tw`mt-2`}>
                                <StyledText tag="label">Riego</StyledText>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                            <View style={tw`mt-2`}>
                                <StyledText tag="label">Humedad</StyledText>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
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
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
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