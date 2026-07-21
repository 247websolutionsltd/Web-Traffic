import Button from "@/components/button";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { router } from "expo-router";
import { View } from "react-native";
import { useStyles } from "../../../styles/styles";

export default function AddDp(){
    const styles = useStyles();
    return(
        <Container style={{paddingHorizontal:Spacing.three, justifyContent:'center'}} edges={['top', 'bottom']}>
            <View style={styles.checkView}>
                <MaterialIcons name="check" size={34}/>
            </View>
            <View style={{marginVertical:Spacing.four}}>
                <ThemedText style={{textAlign:'center', lineHeight:30}} type="title">You're all set, Tunde</ThemedText>
                <ThemedText style={{textAlign:'center', marginTop:10}}>Your account is ready. Start browsing or post your first ad in under a minute.</ThemedText>
            </View>
            <Button title="Start Browsing" onPress={()=>router.navigate("/(tabs)")} icon={"arrow-forward" }/>
        </Container>
    )
}