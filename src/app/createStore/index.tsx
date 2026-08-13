import Button from "@/components/button";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "../../../styles/styles";

export default function CreateStore(){
    const theme = useTheme();
    const styles = useStyles();
    const store: string[] = ["hd"];

    useEffect(()=>{
        if(store.length>0){
            router.replace('/createStore/store')
        }
    },[])
    return(
        <SafeAreaView style={{flex:1, backgroundColor:theme.paper}}>
            <View style={[styles.row, {paddingHorizontal:Spacing.three}]}>
                <TouchableOpacity onPress={()=>router.back()} style={[styles.top2Icon, {marginRight:Spacing.two}]}>
                    <MaterialIcons name="arrow-back" size={23} color={theme.text}/>
                </TouchableOpacity>
                <ThemedText type="subtitle">Create Store</ThemedText>
            </View>
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <MaterialIcons name="store" color={theme.text} size={70}/>
                <ThemedText type="subtitle">
                    You are yet to set up a store 
                </ThemedText>
                <Button
                title="Create a Store" 
                onPress={()=>router.push('/createStore/create')} 
                style={{paddingHorizontal:Spacing.three, marginVertical:Spacing.three}}
                />
             </View>
        </SafeAreaView>
    )
}