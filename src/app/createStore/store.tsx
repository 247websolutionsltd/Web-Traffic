import Container from "@/components/custom-container";
import StatCard from "@/components/statCard";
import StoreHeader from "@/components/storeHeader2";
import Stat from "@/components/storeStat";
import { ThemedText } from "@/components/themed-text";
import Top from "@/components/top2";
import { Colors, Spacing } from "@/constants/theme";
import { useAuth } from "@/context/AuthContext";
import { stores } from "@/data/mock";
import useAuthentication from "@/hooks/authHook";
import { useTheme } from "@/hooks/use-theme";
import { ImageBackground } from "expo-image";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "../../../styles/styles";

export default function Store(){
    const styles = useStyles();
    const theme = useTheme();
    const { star, headerPic } = stores[0];
    const { store, user, setStore, } = useAuth();
    const { getStoreById, getStoreListings } = useAuthentication();
    const [ listing, setListing ] = useState<any>();
    // const {location, name, createdAt, followers, logo, listings} = store?.store;
   
    useEffect(()=>{
        const load = async()=>{
            const store = await getStoreById(user?.store._id);
            const listing = await getStoreListings(user?.store._id);
            setStore(store);
            setListing(listing);
        }
        load();
    },[]);
    return(
        <Container edges={['bottom']}>
            <ImageBackground style={styles.storeScreen} source={{uri:store.owner.profileImage}}>
                <SafeAreaView edges={['top']} style={{backgroundColor:'#00000035', flex:1, paddingHorizontal:Spacing.three}}>
                    <Top/>
                </SafeAreaView>
            </ImageBackground>
            {
                store && listing ?
                <>
                <StoreHeader
                    image={store.logo}
                    name={store.name}
                    location={store.location.city}
                    ad={listing.listings}
                    rating={star}
                    date={store.createdAt.split("").slice(0,4).join("")}
                    followers={store.followers.length}
                    verified={true}
                    id={user?.store._id}
                    style={{marginTop:-50, marginHorizontal:Spacing.three,}}
                />
                {
                    listing?
                <View style={styles.storeStats}>
                    {/* <Stat
                        topRight="+18%"
                        icon="visibility"
                        title="4,821"
                        desc="Profile views this week"
                        iconBackground={Colors.coralTint}
                        topRightColor={Colors.green}
                        iconColor={theme.coralDark}
                    /> */}
                    <Stat
                        topRight={`+${store.followers.length}`}
                        icon="person"
                        title={store.followers.length}
                        desc="Followers"
                        iconBackground={Colors.greenTint}
                        topRightColor={Colors.green}
                        iconColor={Colors.green}
                    />
                    <Stat
                        topRight={`${listing.count} Live`}
                        icon="sell"
                        title={listing.count}
                        desc="Total ads"
                        iconBackground={Colors.goldTint}
                        topRightColor={Colors.green}
                        iconColor={Colors.gold}
                    />
                    {/* <Stat
                        topRight="-3%"
                        icon="message"
                        title="57"
                        desc="Unread chats"
                        iconBackground={Colors.purpleTint}
                        topRightColor={"red"}
                        iconColor={"#3E3A33"}
                    /> */}
                </View>
                :
                <ActivityIndicator size={50} color={Colors.coral}/>
                }
                
                {
                    listing?.count > 0 &&
                    <View style={{padding:Spacing.three}}>
                        <View style={[styles.rowStretch, {marginBottom:Spacing.two}]}>
                            <ThemedText type="bold">Recent listings</ThemedText>
                            <TouchableOpacity>
                                <ThemedText type="mid" style={{color:theme.coralDark, fontWeight:600}}>Manage all</ThemedText>
                            </TouchableOpacity>
                        </View>
                        <View>
                            {
                                listing?.listings.map((item: { _id: any; condition: any; }, index: any)=>(
                                    <StatCard
                                        id={item._id}
                                        onPress={() => router.push({ pathname: "/detail", params: { id: item._id } })} 
                                        condition={item.condition}
                                        key={index}
                                    />
                                ))
                            }
                            
                        </View>
                    </View>
                }
                </>
                :
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <ActivityIndicator size={50} color={Colors.coral}/>
            </View>
            
            }
        </Container>
    )
}