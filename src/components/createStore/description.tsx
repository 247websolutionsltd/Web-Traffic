import { Spacing } from "@/constants/theme";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/hooks/use-theme";
import { KeyboardAvoidingView, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useStyles } from "../../../styles/styles";
import Back from "../back-button";
import Button from "../button";
import { ThemedText } from "../themed-text";

interface NameProps{
    handleNext:()=>void;
    handleBack: ()=>void;
}
export default function Description({handleNext, handleBack}: NameProps){
    const styles = useStyles();
    const theme = useTheme();
    const { storeForm, updateStoreField } = useAuth();
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
                            placeholder="Deacribe your store"
                            placeholderTextColor={theme.textSecondary}
                            style={styles.input2}
                            multiline
                            value={storeForm.description}
                            onChangeText={(value) =>
                            updateStoreField("description", value)
                            }
                        />
                    </View>
                    <View style={{marginVertical:Spacing.two}}>
                        <ThemedText>City</ThemedText>
                        <View style={[styles.inputView, ]}>
                            <ThemedText>📍</ThemedText>
                            <TextInput
                                placeholder="What city is your store located?"
                                placeholderTextColor={theme.textSecondary}
                                style={styles.input}
                                value={storeForm.city}
                                onChangeText={(value) =>
                                updateStoreField("city", value)
                                }
                            />
                        </View>
                    </View>

                    <View style={{marginVertical:Spacing.two}}>
                        <ThemedText>State</ThemedText>
                        <View style={[styles.inputView, ]}>
                            <TextInput
                                placeholder="What state is your store located?"
                                placeholderTextColor={theme.textSecondary}
                                style={styles.input}
                                value={storeForm.state}
                                onChangeText={(value) =>
                                    updateStoreField("state", value)
                                }
                            />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
            <View style={styles.row}>
                <Back onPress={handleBack}/> 
                <Button title="Continue " onPress={handleNext} icon={"arrow-forward"} style={{flex:1}}/>
            </View>
        </View>
    )
}