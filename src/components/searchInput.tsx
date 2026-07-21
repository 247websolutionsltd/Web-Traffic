import { Radius, Spacing } from "@/constants/theme";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { TextInput, View } from "react-native";
import { useStyles } from "../../styles/styles";

export default function Search(){
    const styles = useStyles();
    return(
        <View style={[styles.row, {backgroundColor:'#FFF', padding:Spacing.two, borderRadius:Radius.md}]}>
            <MaterialIcons name="search" size={20} style={{marginRight:Spacing.one}}/>
            <TextInput 
                style={[styles.input, {fontSize:17}]} 
                placeholder="Search cars, phones, homes…"
            />
        </View>
    )
}