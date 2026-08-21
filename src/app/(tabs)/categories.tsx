import Category from "@/components/categoryCard";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import { useAuth } from "@/context/AuthContext";
import { Key } from "react";
import { View } from "react-native";
import { useStyles } from "../../../styles/styles";

export default function Categories(){
    const styles = useStyles();
    const {categories} = useAuth();
    return(
        <Container>
            <ThemedText style={{alignSelf:'center'}} type="title">Categories</ThemedText>
            <View style={styles.categoriesView}>
                {
                    categories.map((item: { image: string; name: string; }, index: Key | null | undefined)=>(
                        <View style={styles.categoriesDataView} key={index}>
                            <Category
                                image={item.image}
                                category={item.name}
                            />
                        </View>
                    ))
                }
            </View>
        </Container>
    )
}