import Container from "@/components/custom-container";
import { ListingCardCompact } from "@/components/ListingCard";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { listings } from "@/data/mock";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useMemo } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";


export default function Featured(){
    const styles = useStyles();
    const {width} = Dimensions.get('window');
    const featured = useMemo(() => listings.filter((l) => l.featured), []);
    const theme = useTheme();
    return(
        <Container edges={["top","bottom"]}>
            <View style={[styles.row, {paddingHorizontal:Spacing.three}]}>
                <TouchableOpacity onPress={()=>router.back()} style={[styles.top2Icon, {marginRight:10}]}>
                    <MaterialIcons name="arrow-back" size={23} color={theme.text}/>
                </TouchableOpacity>
                <ThemedText type="subtitle">Featured</ThemedText>
            </View>
            <View style={styles.categoriesView}>
                {
                    featured.map((item, index)=>(
                        <View style={{padding:Spacing.two, width:width/2-Spacing.two}} key={index}>
                            <ListingCardCompact listing={item} onPress={() => router.push({ pathname: "/detail", params: { id: item.id } })} />
                        </View>
                    ))
                }
            </View>
        </Container>
    )
}