import { CategoryTile } from "@/components/CategoryTitle";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { categories } from "@/data/mock";
import { router } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";

export default function Categories(){
    return(
        <Container style={{paddingHorizontal:Spacing.three}}>
            <ThemedText type="title">Categories</ThemedText>
            <ThemedText >Browse everything on WebTraffic by category</ThemedText>
            <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                numColumns={4}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.list}
                scrollEnabled={false}
                renderItem={({ item }) => (
                <CategoryTile category={item} onPress={() => router.push({ pathname: "/category", params: { categoryId: item.id } })} />
                )}
                ListFooterComponent={<View style={{ height: 90 }} />}
            />
        </Container>
    )
}

const styles = StyleSheet.create({
  list: {
    marginVertical:Spacing.four
  },
  row: {
    justifyContent: "space-between",
    marginBottom: Spacing.four,
  },
});