import { Colors, Spacing } from "@/constants/theme";
import { listings } from "@/data/mock";
import useHook from "@/hooks/general-hook";
import { Image } from "expo-image";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

interface StatCardProps extends TouchableOpacityProps{
    id: string;
    condition: string;
}
export default function StatCard({id, condition}:StatCardProps){
    const styles = useStyles();
    const { image, title, price, views } = listings.filter((obj)=>obj.id===id)[0];
    const { priceFormat, linter } = useHook();
    return(
        <TouchableOpacity style={[styles.statCard, {opacity:condition==="Expired"?0.4:1}]}>
            <Image style={styles.statCardImage} source={image}/>
            <View style={styles.startCardRight}>
                <ThemedText type="bold" style={{marginBottom:Spacing.one}}>{linter(title, 30)}</ThemedText>
                <View style={styles.row}>
                    <View
                     style={[styles.circle, {backgroundColor:condition==="Live"?Colors.green:condition==="Expired"?Colors.inkFaint:Colors.gold, marginRight:Spacing.one}]}
                    />
                    <ThemedText type="mid">₦{priceFormat(price)} · {views} views</ThemedText>
                </View>
            </View>
            <View style={{alignSelf:'flex-start', margin:Spacing.three, marginRight:Spacing.two }}>
                <View style={styles.optionCircle}/>
                <View style={styles.optionCircle}/>
                <View style={styles.optionCircle}/>
            </View>
        </TouchableOpacity>
    )
}