import { Radius, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { ImageBackground } from "expo-image";
import { View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

interface PreviewCardProps{
    image: string;
    price:string;
    description:string;
}
export default function PreviewCard({image, price, description}:PreviewCardProps){
    const theme = useTheme();
    const styles = useStyles();
    return(
        <View style={styles.previewCard}>
            <ImageBackground
             source={{uri:image}}
             style={styles.previewCardImage}
             imageStyle={{borderTopLeftRadius:Radius.lg, borderTopRightRadius:Radius.lg}}
            >
                <ThemedText type="small" >PREVIEW</ThemedText>
            </ImageBackground>
            <View style={{padding:Spacing.three}}>
                <ThemedText type="subtitle">{price}</ThemedText>
                <ThemedText type="mid">{description}</ThemedText>
            </View>
        </View>
    )
}