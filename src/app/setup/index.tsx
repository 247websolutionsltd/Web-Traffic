import Button from "@/components/button";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import useAuthentication from "@/hooks/authHook";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useStyles } from "../../../styles/styles";

export default function AddDp(){
    const styles = useStyles();
    const {image, changeProfileImage} = useAuthentication();
    return(
        <Container style={{paddingHorizontal:Spacing.three, justifyContent:'space-between'}} edges={['top', 'bottom']}>
            <View>
                <TouchableOpacity style={{alignSelf:'flex-end'}} onPress={()=>console.log("Hii")}>
                    <ThemedText themeColor="textSecondary">Skip</ThemedText>
                </TouchableOpacity>
                <View style={{marginVertical:Spacing.three}}>
                    <ThemedText style={{textAlign:'center', lineHeight:30}} type="title">Add a profile photo</ThemedText>
                    <ThemedText style={{textAlign:'center', marginTop:10}}>Listings from sellers with a photo get more replies</ThemedText>
                </View>
                <TouchableOpacity style={styles.upload1} onPress={changeProfileImage}>
                    {
                        image ?
                        <Image source={{uri:image}} style={{width:"100%", height:"100%", borderRadius:600}}/> 
                        :
                        <ThemedText style={{fontSize:50, lineHeight:60}}>📷</ThemedText>
                    }
                    {
                        !image &&
                        <View style={styles.editBadge}>
                            <MaterialIcons name="add" size={14} color={'#FFF'}/>
                        </View>
                    }
                </TouchableOpacity>
                <View style={{marginVertical:Spacing.four}}>
                    <ThemedText style={{marginBottom:5}}>Your location</ThemedText>
                    <View style={styles.inputView}>
                        <ThemedText>📍</ThemedText>
                        <TextInput style={styles.input} />
                    </View>
                </View>
            </View>
            <Button title="Continue" onPress={()=>router.navigate('/setup/set')} icon={"arrow-forward" }/>
        </Container>
    )
}