import Button from "@/components/button";
import Container from "@/components/custom-container";
import { ListingCardCompact } from "@/components/ListingCard";
import StoreHeader from "@/components/storeHeader";
import { ThemedText } from "@/components/themed-text";
import Top from "@/components/top2";
import { Spacing } from "@/constants/theme";
import { listings, stores } from "@/data/mock";
import { useTheme } from "@/hooks/use-theme";
import { ImageBackground } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, ScrollView, useWindowDimensions, View } from "react-native";
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
    const {
        headerPic,
        displayPic,
        name,
        location,
        ads,
        star,
        joined,
        followers,
        verified
    } = stores.filter((obj)=>obj.id===store)[0];

    const [ tabWidth, setTabWidth ] = useState(0);
    const handleLayout = (event: { nativeEvent: { layout: { width: any; }; }; }) => {
        const { width } = event.nativeEvent.layout;
        setTabWidth(width);
    };
const AllAdsRoute = () => {
    const adsData = listings.filter((obj)=>ads.includes(obj.id));
    return(
            <FlatList
                data={adsData}
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                scrollEnabled={false}
                contentContainerStyle={[styles.horizontalList]}
                style={{width, flex:1}}
                onContentSizeChange={(w, h) => {
                    setHeights(prev => {
                        const copy = [...prev];
                        copy[0] = h;
                        return copy;
                    });
                }}
                renderItem={({ item }) => (
                    <View style={styles.listing}>
                        <ListingCardCompact
                            listing={item} 
                            onPress={() => router.push({ pathname: "/detail", params: { id: item.id } })} 
                            />
                    </View>
                )}
            />
    )
}

const AboutRoute = () => (
  <View style={styles.scene}>
    <ThemedText>About content here</ThemedText>
  </View>
);

const ReviewsRoute = () => (
  <View style={styles.scene}>
    <ThemedText>Reviews content here</ThemedText>
  </View>
);

const renderScene = ({ route }:{route:any}) => {
  switch (route.key) {
    case 'allAds':
      return <AllAdsRoute />;
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
            <ImageBackground style={styles.storeScreen} source={{uri:headerPic}}>
                <SafeAreaView edges={['top']} style={{backgroundColor:'#00000035', flex:1, paddingHorizontal:Spacing.three}}>
                    <Top/>
                </SafeAreaView>
            </ImageBackground>
            <StoreHeader
                image={displayPic}
                name={name}
                location={location}
                ad={ads}
                rating={star}
                date={joined}
                followers={followers}
                verified={verified}
                style={{marginTop:-50, marginHorizontal:Spacing.three,}}
            />
            <View style={{marginVertical:Spacing.three, flex:1, justifyContent:'space-between'}}>
                <View>
                <View style={[styles.row, {paddingHorizontal:Spacing.two}]} onLayout={handleLayout}>
                    <View style={{width:70, justifyContent:'center'}}>
                        <ThemedText type="bold">All Ads</ThemedText>
                    </View>
                    <View style={{width:70, justifyContent:'center'}}>
                        <ThemedText type="bold">About</ThemedText>
                    </View>
                    <View style={{width:70, justifyContent:'center'}}>
                        <ThemedText type="bold">Reviews</ThemedText>
                    </View>
                </View>
                <View style={[styles.indicator, {left:pageOffset*70}]}/>
                <PagerView
                    style={{
                        height: heights[page] > 300 ? heights[page] : 300,
                        // backgroundColor:'#FFFFFF22',
                    }}
                    initialPage={0}
                    onPageSelected={(e)=>{
                        setPage(e.nativeEvent.position);
                    }}
                    onPageScroll={(e)=>setPageOffset(e.nativeEvent.position + e.nativeEvent.offset)}
                >
                    <View key="0">
                        <AllAdsRoute />
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
            
        </Container>
    )
}