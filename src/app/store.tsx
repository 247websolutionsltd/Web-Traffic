import Button from "@/components/button";
import Container from "@/components/custom-container";
import { ListingCardCompact } from "@/components/ListingCard";
import StoreHeader from "@/components/storeHeader";
import { ThemedText } from "@/components/themed-text";
import Top from "@/components/top2";
import { Colors, Spacing } from "@/constants/theme";
import useAuthentication from "@/hooks/authHook";
import useHook from "@/hooks/general-hook";
import { useTheme } from "@/hooks/use-theme";
import { ImageBackground } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, FlatList, ScrollView, TouchableOpacity, useWindowDimensions, View } from "react-native";
import PagerView from "react-native-pager-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "../../styles/styles";



export default function Store(){
    const [page, setPage] = useState(0);
    const { width } = useWindowDimensions();
    const styles = useStyles();
    const theme = useTheme();
    const [heights, setHeights] = useState<number[]>([]);
    const { store } = useLocalSearchParams<{ store: string }>();
    const { timeAgo } = useHook();
    const { getStoreById, getStoreListings } = useAuthentication();
    const [ storeInfo, setStore ] = useState<any>();
    const [ listings, setListing ] = useState<any>();
    useEffect(()=>{
        const load = async()=>{
            const storeData = await getStoreById(store);
            const listing = await getStoreListings(store);
            setStore(storeData);
            setListing(listing.listings);
            console.log(storeData)
        }
        load();
        
    },[]);
    const pagerRef = useRef<PagerView>(null);

    const goToPage = (page: number) => {
        pagerRef.current?.setPage(page);
    };

    const [ tabWidth, setTabWidth ] = useState(0);
    const handleLayout = (event: { nativeEvent: { layout: { width: any; }; }; }) => {
        const { width } = event.nativeEvent.layout;
        setTabWidth(width);
    };
    const AllAdsRoute = ({
    listings,
    styles,
    width,
    onHeightChange,
    }: {
    listings: any[];
    styles: any;
    width: number;
    onHeightChange: (height: number) => void;
    }) => {
    return (
        <FlatList
        data={listings}
        numColumns={2}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.horizontalList}
        style={{
            width,
        }}
        onContentSizeChange={(w, h) => {
            onHeightChange(h);
        }}
        renderItem={({ item }) => (
            <View style={styles.listing}>
            <ListingCardCompact
                listing={item}
                onPress={() =>
                router.push({
                    pathname: "/detail",
                    params: {
                    id: item._id,
                    },
                })
                }
            />
            </View>
        )}
        />
    );
    };

const AboutRoute = () => (
  <View style={styles.scene}>
    <ThemedText>{storeInfo.description}</ThemedText>
  </View>
);

const ReviewsRoute = () => (
  <View style={styles.scene}>
    <ThemedText>No Reviews yet</ThemedText>
  </View>
);

const renderScene = ({ route }:{route:any}) => {
  switch (route.key) {
    case 'allAds':
      return <AllAdsRoute
            listings={listings}
            styles={styles}
            width={width}
            onHeightChange={(h) => {
                setHeights((prev) => {
                if (prev[0] === h) return prev;

                const copy = [...prev];
                copy[0] = h;
                return copy;
                });
            }}
            />;
    case 'about':
      return <AboutRoute />;
    case 'reviews':
      return <ReviewsRoute />;
    default:
      return null;
  }
};
  const layout = useWindowDimensions();
  const [ currentPage, setCurrentPage ] = useState(0);
  const [ pageOffset, setPageOffset ] = useState(0);
  const [routes] = useState([
    { key: 'allAds', title: 'All ads' },
    { key: 'about', title: 'About' },
    { key: 'reviews', title: 'Reviews' },
  ]);
  const [height, setHeight] = useState(0);
    return(
        <Container edges={['bottom']}>
            {
                storeInfo && listings?
            <>
            <ImageBackground style={styles.storeScreen} source={{uri:storeInfo.owner.profileImage}}>
                <SafeAreaView edges={['top']} style={{backgroundColor:'#00000035', flex:1, paddingHorizontal:Spacing.three}}>
                    <Top/>
                </SafeAreaView>
            </ImageBackground>
            <StoreHeader
                image={storeInfo.logo}
                name={storeInfo.name}
                location={storeInfo.location.city}
                ad={listings}
                rating={"5"}
                date={timeAgo(storeInfo.createdAt)}
                followers={storeInfo.followers.length}
                verified={true}
                style={{marginTop:-50, marginHorizontal:Spacing.three,}}
            />
            <View style={{marginVertical:Spacing.three, flex:1, justifyContent:'space-between'}}>
                <View>
                <View style={[styles.row, {}]} onLayout={handleLayout}>
                    <TouchableOpacity style={styles.tab} onPress={()=>goToPage(0)}>
                        <ThemedText type="bold">All Ads</ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tab} onPress={()=>goToPage(1)}>
                        <ThemedText type="bold">About</ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tab} onPress={()=>goToPage(2)}>
                        <ThemedText type="bold">Reviews</ThemedText>
                    </TouchableOpacity>
                </View>
                <View style={[styles.indicator, {left:pageOffset*80}]}/>
                <PagerView
                    style={{
                        height: Math.max(heights[page] || 0, 300),
                    }}
                    initialPage={0}
                    onPageSelected={(e) => {
                        setPage(e.nativeEvent.position);
                    }}
                    ref={pagerRef}
                    onPageScroll={(e) => {
                        setPageOffset(
                        e.nativeEvent.position + e.nativeEvent.offset
                        );
                    }}
                >
                    <View key="0">
                        <AllAdsRoute
                        listings={listings}
                        styles={styles}
                        width={width}
                        onHeightChange={(h) => {
                            setHeights((prev) => {
                            if (prev[0] === h) return prev;

                            const copy = [...prev];
                            copy[0] = h;
                            return copy;
                            });
                        }}
                        />
                    </View>
                    
                    <ScrollView key="1"
                        onContentSizeChange={(w,h)=>{
                            setHeights(prev=>{
                                const copy=[...prev];
                                copy[1]=h;
                                return copy;
                            });
                        }}
                        scrollEnabled={false}
                    >
                        <AboutRoute/>
                    </ScrollView>

                    <ScrollView key="2"
                        onContentSizeChange={(w,h)=>{
                            setHeights(prev=>{
                                const copy=[...prev];
                                copy[2]=h;
                                return copy;
                            });
                        }}
                        scrollEnabled={false}
                    >
                        <ReviewsRoute/>
                    </ScrollView>

                </PagerView>
                </View>
                <Button
                 title="Contact Seller" 
                 onPress={()=>console.log("Hii")} 
                 style={{margin:Spacing.three, marginBottom:0}}
                />
            </View>
            </>
            :
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <ActivityIndicator size={50} color={Colors.coral}/>
            </View>
            }
        </Container>
    )
}