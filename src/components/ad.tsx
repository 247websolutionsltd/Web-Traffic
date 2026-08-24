import { Colors, Spacing } from "@/constants/theme";
import { useAuth } from "@/context/AuthContext";
import useHook from "@/hooks/general-hook";
import { useTheme } from "@/hooks/use-theme";
import { Image } from "expo-image";
import { Pressable, TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

interface AdProps{
    id: string;
    condition: string;
    onPress:() => void, 
    onOption:()=>void
}
export default function Ad({id, onPress, condition, onOption}:AdProps){
    const { listings } = useAuth()
    const {
        images, 
        title, 
        price,
        createdAt
    } = listings.filter((obj: { _id: string; })=>obj._id===id)[0];
    const { timeAgo } = useHook();
    const styles = useStyles();
    const theme = useTheme();
    const { priceFormat } = useHook();
    return(
        <Pressable style={styles.ad} onPress={onPress}>
            <View style={[styles.row, {flexShrink:1}]}>
                <Image style={styles.adImage}  source={{uri:images[0]}}/>
                <View style={[styles.categoryRight, ]}>
                    <ThemedText style={{ fontSize:17, lineHeight:20 }} type="subtitle">{title}</ThemedText>
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
                                    backgroundColor:condition==="Live" ? 'green' : condition==="Expired" ? 'grey': Colors.gold
                                }
                            ]
                        }
                        />
                        <ThemedText type="small">{condition}</ThemedText>
                    </View>
                    <View style={styles.row}>
                        {/* <ThemedText type="small" style={{marginRight:Spacing.three}}>👁 {views} views</ThemedText> */}
                        <ThemedText type="small" style={{flexWrap:'wrap', }}>🕐 {timeAgo(createdAt)}</ThemedText>
                        <ThemedText type="small" style={{marginLeft:Spacing.two}}>💬 chats</ThemedText>
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