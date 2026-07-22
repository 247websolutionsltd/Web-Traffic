import { Spacing } from "@/constants/theme";
import useHook from "@/hooks/general-hook";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

interface ChatProps{
    listingTitle:string;
    lastMessage:string;
    unread:number;
    time:string;
}
interface ItemProp extends TouchableOpacityProps{
    item: ChatProps;
}
export default function Chat({item}:ItemProp){
    const styles = useStyles();
    const {listingTitle, lastMessage, unread, time} = item;
    const {linter} = useHook();
    return(
        <TouchableOpacity style={styles.chat}>
            <View style={styles.avatar} />
            <View style={styles.chatCenter}>
                <ThemedText type="bold" style={{marginBottom:Spacing.one}}>{linter(listingTitle)}</ThemedText>
                <ThemedText type="mid">{linter(lastMessage, 65)}</ThemedText>
            </View>
            <View style={{alignItems:'center'}}>
                <ThemedText type="small">{time}</ThemedText>
                {
                    unread > 0 &&
                    <View style={styles.messageNumber}>
                        <ThemedText style={{fontSize:10, lineHeight:11, color:'#FFF'}}>{unread}</ThemedText>
                    </View>
                }
            </View>
        </TouchableOpacity>
    )
}