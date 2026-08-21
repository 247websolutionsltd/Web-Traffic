import { Spacing } from "@/constants/theme";
import useHook from "@/hooks/general-hook";
import { useTheme } from "@/hooks/use-theme";
import { Location } from "@/types";
import { Image } from "expo-image";
import { TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

interface CategoryProps{
    title:string;
    location:Location;
    createdAt:string;
    price:number;
    images:string[];
}
export default function Category({listing, onPress}:{listing:CategoryProps, onPress:() => void}){
    const {title, location, createdAt, price, images} = listing
    const styles = useStyles();
    const { priceFormat } = useHook();
    const theme = useTheme();
    const { timeAgo } = useHook();
    return(
        <TouchableOpacity style={styles.category} onPress={onPress}>
            <Image style={styles.categoryImage} source={{uri:images[0]}}/>
            <View style={styles.categoryRight}>
                <ThemedText style={{ fontSize:17, lineHeight:20}} type="subtitle">{title}</ThemedText>
                <ThemedText style={{fontSize:12, lineHeight:13, paddingVertical:Spacing.one}}>📍 {location.city}, {location.state} · {timeAgo(createdAt)}</ThemedText>
                <ThemedText style={{flexShrink:1, fontSize:18, lineHeight:22, fontWeight:600, color:theme.coralDark}} >
                    ₦{priceFormat(price)}
                </ThemedText>
            </View>
        </TouchableOpacity>
    )
}
