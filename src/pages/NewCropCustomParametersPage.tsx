import { Text, TextInput, View } from 'react-native';
import tw from 'twrnc';
import {Layout} from '../shared/Layout';
import { styles } from './Home';


export const NewCropCustomParametersPage = () => {
    return (
        <Layout>
            <View>
                <View style={tw`flex flex-row w-full items-center justify-between`}>
                    <Text>"Icon"</Text>
                    <Text>Icon</Text>
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
            </View>
        </Layout>
    );
};
