import { Spacing } from "@/constants/theme";
import { useAuth } from "@/context/AuthContext";
import useHook from "@/hooks/general-hook";
import { useTheme } from "@/hooks/use-theme";
import { TextInput, View } from "react-native";
import { useStyles } from "../../../styles/styles";
import { ThemedText } from "../themed-text";

export default function Price(){
    const theme = useTheme();
    const styles = useStyles();
    const {form, updateField} = useAuth();
    const {priceFormat} = useHook()
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
                            value={form.price}
                            onChangeText={(value) => updateField("price", value)}
                            placeholder="Set your price"
                            placeholderTextColor={theme.textSecondary}
                            style={styles.input}
                            keyboardType="numeric"
                        />
                    </View>
                </View>
            </View>

            {/* <View style={styles.negotiable}>
                <ThemedText style={{fontWeight:600}}>Price is negotiable</ThemedText>
                <Radio activeColor={Colors.coral} inactiveColor={theme.line} onToggle={()=>console.log("Hii")}/>
            </View> */}

            <View style={{paddingHorizontal:Spacing.three}}>
              <View style={{marginVertical:Spacing.two}}>
                    <ThemedText>City</ThemedText>
                    <View style={[styles.inputView, ]}>
                        <ThemedText>📍</ThemedText>
                        <TextInput
                            value={form.city}
                            onChangeText={(value) => updateField("city", value)}
                            placeholder="Enter your city"
                            placeholderTextColor={theme.textSecondary}
                            style={styles.input}
                        />
                    </View>
                </View>
            </View>

            <View style={{paddingHorizontal:Spacing.three}}>
              <View style={{marginVertical:Spacing.two}}>
                    <ThemedText>State</ThemedText>
                    <View style={[styles.inputView, ]}>
                        <TextInput
                            value={form.state}
                            onChangeText={(value) => updateField("state", value)}
                            placeholder="Enter your state"
                            placeholderTextColor={theme.textSecondary}
                            style={styles.input}
                        />
                    </View>
                </View>
            </View>
            
            <View style={{paddingHorizontal:Spacing.three}}>
              <View style={{marginVertical:Spacing.two}}>
                    <ThemedText>Quantity</ThemedText>
                    <View style={[styles.inputView, ]}>
                        <TextInput
                            value={form.quantity}
                            onChangeText={(value) => updateField("quantity", value)}
                            placeholder="How many items?"
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