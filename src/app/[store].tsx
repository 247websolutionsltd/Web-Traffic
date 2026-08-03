import Container from "@/components/custom-container";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useStyles } from "../../styles/styles";

export default function Store(){
    const styles = useStyles();
    const theme = useTheme();
    const { store } = useLocalSearchParams();
    // const {displayPic, name, ads, star, location, id, headerPic} = stores.filter((obj)=>obj.id === +store)[0];
    const insets = useSafeAreaInsets();
    
    return(
        <Container edges={['bottom']}>
            {/* <ImageBackground source={{uri:headerPic}} style={[styles.storeHeader, {paddingTop:insets.top}]}>
                <Top/>
            </ImageBackground> */}
            <View style={styles.storeTop}>
                <View style={[styles.row, {paddingHorizontal:Spacing.three}]}>
                    <View>
                        {/* <Image source={{uri:displayPic}} style={{width:40, height:40}}/> */}
                    </View>
                    <View>
                        {/* <ThemedText>{name}</ThemedText>
                        <View style={styles.row}>
                            <ThemedText>{location}</ThemedText>
                            <ThemedText>{location}</ThemedText>
                        </View> */}
                    </View>
                </View>
            </View>
        </Container>
    )
}