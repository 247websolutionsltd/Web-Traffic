import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { KeyboardAvoidingView, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useStyles } from "../../../styles/styles";
import Button from "../button";
import { ThemedText } from "../themed-text";

interface NameProps{
    handleNext:()=>void
}
export default function Description({handleNext}: NameProps){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <View style={{flex:1, padding:Spacing.three, justifyContent:'space-between'}}>
            <View style={{flex:1}}>
                <View>
                    <ThemedText type="subtitle">What does Vix Fashion sell?</ThemedText>
                    {/* <ThemedText>Pick a primary category and describe your store</ThemedText> */}
                </View>

                <KeyboardAvoidingView style={{marginVertical:Spacing.three}}>
                    <View style={{marginVertical:Spacing.two}}>
                        <ThemedText>Store description</ThemedText>
                        <TextInput
                            placeholder="Enter your store handle"
                            placeholderTextColor={theme.textSecondary}
                            style={styles.input2}
                            multiline
                        />
                    </View>
                    <View style={{marginVertical:Spacing.two}}>
                        <ThemedText>Store handle</ThemedText>
                        <View style={[styles.inputView, ]}>
                            <ThemedText>📍</ThemedText>
                            <TextInput
                                placeholder="Where is your store located"
                                placeholderTextColor={theme.textSecondary}
                                style={styles.input}
                            />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
            <Button title="Continue " onPress={handleNext} icon={"arrow-forward"}/>
        </View>
    )
}