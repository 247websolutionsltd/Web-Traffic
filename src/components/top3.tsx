import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

interface TopProps{
    title: string;
}
export default function Top({title}:TopProps){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <View style={[styles.row, {paddingHorizontal:Spacing.three}]}>
            <TouchableOpacity onPress={()=>router.back()} style={[styles.top2Icon, {marginRight:Spacing.two}]}>
                <MaterialIcons name="arrow-back" size={23} color={theme.text}/>
            </TouchableOpacity>
            <ThemedText type="subtitle">{title}</ThemedText>
        </View>
    )
}