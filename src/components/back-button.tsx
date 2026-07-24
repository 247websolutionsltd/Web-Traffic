import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

type IconName = keyof typeof Ionicons.glyphMap;
interface BackProps extends TouchableOpacityProps{
    title?: string;
    iconLeft?: IconName;
}
export default function Back({title, onPress, iconLeft}:BackProps){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <TouchableOpacity style={styles.backButton} onPress={onPress}>
            {
                title ?
                <View style={styles.row}>
                    {
                        iconLeft &&
                        <Ionicons name={iconLeft} size={20} color={theme.coralDark} style={{marginRight:Spacing.one}}/>
                        
                    }
                    <ThemedText type="bold">{title}</ThemedText>
                </View>
                
                :
                <MaterialIcons name="arrow-back" size={22} color={theme.text}/>
            }
        </TouchableOpacity>
    )
}