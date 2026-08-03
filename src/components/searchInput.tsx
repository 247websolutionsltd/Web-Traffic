import { Radius, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
import { useStyles } from "../../styles/styles";

export default function Search({placeholder}:{placeholder:string;}){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <View style={[styles.row, {backgroundColor:theme.card, padding:Spacing.two, borderRadius:Radius.md}]}>
            <MaterialIcons name="search" size={20} style={{marginRight:Spacing.one}} color={theme.textSecondary}/>
            <TextInput 
                style={[styles.input, {fontSize:17}]} 
                placeholder={placeholder}
                placeholderTextColor={theme.textSecondary}
            />
        </View>
    )
}