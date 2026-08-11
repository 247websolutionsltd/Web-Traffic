import { Colors, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Dimensions, View } from "react-native";
import { useStyles } from "../../styles/styles";

interface LabelProps{
    page: number;
    labelNum?:number;
}
export default function Label({page, labelNum=3}:LabelProps){
    const styles = useStyles();
    const theme = useTheme();
    const labelNumber = Array.from({ length: labelNum }, () => ({})); 
    const { width } = Dimensions.get("window");
    const labelWidth = (width-Spacing.five)/labelNum
    return(
        <View style={styles.createLabelView}>
            {
                labelNumber.map((i, index)=>(
                    <View style={{width:labelWidth, paddingHorizontal:Spacing.one}} key={index}>
                        <View style={[styles.createLabel, {backgroundColor:page > index ? Colors.coral : theme.textSecondary}]}/>
                    </View>
                ))
            }
        </View>
    )
}