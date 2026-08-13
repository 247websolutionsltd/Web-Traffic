import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

type IconName = keyof typeof Ionicons.glyphMap;
interface ProfileCardProps {
    title: string;
    end?: boolean;
    rightTitle: string;
    rightDesc: string;
}
export default function ReviewTextsCard({ title, end=true, rightTitle, rightDesc }:ProfileCardProps){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <View style={[styles.profileCard, {borderBottomWidth:end ? 0 : 1, alignItems:'flex-start'}]} >
            <View style={{ flexShrink: 1, padding:Spacing.one }}>
                <ThemedText style={{ flexWrap: 'wrap', color:theme.textSecondary }}>
                    {title}
                </ThemedText>
            </View>
            <View style={{alignItems:'flex-end'}}>
                <ThemedText type="bold" style={{lineHeight:19}}>
                    {rightTitle}
                </ThemedText>
                <TouchableOpacity style={{padding:Spacing.one}}>
                    <ThemedText type="small" style={{color:theme.coralDark, fontWeight:700, lineHeight:13}}>
                        {rightDesc}
                    </ThemedText>
                </TouchableOpacity>
            </View>
        </View>
    )
}