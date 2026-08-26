import { Colors, Spacing } from "@/constants/theme";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { useStyles } from "../../../styles/styles";
import ImageUpload from "../imageUpload";
import { ThemedText } from "../themed-text";

export default function Photos(){
    const theme = useTheme();
    const styles = useStyles();
    const {form, readyImage,} = useAuth();
    const labelNumber = Array.from({ length:  6-form.images.length}, () => ({})); 
    return(
        <View style={{flex:1}}>
            <View style={{margin:Spacing.two, paddingHorizontal:Spacing.two}}>
                <ThemedText type="subtitle">Add your photos</ThemedText>
                <ThemedText style={{color:theme.textSecondary}}>Listings with 3+ photos get seen twice as often</ThemedText>
            </View>

            <View style={styles.uploadImages}>
                {
                    form.images.map((item, index)=>(
                        <View key={index} style={{width:'33.33%', padding:Spacing.two}}>
                            <ImageUpload
                                image={item}
                                cover={index===0}
                                index={index}
                            />
                            
                        </View>
                    ))
                }
                {
                    labelNumber.map((i, index)=>(
                        <View key={index} style={{width:'33.33%', padding:Spacing.two}}>
                            <TouchableOpacity style={styles.uploadEmpty} onPress={readyImage}>
                                <MaterialIcons name="add" size={18} color={Colors.coral}/>
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </View>

            <View style={[styles.boostInfo, {margin:Spacing.three}]}>
                <ThemedText style={{color:"#8A5A0F"}} type="small">
                    💡 Use natural light and show any wear or damage honestly — it builds buyer trust and means fewer back-and-forth questions.
                </ThemedText>
            </View>
        </View>
    )
}