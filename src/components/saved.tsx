import { Colors, Spacing } from "@/constants/theme";
import useHook from "@/hooks/general-hook";
import { MaterialIcons } from "@expo/vector-icons";
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
}
interface SavedProp{
    listing:ListingProps;
    onPress:() => void;
    unlike:(index:string)=>void;
}
export default function Saved({listing, onPress, unlike}:SavedProp){
    const {title, location, postedAt, price, id} = listing
    const styles = useStyles();
    const { priceFormat } = useHook();
    const [ liked, setLiked ] = useState(true);
    const handleUnlike = (index:string)=>{
        setLiked(!liked);
        unlike(index)
    }
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
            <TouchableOpacity onPress={()=>handleUnlike(id)} style={{padding:Spacing.three, paddingLeft:0}}>
               <MaterialIcons name="favorite" size={22} color={'red'}/>
            </TouchableOpacity>
        </Pressable>
    )
}