import { Spacing } from "@/constants/theme";
import useHook from "@/hooks/general-hook";
import { useTheme } from "@/hooks/use-theme";
import { Image } from "expo-image";
import { TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

interface CategoryProps{
    title:string;
    location:string;
    postedAt:string;
    price:number;
    image:string;
}
export default function Category({listing, onPress}:{listing:CategoryProps, onPress:() => void}){
    const {title, location, postedAt, price, image} = listing
    const styles = useStyles();
    const { priceFormat } = useHook();
    const theme = useTheme();
    return(
        <TouchableOpacity style={styles.category} onPress={onPress}>
            <Image style={styles.categoryImage} source={{uri:image}}/>
            <View style={styles.categoryRight}>
                <ThemedText style={{ fontSize:17, lineHeight:20}} type="subtitle">{title}</ThemedText>
                <ThemedText style={{fontSize:12, lineHeight:13, paddingVertical:Spacing.one}}>📍 {location} · {postedAt}</ThemedText>
                <ThemedText style={{flexShrink:1, fontSize:18, lineHeight:22, fontWeight:600, color:theme.coralDark}} >
                    ₦{priceFormat(price)}
                </ThemedText>
            </View>
        </TouchableOpacity>
    )
}