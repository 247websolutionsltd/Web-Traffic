import Container from "@/components/custom-container";
import Top from "@/components/top2";
import { Spacing } from "@/constants/theme";
import { stores } from "@/data/mock";
import { useTheme } from "@/hooks/use-theme";
import { ImageBackground } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "../../styles/styles";

export default function Store(){
    const styles = useStyles();
    const theme = useTheme();
    const { store } = useLocalSearchParams<{ store: string }>();
    const {
        headerPic
    } = stores.filter((obj)=>obj.id===store)[0];
    return(
        <Container edges={['bottom']}>
            <ImageBackground style={styles.storeScreen} source={{uri:headerPic}}>
                <SafeAreaView edges={['top']} style={{backgroundColor:'#00000035', flex:1, paddingHorizontal:Spacing.three}}>
                    <Top/>
                </SafeAreaView>
            </ImageBackground>
        </Container>
    )
}