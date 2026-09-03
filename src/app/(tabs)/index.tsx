import Banners from "@/components/banners";
import { CategoryTile } from "@/components/CategoryTitle";
import CatTest from "@/components/catTest";
import Container from "@/components/custom-container";
import { ListingCardCompact } from "@/components/ListingCard";
import NewArrivals from "@/components/newArrival";
import Search from "@/components/searchInput";
import Sponsored from "@/components/sponsored";
import StoreCard from "@/components/storeCard";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { useAuth } from "@/context/AuthContext";
import { bannerSliderData } from "@/data/bannerSliderData";
import { categories } from "@/data/mock";
import useAuthentication from "@/hooks/authHook";
import { useTheme } from "@/hooks/use-theme";
import { Category } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Key, useEffect } from "react";
import { ActivityIndicator, Dimensions, FlatList, TouchableOpacity, View } from "react-native";
import { useStyles } from "../../../styles/styles";


export default function Home(){
    
    const styles = useStyles();
    const theme = useTheme();
    const {width} = Dimensions.get('window');
    const {user, listings, storeList} = useAuth();
    const { getCurrentUser, getListings, getStoreList, getMyStore, getStoreById } = useAuthentication();
    const featured = listings?.filter((l: { tag: string; }) => l.tag==="featured");
    const trending = listings?.filter((l: { tag: string; }) => l.tag==="trending");
    const best = listings?.filter((l: { tag: string; }) => l.tag==="best");
    // const recent = useMemo(() => listings.slice(0, 6), []);
    const {changeProfileImage} = useAuthentication();
    useEffect(()=>{
        
        const load = async()=>{
            const token = await AsyncStorage.getItem("token");
            await getCurrentUser(token);
            await getListings();
            await getStoreList();
        }
        load();
        // console.log(user)
    },[])
    return(
        <Container add>
            <View style={{paddingHorizontal:Spacing.three}}>
                <View style={styles.topBar}>
                    <View style={styles.topBarLeft}>
                        <TouchableOpacity onPress={changeProfileImage}>
                            {
                                user?
                                <Image
                                style={styles.avatar}
                                source={{uri:user?.profileImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBCpyQIJSGIUWdn05vYhV4n6Tcf1LzrZSsHHBA8I0XA&s=10"}}
                                />
                                :
                                <ActivityIndicator size={15} color={"#FFF"}/>
                            }
                         </TouchableOpacity>
                        <View>
                            <ThemedText>Good day</ThemedText>
                            <View style={styles.locationRow}>
                                <ThemedText type="subtitle">{user?.firstName} {user?.lastName}</ThemedText>
                                <Ionicons name="chevron-down" size={14} color={theme.ink} />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.bell} accessibilityLabel="Notifications" onPress={()=>router.navigate('/createStore')}>
                        <Ionicons name="storefront-outline" size={24} color={theme.ink} />
                    </TouchableOpacity>
                </View>
                <Search placeholder="Search cars, phones, homes…"/>
            </View>
            <Banners bannerSliderData={bannerSliderData}/>
            <View style={{marginBottom:Spacing.two}}>
                <View style={[styles.row, {justifyContent:'space-between', paddingLeft:Spacing.three}]}>
                    <ThemedText type="subtitle">Categories</ThemedText>
                    <TouchableOpacity onPress={() => router.push("/categories")} style={{padding:Spacing.three}}>
                        <ThemedText style={styles.seeAll}>See all</ThemedText>
                    </TouchableOpacity>
                </View>
                <View style={styles.categoryGrid}>
                    {categories.slice(0, 4).map((c: Category) => (
                        <CategoryTile key={c.id} category={c} onPress={() => router.push({ pathname: "/category", params: { category: c.name } })} />
                    ))}
                </View>
            </View>

            <Sponsored
             image="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
             deal="50% off"
            />
            {/* <CategoryList/> */}
            {
                featured?.length > 0 ?
                <View style={{marginVertical:Spacing.two}}>
                    <View style={[styles.row, {justifyContent:'space-between', paddingHorizontal:Spacing.three}]}>
                        <ThemedText type="subtitle">Featured today</ThemedText>
                        <TouchableOpacity onPress={() => router.push({ pathname: "/products", params: { type: "featured" } })}>
                            <ThemedText style={styles.seeAll}>See all</ThemedText>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={featured || []}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={[styles.horizontalList]}
                        renderItem={({ item }) => (
                            <View style={{padding:Spacing.two, width:width/2-Spacing.two}}>
                                <ListingCardCompact
                                 listing={item} 
                                 onPress={() => router.push({ pathname: "/detail", params: { id: item._id } })}  
                                 saved={user?.saved?.includes(item._id)}
                                />
                            </View>
                        )}
                    />
                    
                </View>
                :
                <ActivityIndicator size={30} color={"#FFF"}/>
            }
            <CatTest
                image="https://images.unsplash.com/photo-1459865264687-595d652de67e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D"
                title="A1 Sport Items"
                desc="Get your high quality sport clothing, gear and merchandice"
                onPress={() => router.push("/products")}
            />
            {
                trending?.length > 0 &&
                <View style={{marginVertical:Spacing.three}}>
                    <View style={[styles.row, {justifyContent:'space-between', paddingHorizontal:Spacing.three}]}>
                        <ThemedText type="subtitle">Trending Products</ThemedText>
                        <TouchableOpacity onPress={() => router.push({ pathname: "/products", params: { type: "trending" } })}>
                            <ThemedText style={styles.seeAll}>See all</ThemedText>
                        </TouchableOpacity>
                    </View>
                    
                        <FlatList
                            data={trending}
                            scrollEnabled={false}
                            numColumns={2}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => index.toString()}
                            contentContainerStyle={styles.horizontalList}
                            renderItem={({ item }) => (
                                <View style={styles.listing}>
                                    <ListingCardCompact
                                    listing={item} 
                                    onPress={() => router.push({ pathname: "/detail", params: { id: item._id } })} 
                                    saved={user?.saved?.includes(item._id)}
                                    />
                                </View>
                            )}
                        />
                        
                </View>
            }
            <NewArrivals onPress={() => router.push("/products")}/>
            {
                best?.length > 0 &&
                <View style={{marginTop:Spacing.three}}>
                    <View style={[styles.row, {justifyContent:'space-between', paddingHorizontal:Spacing.three}]}>
                        <ThemedText type="subtitle">Best Sellers</ThemedText>
                        <TouchableOpacity onPress={() => router.push({ pathname: "/products", params: { type: "best" } })}>
                            <ThemedText style={styles.seeAll}>See all</ThemedText>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={best}
                        scrollEnabled={false}
                        numColumns={2}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={styles.horizontalList}
                        renderItem={({ item }) => (
                            <View style={styles.listing}>
                                <ListingCardCompact
                                listing={item} onPress={() => router.push({ pathname: "/detail", params: { id: item._id } })} 
                                saved={user?.saved?.includes(item._id)}
                                />
                            </View>
                        )}
                    />
                        
                </View>
            }
            <Sponsored
             image="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D"
             deal="Secure a Store"
            />
            <View style={{marginTop:Spacing.three}}>
                <View style={[styles.row, {justifyContent:'space-between', paddingHorizontal:Spacing.three}]}>
                    <ThemedText type="subtitle">Top Stores</ThemedText>
                    <TouchableOpacity onPress={() => router.push("/stores")}>
                        <ThemedText style={styles.seeAll}>See all</ThemedText>
                    </TouchableOpacity>
                </View>
                {
                    storeList ?
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                        {
                            storeList.slice(0,4).map((item: { _id: any; logo: string; name: string; }, index: Key | null | undefined)=>(
                                <View style={styles.categoriesDataView} key={index}>
                                    <TouchableOpacity onPress={()=>router.navigate({ pathname: "/store", params: { store:item._id } })}>
                                        <StoreCard
                                            image={item.logo}
                                            title={item.name}
                                        />
                                    </TouchableOpacity>
                                </View>
                            ))
                        }
                    </View>
                    :
                    <ActivityIndicator size={30} color={"#FFF"}/>
                }
            </View>
        </Container>
    )
}
