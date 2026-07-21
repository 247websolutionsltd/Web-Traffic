import MaterialIcons from "@react-native-vector-icons/material-icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useStyles } from "../../styles/styles";

export default function Back({onPress}:TouchableOpacityProps){
    const styles = useStyles();
    return(
        <TouchableOpacity style={styles.backButton} onPress={onPress}>
            <MaterialIcons name="arrow-back" size={22} color={'#000'}/>
        </TouchableOpacity>
    )
}