import { Colors, Spacing } from "@/constants/theme";
import { useAuth } from "@/context/AuthContext";
import { categoryDropdown } from "@/data/mock";
import { useTheme } from "@/hooks/use-theme";
import { View } from "react-native";
import { useStyles } from "../../../styles/styles";
import Back from "../back-button";
import Button from "../button";
import { ThemedText } from "../themed-text";

interface NameProps{
    handleNext:()=>void;
    handleBack: ()=>void;
}
export default function Activate({handleNext, handleBack}: NameProps){
    const styles = useStyles();
    const theme = useTheme();
    const { storeForm} = useAuth();
    const category = categoryDropdown.find((dat)=>dat.value===storeForm.category)?.label;
    return(
        <View style={{flex:1, padding:Spacing.three, justifyContent:'space-between'}}>
            <View style={{flex:1}}>
                <View>
                    <ThemedText type="subtitle">Review your store</ThemedText>
                    <ThemedText>You can edit any of this later from Store settings</ThemedText>
                </View>

                <View style={styles.storeInfoView}>
                    <View style={[styles.storeReviewInfo, {borderBottomWidth:1}]}>
                        <ThemedText>Name</ThemedText>
                        <ThemedText style={{fontWeight:700, color:theme.text}}>
                            {storeForm.name}
                        </ThemedText>
                    </View>
                    <View style={[styles.storeReviewInfo, {borderBottomWidth:1}]}>
                        <ThemedText>Handle</ThemedText>
                        <ThemedText style={{fontWeight:700, color:theme.text}}>
                            @{storeForm.handle}
                        </ThemedText>
                    </View>
                    <View style={[styles.storeReviewInfo, {borderBottomWidth:1}]}>
                        <ThemedText>Category</ThemedText>
                        <ThemedText style={{fontWeight:700, color:theme.text}}>
                            {category}
                        </ThemedText>
                    </View>
                    <View style={[styles.storeReviewInfo, {borderBottomWidth:1}]}>
                        <ThemedText>Location</ThemedText>
                        <ThemedText style={{fontWeight:700, color:theme.text}}>
                            {storeForm.city}, {storeForm.state}
                        </ThemedText>
                    </View>
                    <View style={[styles.storeReviewInfo, {borderBottomWidth:0}]}>
                        <ThemedText>Plan Required</ThemedText>
                        <ThemedText style={{fontWeight:700, color:Colors.coral}}>
                            Business
                        </ThemedText>
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <Back onPress={handleBack}/> 
                <Button title="Activate Store " onPress={handleNext} icon={"arrow-forward"} style={{flex:1}}/>
            </View>
        </View>
    )
}