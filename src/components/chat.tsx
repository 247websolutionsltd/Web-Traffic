import { Spacing } from "@/constants/theme";
import useHook from "@/hooks/general-hook";
import { Image } from "expo-image";
import { TouchableOpacity, TouchableOpacityProps, View, } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";


interface ItemProp extends TouchableOpacityProps{
    listingTitle:string;
    logo:string;
    lastMessage:string | null;
    lastMessageAt:string;
    storeName:string;
}
export default function Chat({listingTitle, logo, lastMessage, lastMessageAt, storeName, onPress}:ItemProp){
    const styles = useStyles();
    // const {listing, store, lastMessage, lastMessageAt} = item;
    const {linter, timeAgoShort} = useHook();
    // useEffect(()=>{
    //     console.log(item)
    // },[])
    return(
        <TouchableOpacity style={styles.chat} onPress={onPress}>
            <Image style={styles.avatar} source={{uri:logo}}/>
            <View style={styles.chatCenter}>
                <ThemedText type="bold" style={{marginBottom:Spacing.one}}>{linter(listingTitle)}</ThemedText>
                {
                    lastMessage &&
                    <ThemedText type="mid">{linter(lastMessage || "", 25)}</ThemedText>
                }
            </View>
            <View style={{alignItems:'center'}}>
                <ThemedText type="small">{timeAgoShort(lastMessageAt)}</ThemedText>
                {/* {
                    lastMessage &&
                    <View style={styles.messageNumber}>
                        <ThemedText style={{fontSize:10, lineHeight:11, color:'#FFF'}}>{lastMessage?.text||""}</ThemedText>
                    </View>
                } */}
            </View>
        </TouchableOpacity>
    )
}