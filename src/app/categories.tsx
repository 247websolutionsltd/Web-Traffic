import Category from "@/components/categoryCard";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Key } from "react";
import { TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";

export default function Categories(){
    const styles = useStyles();
    const {categories} = useAuth();
    const theme = useTheme();
    return(
        <Container>
            <View style={[styles.row, {paddingHorizontal:Spacing.three}]}>
                <TouchableOpacity onPress={()=>router.back()} style={[styles.top2Icon, {marginRight:Spacing.two}]}>
                    <MaterialIcons name="arrow-back" size={23} color={theme.text}/>
                </TouchableOpacity>
                <ThemedText type="subtitle">Categories</ThemedText>
            </View>
            <View style={styles.categoriesView}>
                {
                    categories.map((item: { image: string; _id: string; name: string; }, index: Key | null | undefined)=>(
                        <View style={styles.categoriesDataView} key={index}>
                            <Category
                                image={item.image}
                                category={item.name}
                                id={item._id}
                            />
                        </View>
                    ))
                }
            </View>
        </Container>
    )
}