import { Colors } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

type IconName = keyof typeof Ionicons.glyphMap;
interface ProfileCardProps extends TouchableOpacityProps{
    title: string;
    icon: IconName;
}
export default function ProfileCard({title, icon, onPress}:ProfileCardProps){
    const styles = useStyles();
    const theme = useTheme()
    return(
        <TouchableOpacity style={styles.profileCard} onPress={onPress}>
            <View style={styles.row}>
                <View style={styles.menuIconView}>
                    <Ionicons name={icon} size={16} color={theme.coralDark} />
                </View>
                <ThemedText type="bold">{title}</ThemedText>
            </View>
            <Ionicons name="chevron-forward" size={16} color={Colors.inkFaint} />
        </TouchableOpacity>
    )
}