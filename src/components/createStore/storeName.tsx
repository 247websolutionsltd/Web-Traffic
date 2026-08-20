import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { KeyboardAvoidingView, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useStyles } from "../../../styles/styles";
import Button from "../button";
import { ThemedText } from "../themed-text";

interface NameProps{
    handleNext:()=>void;
    handleTitle:React.Dispatch<React.SetStateAction<string>>;
}
export default function Name({handleNext, handleTitle}: NameProps){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <View style={{flex:1, padding:Spacing.three, justifyContent:'space-between'}}>
            <View style={{flex:1}}>
                <View>
                    <ThemedText type="subtitle">Give your store a name</ThemedText>
                    <ThemedText>This is how buyers will find and remember you</ThemedText>
                </View>

                <View style={styles.storeAddImageView}>
                    <MaterialIcons name="add-business" size={50} color={theme.text}/>
                </View>

                <KeyboardAvoidingView>
                    <View style={{marginVertical:Spacing.two}}>
                        <ThemedText>Store name</ThemedText>
                        <View style={[styles.inputView, ]}>
                            <TextInput
                            placeholder="Enter your store name"
                            placeholderTextColor={theme.textSecondary}
                            style={styles.input}
                            onChangeText={(text)=>handleTitle(text)}
                            />
                        </View>
                    </View>
                    <View style={{marginVertical:Spacing.two}}>
                        <ThemedText>Store handle</ThemedText>
                        <View style={[styles.inputView, ]}>
                            <TextInput
                            placeholder="Enter your store handle"
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