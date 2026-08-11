import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { View } from "react-native";
import { ThemedText } from "../themed-text";

export default function Description(){
    const theme = useTheme();
    return(
        <View style={{flex:1}}>
            <View style={{marginVertical:Spacing.two}}>
                <ThemedText type="subtitle">What are you posting?</ThemedText>
                <ThemedText style={{color:theme.textSecondary}}>Choose one... this shapes the questions we ask next</ThemedText>
            </View>
        </View>
    )
}