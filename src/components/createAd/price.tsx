import { Colors, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { TextInput, View } from "react-native";
import { useStyles } from "../../../styles/styles";
import Radio from "../radio";
import { ThemedText } from "../themed-text";

export default function Price(){
    const theme = useTheme();
    const styles = useStyles();
    return(
        <View style={{flex:1}}>
            <View style={{margin:Spacing.two, paddingHorizontal:Spacing.two}}>
                <ThemedText type="subtitle">Set your price</ThemedText>
                <ThemedText style={{color:theme.textSecondary}}>Fair pricing gets more replies from serious buyers</ThemedText>
            </View>

            <View style={{paddingHorizontal:Spacing.three}}>
              <View style={{marginVertical:Spacing.two}}>
                    <ThemedText>Price</ThemedText>
                    <View style={[styles.inputView, ]}>
                        <ThemedText>₦</ThemedText>
                        <TextInput
                            placeholder="Set your price"
                            placeholderTextColor={theme.textSecondary}
                            style={styles.input}
                            keyboardType="numeric"
                        />
                    </View>
                </View>
            </View>

            <View style={styles.negotiable}>
                <ThemedText style={{fontWeight:600}}>Price is negotiable</ThemedText>
                <Radio activeColor={Colors.coral} inactiveColor={theme.line}/>
            </View>

            <View style={{paddingHorizontal:Spacing.three}}>
              <View style={{marginVertical:Spacing.two}}>
                    <ThemedText>Location</ThemedText>
                    <View style={[styles.inputView, ]}>
                        <ThemedText>📍</ThemedText>
                        <TextInput
                            placeholder="Enter your location"
                            placeholderTextColor={theme.textSecondary}
                            style={styles.input}
                            keyboardType="numeric"
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}