import useHook from "@/hooks/general-hook";
import { useTheme } from "@/hooks/use-theme";
import { Pressable, View } from "react-native";
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
    const theme = useTheme();
    return(
        <Pressable style={styles.category} onPress={onPress}>
            <View style={styles.categoryImage}/>
            <View style={styles.categoryRight}>
                <ThemedText style={{ fontSize:17, lineHeight:20}} type="subtitle">{title}</ThemedText>
                <ThemedText type="small">📍 {location} · {postedAt}</ThemedText>
                <ThemedText style={{flexShrink:1, fontSize:18, lineHeight:22, fontWeight:600, color:theme.coralDark}} >
                    ₦{priceFormat(price)}
                </ThemedText>
            </View>
        </Pressable>
    )
}