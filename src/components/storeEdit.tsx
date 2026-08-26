import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

interface EditProps extends TouchableOpacityProps{
    icon:keyof typeof MaterialIcons.glyphMap;
    title:string;
}
export default function Edit({icon, title, onPress}:EditProps){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <TouchableOpacity style={{flex:1, padding:Spacing.two}} onPress={onPress}>
            <View style={styles.storeTopEdit}>
                <MaterialIcons name={icon} color={theme.text} size={20}/>
                <ThemedText style={{fontSize:12}}>{title}</ThemedText>
            </View>
        </TouchableOpacity>
    )
}