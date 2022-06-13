import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native';
import { styleWeightText, styleTagText } from './Styles';
import { StyledTextProps } from './StyledTextProps';



export const StyledText: React.FC<StyledTextProps> = ({ weight = 'regular', tag = "paragraph", mode = "normal", children }) => {
    let weightStyles = Object.create(styleWeightText)[weight];
    let tagStyles = Object.create(styleTagText)[tag];
    if (mode === "gradient") {
        return (
            <LinearGradient colors={['#f00', '#0f0']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <Text style={[weightStyles, tagStyles]}>{children}</Text>
            </LinearGradient>
        );
    }

    return (
        <Text style={[weightStyles, tagStyles]}>{children}</Text>
    );
};
