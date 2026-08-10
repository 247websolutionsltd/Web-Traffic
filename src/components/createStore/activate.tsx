import { Colors, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { View } from "react-native";
import { useStyles } from "../../../styles/styles";
import Button from "../button";
import { ThemedText } from "../themed-text";

interface NameProps{
    handleNext:()=>void
}
export default function Activate({handleNext}: NameProps){
    const styles = useStyles();
    const theme = useTheme();
    const data = [
        {
            key:"Name",
            value:"Vix Fashion"
        },
        {
            key:"Handle",
            value:"@vixfashion"
        },
        {
            key:"Category",
            value:"Fashion"
        },
        {
            key:"Location",
            value:"Ikeja, Lagos"
        },
        {
            key:"Plan Required",
            value:"Business"
        },
    ]
    return(
        <View style={{flex:1, padding:Spacing.three, justifyContent:'space-between'}}>
            <View style={{flex:1}}>
                <View>
                    <ThemedText type="subtitle">Review your store</ThemedText>
                    <ThemedText>You can edit any of this later from Store settings</ThemedText>
                </View>

                <View style={styles.storeInfoView}>
                    {
                        data.map((item, index)=>(
                            <View key={index} style={[styles.storeReviewInfo, {borderBottomWidth:index===data.length-1?0:1}]}>
                                <ThemedText>{item.key}</ThemedText>
                                <ThemedText style={{fontWeight:700, color:index===data.length-1?Colors.coral:theme.text}}>
                                    {item.value}
                                </ThemedText>
                            </View>
                        ))
                    }
                </View>
            </View>
            <Button title="Activate Store " onPress={handleNext} icon={"arrow-forward"}/>
        </View>
    )
}