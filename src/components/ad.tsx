import { Colors, Spacing } from "@/constants/theme";
import useHook from "@/hooks/general-hook";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

interface CategoryProps{
    title:string;
    location:string;
    postedAt:string;
    price:number;
}
export default function Ad({listing, onPress}:{listing:CategoryProps, onPress:() => void}){
    const {title, location, postedAt, price} = listing
    const styles = useStyles();
    const { priceFormat } = useHook();
    return(
        <Pressable style={styles.ad} onPress={onPress}>
            <View style={styles.row}>
                <View style={styles.adImage}/>
                <View style={[styles.categoryRight, {maxWidth:'60%'}]}>
                    <ThemedText style={{ fontSize:17, lineHeight:20, }} type="subtitle">{title}</ThemedText>
                    <ThemedText style={{flexShrink:1,color:Colors.coralDark, marginVertical:Spacing.two}} type="bold">
                        ₦{priceFormat(price)}
                    </ThemedText>
                    <ThemedText type="small">📍 {location} · {postedAt}</ThemedText>
                </View>
            </View>
            <TouchableOpacity>
                <MaterialIcons name="favorite-outline" size={22}/>
            </TouchableOpacity>
        </Pressable>
    )
}