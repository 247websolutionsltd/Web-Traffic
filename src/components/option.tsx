import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

type IconName = keyof typeof Ionicons.glyphMap;
interface ProfileCardProps extends TouchableOpacityProps{
    title: string;
    icon: IconName;
    color?:string;
    background?:string;
}
export default function OptionCard({title, icon, onPress, color, background}:ProfileCardProps){
    const styles = useStyles();
    
    return(
        <TouchableOpacity style={[styles.profileCard, {justifyContent:'flex-start'}]} onPress={onPress}>
            <View style={styles.row}>
                <View style={[styles.menuIconView, {backgroundColor:background}]}>
                    <Ionicons name={icon} size={16} color={color} />
                </View>
                <ThemedText type="bold">{title}</ThemedText>
            </View>
        </TouchableOpacity>
    )
}