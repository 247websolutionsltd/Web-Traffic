import { CategoryTile } from "@/components/CategoryTitle";
import { Chip } from "@/components/Chip";
import Container from "@/components/custom-container";
import { ListingCardCompact } from "@/components/ListingCard";
import Search from "@/components/searchInput";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { categories, currentUser, listings } from "@/data/mock";
import { useTheme } from "@/hooks/use-theme";
import { Category } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import { FlatList, Pressable, ScrollView, View } from "react-native";
import { useStyles } from "../../../styles/styles";

const FILTERS = ["All", "Buy", "Sell", "To let", "Jobs"];
export default function Home(){
    const [activeFilter, setActiveFilter] = useState("All");
    const featured = useMemo(() => listings.filter((l) => l.featured), []);
    const recent = useMemo(() => listings.slice(0, 6), []);
    const styles = useStyles();
    const theme = useTheme();
    return(
        <Container>
            <View style={{paddingHorizontal:Spacing.three}}>
                <View style={styles.topBar}>
                    <View style={styles.topBarLeft}>
                        <View style={styles.avatar} />
                        <View>
                            <ThemedText>Deliver to</ThemedText>
                            <View style={styles.locationRow}>
                                <ThemedText type="subtitle">{currentUser.location}</ThemedText>
                                <Ionicons name="chevron-down" size={14} color={theme.ink} />
                            </View>
                        </View>
                    </View>
                    <Pressable style={styles.bell} accessibilityLabel="Notifications">
                        <Ionicons name="notifications-outline" size={24} color={theme.ink} />
                        <View style={styles.bellDot} />
                    </Pressable>
                </View>
                <Search/>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.chipRow}
                >
                {FILTERS.map((f) => (
                    <Chip key={f} label={f} active={f === activeFilter} onPress={() => setActiveFilter(f)} />
                ))}
            </ScrollView>
            <View style={{marginVertical:Spacing.two}}>
                <View style={[styles.row, {justifyContent:'space-between', paddingHorizontal:Spacing.three}]}>
                    <ThemedText>Categories</ThemedText>
                    <Pressable onPress={() => router.push("/(tabs)/categories")}>
                        <ThemedText style={styles.seeAll}>See all</ThemedText>
                    </Pressable>
                </View>
                <View style={styles.categoryGrid}>
                    {categories.slice(0, 4).map((c: Category) => (
                        <CategoryTile key={c.id} category={c} onPress={() => router.push({ pathname: "/", params: { categoryId: c.id } })} />
                    ))}
                </View>
            </View>
            
            <View style={{marginVertical:Spacing.two}}>
                <View style={[styles.row, {justifyContent:'space-between', paddingHorizontal:Spacing.three}]}>
                    <ThemedText>Featured today</ThemedText>
                    <Pressable onPress={() => router.push({ pathname: "/", params: { featured: "1" } })}>
                        <ThemedText style={styles.seeAll}>See all</ThemedText>
                    </Pressable>
                </View>
                <FlatList
                    data={featured}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={[styles.horizontalList]}
                    renderItem={({ item }) => (
                        <ListingCardCompact listing={item} onPress={() => router.push({ pathname: "/detail", params: { id: item.id } })} />
                    )}
                />
            </View>
            <View style={{marginTop:Spacing.two,}}>
                <View style={[styles.row, {justifyContent:'space-between', paddingHorizontal:Spacing.three}]}>
                    <ThemedText>Recently added</ThemedText>
                    <Pressable onPress={() => router.push("/")}>
                        <ThemedText style={styles.seeAll}>See all</ThemedText>
                    </Pressable>
                </View>
                <FlatList
                    data={recent}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.horizontalList}
                    renderItem={({ item }) => (
                        <ListingCardCompact listing={item} onPress={() => router.push({ pathname: "/detail", params: { id: item.id } })} />
                    )}
                />
            </View>
        </Container>
    )
}
