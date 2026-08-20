import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

type IconName = keyof typeof Ionicons.glyphMap;
interface ProfileCardProps extends TouchableOpacityProps {
    title: string;
    icon: IconName;
    end: boolean;
    text?: string;
    iconSize?: number;
}
export default function SettingsTextsCard({title, icon, end, text, iconSize=16, onPress}:ProfileCardProps){
    const styles = useStyles();
    const theme = useTheme()
    return(
        <TouchableOpacity style={[styles.profileCard, {borderBottomWidth:end ? 0 : 1}]} onPress={onPress}>
            <View style={[styles.row, {flexShrink:1}]}>
                <View style={styles.menuIconView}>
                    <Ionicons name={icon} size={iconSize} color={theme.coralDark} />
                </View>
                <View style={{ flexShrink: 1, padding:Spacing.one }}>
                    <ThemedText type="bold" style={{ flexWrap: 'wrap' }}>
                        {title}
                    </ThemedText>
                </View>
            </View>
            {
                text &&
                <ThemedText type="small">
                    {text}
                </ThemedText>
            }
        </TouchableOpacity>
    )
}