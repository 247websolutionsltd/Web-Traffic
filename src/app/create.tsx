import Back from "@/components/back-button";
import Button from "@/components/button";
import Contact from "@/components/createAd/contact";
import Description from "@/components/createAd/description";
import Photos from "@/components/createAd/photos";
import Price from "@/components/createAd/price";
import Container from "@/components/custom-container";
import Label from "@/components/progressLabel";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";


export default function Create(){
    const styles = useStyles();
    const theme = useTheme();
    const [ page, setPage ] = useState(1);
    const {form} = useAuth();
    const handleNext = ()=>{
        if(page === 1){
            if(form.title && form.condition && form.category && form.description){
                console.log("title:",form);
                setPage(page+1)
            }else{
                Alert.alert("Select all fields")
            }
        }else if(page === 2){
            
            if(form.images.length >= 3){
                console.log("title:",form);
                setPage(page+1)
            }else{
                Alert.alert("Upload at least 3 images")
            }
        }else {
            if(form.price && form.city && form.state && form.quantity){
                console.log("title:",form);
                router.push("/review")
            }else{
                Alert.alert("Select all fields");
            }
        }
    }
    return(
        <Container edges={["top","bottom"]} style={{justifyContent:'space-between'}}>
            <View>

                <View style={[styles.row, {paddingHorizontal:Spacing.three}]}>
                    <TouchableOpacity onPress={()=>router.back()} style={[styles.top2Icon, {marginRight:10}]}>
                        <MaterialIcons name="arrow-back" size={23} color={theme.text}/>
                    </TouchableOpacity>
                    <ThemedText type="subtitle">Post an ad</ThemedText>
                </View>

                <Label page={page} labelNum={3}/>

                <View style={{}}>
                        {
                            page === 1 ?
                            <Description/>
                            :
                            page === 2 ?
                            <Photos/>
                            :
                            page === 3 ?
                            <Price/>
                            :
                            <Contact/>
                        }
                    </View>
                </View>
                <View style={styles.bottom}>
                    {
                        page > 1 &&
                        <Back onPress={()=>setPage(page-1)}/>
                    }
                    
                    <Button
                        onPress={handleNext} 
                        title={page===4?"Finish ":"Next "} 
                        icon={'arrow-forward'} 
                        style={{flex:1}}
                    />
                </View>
                
        </Container>
    )
}