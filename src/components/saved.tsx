import { Spacing } from "@/constants/theme";
import useHook from "@/hooks/general-hook";
import { useTheme } from "@/hooks/use-theme";
import { Location } from "@/types";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useState } from "react";
import { Pressable, TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

interface ListingProps{
    title:string;
    location:Location;
    createdAt:string;
    price:number;
    _id:string;
    images:string[];
}
interface SavedProp{
    listing:ListingProps;
    onPress:() => void;
    unlike:(index:string)=>void;
}
export default function Saved({listing, onPress, unlike}:SavedProp){
    const {title, location, createdAt, price, _id, images} = listing;
    const {timeAgo} = useHook();
    const styles = useStyles();
    const { priceFormat } = useHook();
    const [ liked, setLiked ] = useState(true);
    const theme = useTheme();
    return(
        <Pressable style={[styles.ad, {alignItems:'center'}]} onPress={onPress}>
            <View style={[styles.row, {flexShrink:1}]}>
                <Image style={styles.adImage} source={{uri:images[0]}}/>
                <View style={[styles.categoryRight]}>
                    <ThemedText style={{ fontSize:17, lineHeight:20, }} type="subtitle">{title}</ThemedText>
                    <ThemedText style={{flexShrink:1,color:theme.coralDark, marginVertical:Spacing.two}} type="bold">
                        ₦{priceFormat(price)}
                    </ThemedText>
                    <ThemedText type="small">📍 {location.city} · {timeAgo(createdAt)}</ThemedText>
                </View>
            </View>
            <TouchableOpacity onPress={()=>unlike(_id)} style={{padding:Spacing.three}}>
               <MaterialIcons name="favorite" size={22} color={'red'}/>
            </TouchableOpacity>
        </Pressable>
    )
}