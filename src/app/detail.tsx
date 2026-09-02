import Back from "@/components/back-button";
import { Badge } from "@/components/badge";
import Button from "@/components/button";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import Top from "@/components/top2";
import { Colors, Spacing } from "@/constants/theme";
import useAuthentication from "@/hooks/authHook";
import useHook from "@/hooks/general-hook";
import { useTheme } from "@/hooks/use-theme";
import { Image, ImageBackground } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "../../styles/styles";

export default function Detail(){
    const styles = useStyles();
    const theme = useTheme();
    const { id } = useLocalSearchParams<{ id: string; }>();
    const { getListing, getStoreById, createConversation } = useAuthentication();
    const [ listing, setListing ] = useState<any>();
    const [ store, setStore ] = useState<any>();
    const { priceFormat, timeAgo } = useHook();
    useEffect(()=>{
        const load = async()=>{
            const product = await getListing(id);
            const storeInfo = await getStoreById(product.store._id);
            setStore(storeInfo);
            setListing(product);
        }
        load();
    },[])
    return(
        <Container edges={['bottom']}>
            {
                listing?
                <>
            <ImageBackground style={styles.detailImage} source={{uri:listing?.images[0]}}>
                <SafeAreaView edges={['top']} style={{backgroundColor:'#00000035', flex:1, paddingHorizontal:Spacing.three}}>
                    <Top/>
                </SafeAreaView>
            </ImageBackground>
            <View style={[styles.detailView]}>
                <View>
                    {
                        listing?.tag === "featured" &&
                        <View style={[styles.badgeSlot, {position:'relative', marginBottom:Spacing.three}]}>
                            <Badge label="Featured" tone="gold" />
                        </View>
                    }
                    <View>
                        <ThemedText type="title">₦{priceFormat(listing?.price)}</ThemedText>
                        <ThemedText type="bold">{listing?.title}</ThemedText>
                    </View>
                    <View style={[styles.topView, {marginVertical:Spacing.two}]}>
                        <View style={{flexShrink:1}}>
                            <ThemedText type="small" style={{flexWrap:'wrap'}}>📍 {listing?.location.city}, {listing?.location.state}</ThemedText>
                        </View>
                        {/* <View style={{flexShrink:1}}>
                            <ThemedText type="small" style={{flexWrap:'wrap'}}>👁 {views} views</ThemedText>
                        </View> */}
                        <View style={{flexShrink:1}}>
                            <ThemedText type="small" style={{flexWrap:'wrap'}}>🕐 {timeAgo(listing?.createdAt)}</ThemedText>
                        </View>
                    </View>
                    <View style={styles.detailVerified}>
                        <View style={styles.row}>
                            <Image style={styles.avatar} source={{uri:store.logo}}/>
                            <View style={{padding:Spacing.two}}>
                                <ThemedText type="bold">{store.name}</ThemedText>
                                <ThemedText type="mid">Joined {timeAgo(store.createdAt)}</ThemedText>
                            </View>
                        </View>
                        <View style={[styles.verifiedView, {backgroundColor:true?Colors.greenTint:Colors.redTint}]}>
                            <ThemedText style={{color:true?Colors.green:'red'}} type="small">
                                {true?"✓":"✕"}
                            </ThemedText>
                            <ThemedText style={{color:true?Colors.green:'red'}} type="small">
                                {true?"Verified":"Not Verified"}
                            </ThemedText>
                        </View>
                    </View>
                    <ThemedText>{listing.description}</ThemedText>
                </View>
                <ScrollView horizontal style={{marginVertical:Spacing.two}} showsHorizontalScrollIndicator={false}>
                    {
                        listing?.images?.map((item: string, index: number)=>(
                            <Image source={{uri:item}} style={styles.detailImages} key={index}/>
                        ))
                    }
                </ScrollView>
                <View style={[styles.row, {marginTop:Spacing.three}]}>
                    <Back onPress={()=>console.log("")} title="Call" iconLeft="call"/>
                    <Button
                        onPress={()=>createConversation(listing._id, store._id)} 
                        title={"Message Seller"}
                        style={{flex:1}}
                        iconLeft={"message"}
                    />
                </View>
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