import { Colors } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { ActivityIndicator, View } from "react-native";
import { useStyles } from "../../styles/styles";

export default function Load(){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <View style={styles.loadView}>
            <ActivityIndicator size={50} color={Colors.coral}/>
        </View>
    )
}