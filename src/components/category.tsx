import { Colors } from "@/constants/theme";
import useHook from "@/hooks/general-hook";
import { View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

interface CategoryProps{
    title:string;
    location:string;
    postedAt:string;
    price:number;
}
export default function Category({listing, onPress}:{listing:CategoryProps, onPress:() => void}){
    const {title, location, postedAt, price} = listing
    const styles = useStyles();
    const { priceFormat } = useHook();
    return(
        <View style={styles.category}>
            <View style={styles.categoryImage}/>
            <View style={styles.categoryRight}>
                <ThemedText style={{ fontSize:17, lineHeight:20}} type="subtitle">{title}</ThemedText>
                <ThemedText type="small">📍 {location} · {postedAt}</ThemedText>
                <ThemedText style={{flexShrink:1, fontSize:18, lineHeight:22, fontWeight:600, color:Colors.coralDark}} >
                    ₦{priceFormat(price)}
                </ThemedText>
            </View>
        </View>
    )
}