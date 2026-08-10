import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

interface StatProps{
    topRight: string;
    title: string;
    desc: string;
    icon:keyof typeof MaterialIcons.glyphMap;
    iconBackground: string;
    topRightColor: string;
}
export default function Stat({topRight, title, desc, icon, iconBackground, topRightColor}:StatProps){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <View style={{width:'50%', padding:Spacing.two}}>
            <View style={styles.storeStat}>
                <View style={styles.rowStretch}>
                    <View style={[styles.storeStatIcon, {backgroundColor:iconBackground}]}>
                        <MaterialIcons name={icon} size={17} color={theme.text}/>
                    </View>
                    <ThemedText type="small" style={{color:topRightColor}}>{topRight}</ThemedText>
                </View>
                <View style={{marginTop:Spacing.three}}>
                    <ThemedText type="subtitle">{title}</ThemedText>
                    <ThemedText type="mid">{desc}</ThemedText>
                </View>
            </View>
        </View>
    )
}