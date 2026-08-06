import { Radius } from "@/constants/theme";
import { ImageBackground } from "expo-image";
import { View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

interface StoreCardProps{
    image: string;
    title: string;
}
export default function StoreCard({image, title}: StoreCardProps){
    const styles = useStyles();
    return(
        <ImageBackground source={{uri:image}} style={styles.storeCard} imageStyle={{borderRadius:Radius.sm}}>
            <View style={styles.storeCardView}>
                <ThemedText style={{color:"#FFF"}} type="subtitle">{title}</ThemedText>
            </View>
        </ImageBackground>
    )
}