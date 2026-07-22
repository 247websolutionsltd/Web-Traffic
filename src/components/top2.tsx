import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";

export default function Top(){
    const styles = useStyles();
    return(
        <View style={styles.top2}>
            <TouchableOpacity onPress={()=>router.back()} style={styles.top2Icon}>
                <MaterialIcons name="arrow-back" size={23}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>router.back()} style={styles.top2Icon}>
                <MaterialIcons name="favorite" size={22}/>
            </TouchableOpacity>
        </View>
    )
}