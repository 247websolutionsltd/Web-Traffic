import { ImageBackground } from "expo-image";
import { View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

interface SponsoredProps{
    image: string;
    deal: string;
}
export default function Sponsored({image, deal}:SponsoredProps){
    const styles = useStyles();
    return(
        <ImageBackground source={{uri:image}} style={styles.sponsoredImage}>
            <View style={styles.sponsoredView}>
                <ThemedText style={[styles.sponsoredTag, {color:"#FFF"}]} type="small">Sponsored</ThemedText>
                <ThemedText type="subtitle" style={{textAlign:'center', color:"#FFF"}}>50% off</ThemedText>
                <View/>
            </View>
        </ImageBackground>
    )
}