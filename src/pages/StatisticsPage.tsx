import { Text, TextInput, View } from 'react-native';
import tw from 'twrnc';
import { styles } from './Home';


export const StatisticsPage = () => {
    return (
        <View style={[styles.newCropPage, tw`w-full`]}>
            <View style={tw`flex flex-row w-full items-center justify-between`}>
                <Text>"Icon"</Text>
                <Text>Icon</Text>
            </View>
            <View style={tw`w-full mt-8 flex flex-col`}>
                <Text style={tw`text-xl`}><strong>Visualización de estadísticas</strong></Text>
                <Text style={tw`mt-2 text-gray-500`}>Juegue con el tipo de gráfico y el rango de fechas para obtener una mejor perspectiva</Text>
                <View style={tw`mt-4`}>
                    <label style={tw`text-gray-500`}><strong>Parámetro a observar</strong></label>
                    <TextInput style={tw`border border-gray-500 rounded px-3 py-2`} placeholder="Humedad del suelo" onChangeText={(e) => console.log(e)} />
                </View>
                <View style={tw`mt-4`}>
                </View>
            </View>
            <View style={tw`mt-4 w-full mt-3 flex flex-col`}>
                <Text><strong>Imagenes recientes</strong></Text>
            </View>
        </View>
    );
};
