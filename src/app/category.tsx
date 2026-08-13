import Category from "@/components/category";
import { Chip } from "@/components/Chip";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import Top from "@/components/top";
import { Spacing } from "@/constants/theme";
import { listings } from "@/data/mock";
import { useTheme } from "@/hooks/use-theme";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { useStyles } from "../../styles/styles";

const FILTERS = ["Price", "Condition", "Location"];
export default function CategoryScreen(){
    const [activeFilter, setActiveFilter] = useState("Price");
    const styles = useStyles();
    const theme = useTheme();
    const { category } = useLocalSearchParams<{ category: string; }>();
    const listingData = listings.filter((obj)=>obj.categoryId===category.toLowerCase());
    return(
        <Container edges={['top', 'bottom']}>
            <Top title={category} filter style={{marginHorizontal:Spacing.three}}/>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.chipRow}
                style={{flexGrow:0}}
                >
                {FILTERS.map((f) => (
                    <Chip key={f} label={f+" ▾"} active={f === activeFilter} onPress={() => setActiveFilter(f)} />
                ))}
            </ScrollView>
            <View style={{paddingHorizontal:Spacing.three}}>
                <FlatList
                    data={listingData}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Category listing={item} onPress={() => router.push({ pathname: "/detail", params: { id: item.id } })} />
                    )}
                    ListEmptyComponent={()=>(
                        <View style={styles.absoluteCenter}>
                            <ThemedText type="title" style={{color:theme.textSecondary}}>♡</ThemedText>
                            <ThemedText style={{color:theme.textSecondary}}>No items available</ThemedText>
                        </View>
                    )}
                />
            </View>
        </Container>
    )
}