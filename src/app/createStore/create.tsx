import Activate from "@/components/createStore/activate";
import Description from "@/components/createStore/description";
import Name from "@/components/createStore/storeName";
import Container from "@/components/custom-container";
import Label from "@/components/progressLabel";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { useStyles } from "../../../styles/styles";

export default function Create(){
    const styles = useStyles();
    const theme = useTheme();
    const [ page, setPage ] = useState(1);
    return(
        <Container edges={['top','bottom']}>
            <View style={[styles.row, {paddingHorizontal:Spacing.three}]}>
                <TouchableOpacity onPress={()=>page < 2 ? router.back() : setPage(page - 1)} style={[styles.top2Icon, {marginRight:Spacing.two}]}>
                    <MaterialIcons name="arrow-back" size={23} color={theme.text}/>
                </TouchableOpacity>
                <ThemedText type="subtitle">Create Store</ThemedText>
            </View>

            <Label page={page}/>

            {
                page === 1 ?
                <Name handleNext={()=>setPage(page + 1)}/>
                :
                page === 2 ?
                <Description handleNext={()=>setPage(page + 1)}/>
                :
                <Activate handleNext={()=>console.log(page)}/>
            }
        </Container>
    )
}