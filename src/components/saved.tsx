import { Spacing } from "@/constants/theme";
import useHook from "@/hooks/general-hook";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useState } from "react";
import { Pressable, TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

interface ListingProps{
    title:string;
    location:string;
    postedAt:string;
    price:number;
    id:string;
    image:string;
}
interface SavedProp{
    listing:ListingProps;
    onPress:() => void;
    unlike:(index:string)=>void;
}
export default function Saved({listing, onPress, unlike}:SavedProp){
    const {title, location, postedAt, price, id, image} = listing
    const styles = useStyles();
    const { priceFormat } = useHook();
    const [ liked, setLiked ] = useState(true);
    const theme = useTheme();
    const handleUnlike = (index:string)=>{
        setLiked(!liked);
        unlike(index)
    }
    return(
        <Pressable style={[styles.ad, {alignItems:'center'}]} onPress={onPress}>
            <View style={[styles.row, {flexShrink:1}]}>
                <Image style={styles.adImage} source={{uri:image}}/>
                <View style={[styles.categoryRight]}>
                    <ThemedText style={{ fontSize:17, lineHeight:20, }} type="subtitle">{title}</ThemedText>
                    <ThemedText style={{flexShrink:1,color:theme.coralDark, marginVertical:Spacing.two}} type="bold">
                        ₦{priceFormat(price)}
                    </ThemedText>
                    <ThemedText type="small">📍 {location} · {postedAt}</ThemedText>
                </View>
            </View>
            <TouchableOpacity onPress={()=>handleUnlike(id)} style={{padding:Spacing.three}}>
               <MaterialIcons name="favorite" size={22} color={'red'}/>
            </TouchableOpacity>
        </Pressable>
    )
}