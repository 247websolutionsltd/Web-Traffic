import { Spacing } from "@/constants/theme";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { KeyboardAvoidingView, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useStyles } from "../../../styles/styles";
import Back from "../back-button";
import Button from "../button";
import Dropdown from "../dropdownStore";
import { ThemedText } from "../themed-text";

interface NameProps{
    handleNext:()=>void;
    handleBack: ()=>void;

}
export default function Name({handleNext, handleBack}: NameProps){
    const styles = useStyles();
    const theme = useTheme();
    const { readyStoreImage, storeForm, updateStoreField } = useAuth();
    
    return(
        <View style={{flex:1, padding:Spacing.three, justifyContent:'space-between'}}>
            <View style={{flex:1}}>
                <View>
                    <ThemedText type="subtitle">Give your store a name</ThemedText>
                    <ThemedText>This is how buyers will find and remember you</ThemedText>
                </View>

                <TouchableOpacity style={[styles.storeAddImageView, {borderStyle:storeForm.image?'solid':'dashed'}]} onPress={readyStoreImage}>
                    {
                        storeForm.image.uri?
                        <Image style={{width:'100%', height:'100%', borderRadius:24}} source={{uri:storeForm.image.uri}}/>
                        :
                        <MaterialIcons name="add-business" size={50} color={theme.text}/>
                    }
                </TouchableOpacity>

                <KeyboardAvoidingView>
                    <View style={{marginVertical:Spacing.two}}>
                        <ThemedText>Store name</ThemedText>
                        <View style={[styles.inputView, ]}>
                            <TextInput
                                placeholder="Enter your store name"
                                placeholderTextColor={theme.textSecondary}
                                style={styles.input}
                                value={storeForm.name}
                                onChangeText={(value) =>
                                updateStoreField("name", value)
                                }
                            />
                        </View>
                    </View>
                    <View style={{marginVertical:Spacing.two}}>
                        <ThemedText>Category</ThemedText>
                        <Dropdown/>
                    </View>
                    <View style={{marginVertical:Spacing.two}}>
                        <ThemedText>Store handle</ThemedText>
                        <View style={[styles.inputView, ]}>
                            <ThemedText>@</ThemedText>
                            <TextInput
                                placeholder="Enter your store handle"
                                placeholderTextColor={theme.textSecondary}
                                style={styles.input}
                                value={storeForm.handle}
                                onChangeText={(value) =>
                                updateStoreField("handle", value)
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