import { Radius } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { ImageBackground } from "expo-image";
import { TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

interface BannerProps{
    title: string;
    desc: string;
    onPress: ()=>void;
    image: string
}
export default function Banner({title, desc, onPress, image}: BannerProps){
    const theme = useTheme();
    const styles = useStyles();
    return(
        <ImageBackground
            source={{uri:image}}
            style={styles.banner}
            imageStyle={{borderRadius:Radius.lg}}
        >
            <View style={styles.bannerView}>
                <View style={styles.bannerLeft}>
                    <ThemedText type="subtitle" style={{color:"#FFF"}}>{title}</ThemedText>
                    <ThemedText type="mid" style={{color:"#FFF"}}>{desc}</ThemedText>
                    <TouchableOpacity style={styles.bannerButton} onPress={onPress}>
                        <ThemedText type="mid" style={{color:"#FFF"}}>Learn more</ThemedText>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}