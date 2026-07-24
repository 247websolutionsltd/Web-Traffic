import Back from "@/components/back-button";
import { Badge } from "@/components/badge";
import Button from "@/components/button";
import { ThemedText } from "@/components/themed-text";
import Top from "@/components/top2";
import { Colors, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "../../styles/styles";

export default function Detail(){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <SafeAreaView edges={['bottom']} style={{backgroundColor:theme.paper}}>
                <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
                    <SafeAreaView style={styles.detailImage}>
                        <Top/>
                    </SafeAreaView>
                    <View style={styles.detailView}>
                        <View style={[styles.badgeSlot, {position:'relative', marginBottom:Spacing.three}]}>
                            <Badge label="Featured" tone="gold" />
                        </View>
                        <View>
                            <ThemedText type="title">₦850,000</ThemedText>
                            <ThemedText type="bold">iPhone 14 Pro Max — 256GB, Deep Purple</ThemedText>
                        </View>
                        <View style={[styles.topView, {marginVertical:Spacing.three}]}>
                            <View style={{flex:1, alignItems:'center'}}>
                                <ThemedText style={{maxWidth:'80%'}}>📍 Ikeja, Lagos</ThemedText>
                            </View>
                            <View style={{flex:1, alignItems:'center'}}>
                                <ThemedText style={{maxWidth:'80%'}}>👁 312 views</ThemedText>
                            </View>
                            <View style={{flex:1, alignItems:'center'}}>
                                <ThemedText style={{maxWidth:'80%'}}>🕐 2 days ago</ThemedText>
                            </View>
                        </View>
                        <View style={styles.detailVerified}>
                            <View style={styles.row}>
                                <View style={styles.avatar} />
                                <View style={{padding:Spacing.two}}>
                                    <ThemedText>Tunde A.</ThemedText>
                                    <ThemedText>Member since 2022</ThemedText>
                                </View>
                            </View>
                            <View style={styles.verifiedView}>
                                <ThemedText style={{color:Colors.green}} type="small">✓</ThemedText>
                                <ThemedText style={{color:Colors.green}} type="small">Verified</ThemedText>
                            </View>
                        </View>
                        <ThemedText>Barely used, comes with box, charger and original receipt. No scratches, battery health 96%. 
                            Price is slightly negotiable for serious buyers only.
                        </ThemedText>
                    
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
                </ScrollView>
            </SafeAreaView>
    )
}