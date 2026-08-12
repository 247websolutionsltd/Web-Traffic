import Button from "@/components/button";
import Contact from "@/components/createAd/contact";
import Description from "@/components/createAd/description";
import Photos from "@/components/createAd/photos";
import Price from "@/components/createAd/price";
import Container from "@/components/custom-container";
import Label from "@/components/progressLabel";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";


export default function Create(){
    const styles = useStyles();
    const theme = useTheme();
    const [ page, setPage ] = useState(1);
    const handleNext = ()=>{
        if (page === 4){
            router.push("/review")
        }else {setPage(page+1)}
    }
    return(
        <Container edges={["top","bottom"]} style={{justifyContent:'space-between'}}>
            <View>

                <View style={[styles.row, {paddingHorizontal:Spacing.three}]}>
                    <TouchableOpacity onPress={()=>page === 1 ?router.back() : setPage(page-1)} style={[styles.top2Icon, {marginRight:10}]}>
                        <MaterialIcons name="arrow-back" size={23} color={theme.text}/>
                    </TouchableOpacity>
                    <ThemedText type="subtitle">Post an ad</ThemedText>
                </View>

                <Label page={page} labelNum={4}/>

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

                <Button
                    onPress={handleNext} 
                    title={page===4?"Finish ":"Next "} 
                    icon={'arrow-forward'} 
                    style={{margin:Spacing.three}}
                />
        </Container>
    )
}