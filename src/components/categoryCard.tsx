import { Spacing } from "@/constants/theme";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/hooks/use-theme";
import { Image } from "expo-image";
import { router } from "expo-router";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

interface CategoryProps extends TouchableOpacityProps{
    image: string;
    category: string;
}
export default function Category({image, category}:CategoryProps){
    const {listings} = useAuth();
    const theme = useTheme();
    const styles = useStyles();
    const listingNum = listings.filter((obj: { category: string; })=>obj.category===category).length
    return(
        <TouchableOpacity style={styles.categoriesCard} onPress={()=>router.navigate({
            pathname:"/category",
            params:{ category }
        })}>
            <Image style={styles.categoryCardImage} source={image}/>
            <View style={styles.categoriesCardBottom}>
                <View style={{flexShrink:1, paddingRight:Spacing.one}}>
                    <ThemedText style={{flexWrap:'wrap'}}>{category}</ThemedText>
                </View>
                <View>
                    <ThemedText style={styles.categoriesListingNumber}type="small">{listingNum}</ThemedText>
                </View>
            </View>
        </TouchableOpacity>
    )
}