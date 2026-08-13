import Back from "@/components/back-button";
import { Badge } from "@/components/badge";
import Button from "@/components/button";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import Top from "@/components/top2";
import { Colors, Spacing } from "@/constants/theme";
import { listings } from "@/data/mock";
import useHook from "@/hooks/general-hook";
import { useTheme } from "@/hooks/use-theme";
import { Image, ImageBackground } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "../../styles/styles";

export default function Detail(){
    const styles = useStyles();
    const theme = useTheme();
    const { id } = useLocalSearchParams<{ id: string; }>();
    const {
         image, 
         title, 
         price, 
         featured, 
         postedAt, 
         views, 
         location,
         seller,
         description,
         memberImage
        } = listings.filter((obj)=>obj.id===id)[0];
    const { priceFormat } = useHook();
    return(
        <Container edges={['bottom']}>
            <ImageBackground style={styles.detailImage} source={{uri:image}}>
                <SafeAreaView edges={['top']} style={{backgroundColor:'#00000035', flex:1, paddingHorizontal:Spacing.three}}>
                    <Top/>
                </SafeAreaView>
            </ImageBackground>
            <View style={[styles.detailView]}>
                <View>
                    {
                        featured &&
                        <View style={[styles.badgeSlot, {position:'relative', marginBottom:Spacing.three}]}>
                            <Badge label="Featured" tone="gold" />
                        </View>
                    }
                    <View>
                        <ThemedText type="title">₦{priceFormat(price)}</ThemedText>
                        <ThemedText type="bold">{title}</ThemedText>
                    </View>
                    <View style={[styles.topView, {marginVertical:Spacing.two}]}>
                        <View style={{flexShrink:1}}>
                            <ThemedText type="small" style={{flexWrap:'wrap'}}>📍 {location}</ThemedText>
                        </View>
                        <View style={{flexShrink:1}}>
                            <ThemedText type="small" style={{flexWrap:'wrap'}}>👁 {views} views</ThemedText>
                        </View>
                        <View style={{flexShrink:1}}>
                            <ThemedText type="small" style={{flexWrap:'wrap'}}>🕐 {postedAt}</ThemedText>
                        </View>
                    </View>
                    <View style={styles.detailVerified}>
                        <View style={styles.row}>
                            <Image style={styles.avatar} source={{uri:memberImage}}/>
                            <View style={{padding:Spacing.two}}>
                                <ThemedText type="bold">{seller.name}</ThemedText>
                                <ThemedText type="mid">Member since {seller.memberSince}</ThemedText>
                            </View>
                        </View>
                        <View style={[styles.verifiedView, {backgroundColor:seller.verified?Colors.greenTint:Colors.redTint}]}>
                            <ThemedText style={{color:seller.verified?Colors.green:'red'}} type="small">
                                {seller.verified?"✓":"✕"}
                            </ThemedText>
                            <ThemedText style={{color:seller.verified?Colors.green:'red'}} type="small">
                                {seller.verified?"Verified":"Not Verified"}
                            </ThemedText>
                        </View>
                    </View>
                    <ThemedText>{description}</ThemedText>
                </View>
                <View style={[styles.row, {marginTop:Spacing.three}]}>
                    <Back onPress={()=>console.log("")} title="Call" iconLeft="call"/>
                    <Button
                        onPress={()=>console.log("")} 
                        title={"Message Seller"}
                        style={{flex:1}}
                        iconLeft={"message"}
                    />
                </View>
            </View>
        </Container>
    )
}