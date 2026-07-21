import MaterialIcons from "@react-native-vector-icons/material-icons";
import { router } from "expo-router";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

interface TopProps{
    title?: string;
    search?: boolean;
    filter?: boolean;
    style?: StyleProp<ViewStyle>;
}
export default function Top({title="", search, filter, style}:TopProps){
    const styles = useStyles();
    return(
        <View style={[styles.topView, style]}>
            <TouchableOpacity onPress={()=>router.back()} style={styles.topIcon}>
                <MaterialIcons name="arrow-back" size={22}/>
            </TouchableOpacity>
            <View/>
            <View><ThemedText type="subtitle">{title}</ThemedText></View>
            {
                search ?
                <TouchableOpacity onPress={()=>router.back()} style={styles.topIcon}>
                    <MaterialIcons name="search" size={22}/>
                </TouchableOpacity>
                :
                filter ?
                <TouchableOpacity onPress={()=>router.back()} style={[styles.topIcon, {right:0}]}>
                    <MaterialIcons name="filter-list" size={22}/>
                </TouchableOpacity>
                
                :
                <View/>
            }
            <View/>
        </View>
    )
}