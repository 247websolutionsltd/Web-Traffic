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
    end: boolean;
    onToggle: ()=>void;
    toggled?:boolean;
}
export default function SettingsToggleCard({title, icon, end, onToggle, toggled=false}:ProfileCardProps){
    const styles = useStyles();
    const theme = useTheme()
    return(
        <View style={[styles.profileCard, {borderBottomWidth:end ? 0 : 1}]} >
            <View style={[styles.row, {flexShrink:1}]}>
                <View style={styles.menuIconView}>
                    <Ionicons name={icon} size={16} color={theme.coralDark} />
                </View>
                <View style={{ flexShrink: 1, padding:Spacing.one }}>
                    <ThemedText type="bold" style={{ flexWrap: 'wrap' }}>
                        {title}
                    </ThemedText>
                </View>
            </View>
            <Radio activeColor={Colors.coral} inactiveColor={theme.line} onToggle={onToggle} toggled={toggled}/>
        </View>
    )
}