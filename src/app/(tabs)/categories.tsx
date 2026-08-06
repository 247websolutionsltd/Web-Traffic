import Category from "@/components/categoryCard";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import { categoriesData } from "@/data/mock";
import { View } from "react-native";
import { useStyles } from "../../../styles/styles";

export default function Categories(){
    const styles = useStyles();
    return(
        <Container>
            <ThemedText style={{alignSelf:'center'}} type="title">Categories</ThemedText>
            <View style={styles.categoriesView}>
                {
                    categoriesData.map((item, index)=>(
                        <View style={styles.categoriesDataView} key={index}>
                            <Category
                                image={item.image}
                                category={item.category}
                            />
                        </View>
                    ))
                }
            </View>
        </Container>
    )
}