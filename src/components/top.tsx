import { Spacing } from "@/constants/theme";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

interface TopProps{
    title?: string;
    search?: boolean;

}
export default function Top({title="", search}:TopProps){
    const styles = useStyles();
    return(
        <View style={styles.topView}>
            <TouchableOpacity onPress={()=>router.back()} style={{position:'absolute', paddingVertical:Spacing.two}}>
                <MaterialIcons name="arrow-back" size={22}/>
            </TouchableOpacity>
            <View/>
            <View><ThemedText type="subtitle">{title}</ThemedText></View>
            {
                search ?
                <MaterialIcons name="search" size={22}/>
                :
                <View/>
            }
        </View>
    )
}