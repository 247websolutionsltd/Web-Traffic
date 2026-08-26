import Container from "@/components/custom-container";
import { ListingCardCompact } from "@/components/ListingCard";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/hooks/use-theme";
import { Listing } from "@/types";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Key } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";


export default function Produts(){
    const styles = useStyles();
    const {width} = Dimensions.get('window');
    const theme = useTheme();
    const {user, listings} = useAuth();
    return(
        <Container edges={["top","bottom"]}>
            <View style={[styles.row, {paddingHorizontal:Spacing.three}]}>
                <TouchableOpacity onPress={()=>router.back()} style={[styles.top2Icon, {marginRight:10}]}>
                    <MaterialIcons name="arrow-back" size={23} color={theme.text}/>
                </TouchableOpacity>
                <ThemedText type="subtitle">Products</ThemedText>
            </View>
            <View style={styles.categoriesView}>
                {
                    listings.map((item: Listing, index: Key | null | undefined)=>(
                        <View style={{padding:Spacing.two, width:width/2-Spacing.two}} key={index}>
                            <ListingCardCompact
                             listing={item} 
                             onPress={() => router.push({ pathname: "/detail", params: { id: item._id } })}
                             saved={user?.saved?.includes(item._id)} 
                             />
                        </View>
                    ))
                }
            </View>
        </Container>
    )
}