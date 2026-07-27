import { Colors, Spacing } from "@/constants/theme";
import useHook from "@/hooks/general-hook";
import { useTheme } from "@/hooks/use-theme";
import { Pressable, TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

interface CategoryProps{
    title:string;
    location:string;
    postedAt:string;
    price:number;
}
interface AdProps{
    listing:CategoryProps, 
    onPress:() => void, 
    type?:string,
    onOption:()=>void
}
export default function Ad({listing, onPress, type="live", onOption}:AdProps){
    const {title, location, postedAt, price} = listing
    const styles = useStyles();
    const theme = useTheme();
    const { priceFormat } = useHook();
    return(
        <Pressable style={styles.ad} onPress={onPress}>
            <View style={styles.row}>
                <View style={styles.adImage}/>
                <View style={[styles.categoryRight, ]}>
                    <ThemedText style={{ fontSize:17, lineHeight:20, }} type="subtitle">{title}</ThemedText>
                    <ThemedText style={{flexShrink:1,color:theme.coralDark, marginVertical:Spacing.two}} type="bold">
                        ₦{priceFormat(price)}
                    </ThemedText>
                    <View style={[styles.row, {marginBottom:Spacing.two}]}>
                        <View 
                        style={
                            [
                                styles.adType, 
                                {
                                    marginRight:Spacing.one, 
                                    backgroundColor:type==="live" ? 'green' : Colors.gold
                                }
                            ]
                        }
                        />
                        <ThemedText type="small">{type==="live" ? 'Live' : "Expiring in 2 days"}</ThemedText>
                    </View>
                    <View style={styles.row}>
                        <View style={{marginRight:Spacing.three}}>
                            <ThemedText type="small" style={{textAlign:'center'}}>👁 198</ThemedText>
                            <ThemedText type="small" style={{textAlign:'center'}}>views</ThemedText>
                        </View>
                        <View>
                            <ThemedText type="small" style={{textAlign:'center'}}>💬 </ThemedText>
                            <ThemedText type="small" style={{textAlign:'center'}}>chats</ThemedText>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{padding:Spacing.three}} onPress={onOption}>
                <View>
                    <View style={styles.optionCircle}/>
                    <View style={styles.optionCircle}/>
                    <View style={styles.optionCircle}/>
                </View>
            </TouchableOpacity>
        </Pressable>
    )
}