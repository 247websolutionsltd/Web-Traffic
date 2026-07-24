import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";

export default function Top(){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <View style={styles.top2}>
            <TouchableOpacity onPress={()=>router.back()} style={styles.top2Icon}>
                <MaterialIcons name="arrow-back" size={23} color={theme.text}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>router.back()} style={styles.top2Icon}>
                <MaterialIcons name="favorite" size={22} color={theme.text}/>
            </TouchableOpacity>
        </View>
    )
}