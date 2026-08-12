import { Colors, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { useStyles } from "../../styles/styles";
import Radio from "./radio";
import { ThemedText } from "./themed-text";

type IconName = keyof typeof Ionicons.glyphMap;
interface ProfileCardProps {
    title: string;
    icon: IconName;
    desc: string
}
export default function CreateToggleCard({title, icon, desc}:ProfileCardProps){
    const styles = useStyles();
    const theme = useTheme()
    return(
        <View style={[styles.createCard]} >
            <View style={[styles.row, {flexShrink:1}]}>
                <View style={styles.menuIconView}>
                    <Ionicons name={icon} size={16} color={theme.coralDark} />
                </View>
                <View style={{ flexShrink: 1, padding:Spacing.one }}>
                    <ThemedText type="bold" style={{ flexWrap: 'wrap' }}>
                        {title}
                    </ThemedText>
                    <ThemedText type="small" style={{ flexWrap: 'wrap', color:theme.textSecondary }}>
                        {desc}
                    </ThemedText>
                </View>
            </View>
            <Radio activeColor={Colors.coral} inactiveColor={theme.line}/>
        </View>
    )
}