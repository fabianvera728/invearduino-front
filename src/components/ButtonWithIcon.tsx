import { Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';


export const ButtonWithIcon = ({ handlePress, title, children, style={}, styleText={} }: any) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            style={[
                tw`flex flex-row justify-center items-center 
                border border-gray-600 px-3 py-2 rounded-lg`, style
            ]}
        >
            {children}
            <Text style={[tw`pl-2`, styleText]}>{title}</Text>
        </TouchableOpacity>
    );
};

export const IconButton = ({ handlePress, children, style={}}: any) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            style={[
                tw`flex flex-row justify-center items-center 
                rounded-lg`, style
            ]}
        >
            {children}
        </TouchableOpacity>
    );
};


