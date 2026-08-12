import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { TextInput, View } from "react-native";
import { useStyles } from "../../../styles/styles";
import CreateToggleCard from "../createToggleCard";
import { ThemedText } from "../themed-text";

export default function Contact(){
    const theme = useTheme();
    const styles = useStyles();
    return(
        <View style={{flex:1}}>
            <View style={{margin:Spacing.two, paddingHorizontal:Spacing.two}}>
                <ThemedText type="subtitle">How should buyers reach you?</ThemedText>
                <ThemedText style={{color:theme.textSecondary}}>You can change this any time from your listings</ThemedText>
            </View>

            <View style={{marginVertical:Spacing.two, paddingHorizontal:Spacing.three}}>
                <ThemedText>Phone Number</ThemedText>
                <View style={[styles.inputView, ]}>
                    <ThemedText>🇳🇬</ThemedText>
                    <TextInput
                        placeholder="Enter your Phone Number"
                        placeholderTextColor={theme.textSecondary}
                        style={styles.input}
                        keyboardType="numeric"
                    />
                </View>
            </View>

            <View style={{marginVertical:Spacing.two, paddingHorizontal:Spacing.three}}>
                <CreateToggleCard
                 title="Allow in-app chat" 
                 icon="chatbubble-ellipses" 
                 desc="Buyers can message you directly"
                />
            </View>
            <View style={{marginVertical:Spacing.two, paddingHorizontal:Spacing.three}}>
                <CreateToggleCard
                 title="Allow phone calls" 
                 icon="call" 
                 desc="Your number shows on the listing"
                />
            </View>

        </View>
    )
}