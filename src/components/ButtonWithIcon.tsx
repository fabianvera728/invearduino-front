import * as React from "react"
import { LinearGradient } from 'expo-linear-gradient';
import { Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';


export const ButtonWithIcon = ({ handlePress, title, children, style = {}, styleText = {} }: any) => {
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

interface ButtonProps {
    type: "normal" | "gradient";
    mode: "primary" | "secondary" | "tertiary";
    size: "small" | "large";
    onPress: any;
    children: string;
}

export const GRADIENTCOLORS = { primary: ["#A2D729", "#3E92CC"] }

export const Button = ({ type: typebutton = "normal", size = "large", mode = "primary", onPress = () => { }, children = "" }: ButtonProps) => {
    if (typebutton !== "normal") {
        return (
            <LinearGradient
                colors={GRADIENTCOLORS.primary}
                end={{ x: 1, y: 1 }}
                style={[
                    tw`flex flex-row justify-center items-center 
                    border-gray-600 px-3 py-3 rounded-lg`,
                ]}
            >
                <TouchableOpacity
                    onPress={onPress}
                    style={{ flex: 1, alignItems: "center" }}
                >
                    <Text style={{ fontWeight: "bold", color: "white" }}>{children}</Text>
                </TouchableOpacity>
            </LinearGradient>

        )
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                tw`flex flex-row justify-center items-center 
                border border-gray-600 px-3 py-3 rounded-lg`,
            ]}
        >
            <Text style={[tw`pl-2`]}>{children}</Text>
        </TouchableOpacity>
    );
};

export const IconButton = ({ handlePress, children, style = {} }: any) => {
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


