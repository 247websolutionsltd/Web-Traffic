import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

interface TopProps{
    title: string;
    save?:boolean;
}
export default function Top({title, save=false}:TopProps){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <View style={[styles.rowStretch, {paddingHorizontal:Spacing.three}]}>
            <View style={styles.row}>
                <TouchableOpacity onPress={()=>router.back()} style={[styles.top2Icon, {marginRight:Spacing.two}]}>
                    <MaterialIcons name="arrow-back" size={23} color={theme.text}/>
                </TouchableOpacity>
                <ThemedText type="subtitle">{title}</ThemedText>
            </View>
            {
                save &&
                <TouchableOpacity onPress={()=>router.back()}>
                    <ThemedText style={{color:theme.textSecondary}}>Save</ThemedText>
                </TouchableOpacity>
            }
        </View>
    )
}