import Banners from "@/components/banners";
import { CategoryTile } from "@/components/CategoryTitle";
import CatTest from "@/components/catTest";
import Container from "@/components/custom-container";
import { ListingCardCompact } from "@/components/ListingCard";
import NewArrivals from "@/components/newArrival";
import Search from "@/components/searchInput";
import Sponsored from "@/components/sponsored";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { bannerSliderData } from "@/data/bannerSliderData";
import { categories, currentUser, listings } from "@/data/mock";
import { useTheme } from "@/hooks/use-theme";
import { Category } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useMemo } from "react";
import { Dimensions, FlatList, Pressable, View } from "react-native";
import { useStyles } from "../../../styles/styles";


export default function Home(){
    const featured = useMemo(() => listings.filter((l) => l.featured), []);
    const recent = useMemo(() => listings.slice(0, 6), []);
    const styles = useStyles();
    const theme = useTheme();
    const {width} = Dimensions.get('window');
    return(
        <Container>
            <View style={{paddingHorizontal:Spacing.three}}>
                <View style={styles.topBar}>
                    <View style={styles.topBarLeft}>
                        <Image
                         style={styles.avatar}
                         source={{uri:"https://images.unsplash.com/photo-1518882570151-157128e78fa1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8fDA%3D"}}
                         />
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
                <Search placeholder="Search cars, phones, homes…"/>
            </View>
            <Banners bannerSliderData={bannerSliderData}/>
            <View style={{marginVertical:Spacing.two}}>
                <View style={[styles.row, {justifyContent:'space-between', paddingHorizontal:Spacing.three}]}>
                    <ThemedText type="subtitle">Categories</ThemedText>
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

            <Sponsored
             image="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
             deal="50% off"
            />
            {/* <CategoryList/> */}
            <View style={{marginVertical:Spacing.two}}>
                <View style={[styles.row, {justifyContent:'space-between', paddingHorizontal:Spacing.three}]}>
                    <ThemedText type="subtitle">Featured today</ThemedText>
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
                        <View style={{padding:Spacing.two, width:width/2-Spacing.two}}>
                            <ListingCardCompact listing={item} onPress={() => router.push({ pathname: "/detail", params: { id: item.id } })} />
                        </View>
                    )}
                />
            </View>
            <CatTest
                image="https://images.unsplash.com/photo-1459865264687-595d652de67e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D"
                title="A1 Sport Items"
                desc="Get your high quality sport clothing, gear and merchandice"
            />
            <View style={{marginVertical:Spacing.three}}>
                <View style={[styles.row, {justifyContent:'space-between', paddingHorizontal:Spacing.three}]}>
                    <ThemedText type="subtitle">Trending Products</ThemedText>
                    <Pressable onPress={() => router.push("/")}>
                        <ThemedText style={styles.seeAll}>See all</ThemedText>
                    </Pressable>
                </View>
                <FlatList
                    data={listings.slice(0,4)}
                    scrollEnabled={false}
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.horizontalList}
                    renderItem={({ item }) => (
                        <View style={styles.listing}>
                            <ListingCardCompact
                             listing={item} 
                             onPress={() => router.push({ pathname: "/detail", params: { id: item.id } })} 
                             />
                        </View>
                    )}
                />
            </View>
            <NewArrivals/>
            <View style={{marginVertical:Spacing.three}}>
                <View style={[styles.row, {justifyContent:'space-between', paddingHorizontal:Spacing.three}]}>
                    <ThemedText type="subtitle">Best Selleres</ThemedText>
                    <Pressable onPress={() => router.push("/")}>
                        <ThemedText style={styles.seeAll}>See all</ThemedText>
                    </Pressable>
                </View>
                <FlatList
                    data={listings.slice(0,4)}
                    scrollEnabled={false}
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.horizontalList}
                    renderItem={({ item }) => (
                        <View style={styles.listing}>
                            <ListingCardCompact listing={item} onPress={() => router.push({ pathname: "/detail", params: { id: item.id } })} />
                        </View>
                    )}
                />
            </View>
        </Container>
    )
}
