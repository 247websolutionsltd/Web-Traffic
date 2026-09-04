import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

interface TopProps{
    title: string;
    store?:boolean;
    onBack?:()=>void;
}
export default function Top({title, store=false, onBack=()=>router.back()}:TopProps){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <View style={[styles.rowStretch, {paddingHorizontal:Spacing.three}]}>
            <View style={styles.row}>
                <TouchableOpacity onPress={onBack} style={[styles.top2Icon, {marginRight:Spacing.two}]}>
                    <MaterialIcons name="arrow-back" size={23} color={theme.text}/>
                </TouchableOpacity>
                <ThemedText type="subtitle">{title}</ThemedText>
            </View>
            {
                store &&
                <TouchableOpacity style={styles.bell} accessibilityLabel="Notifications" onPress={()=>router.navigate('/editStore')}>
                    <Ionicons name="storefront-outline" size={24} color={theme.ink} />
                </TouchableOpacity>
            }
        </View>
    )
}