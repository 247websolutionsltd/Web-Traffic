import Button from "@/components/button";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import { Colors, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Image } from "expo-image";
import { router } from "expo-router";
import { View } from "react-native";
import { useStyles } from "../../styles/styles";

export default function Live(){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <Container style={{paddingHorizontal:Spacing.three, justifyContent:'space-between'}} edges={['top', 'bottom']}>
            <View style={{flex:1, alignItems:'center', padding:Spacing.three}}>
                <View style={styles.checkView}>
                    <ThemedText style={{color:Colors.green, fontSize:50, lineHeight:50}}>✓</ThemedText>
                </View>
                <ThemedText type="subtitle">Your ad is live!</ThemedText>
                <ThemedText style={{textAlign:'center', color:theme.textSecondary}}>
                    Buyers nearby can already see your iPhone 14 Pro Max listing.
                </ThemedText>

                <View style={styles.liveCard}>
                    <Image
                     source={{uri:"https://images.unsplash.com/photo-1779896411955-87ecb3bc091e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"}}
                     style={styles.liveImage}
                    />
                    <View style={{padding:Spacing.two}}>
                        <ThemedText type="bold">iPhone 14 Pro Max</ThemedText>
                        <ThemedText type="mid" style={{color:theme.textSecondary}}>₦850,000 · Ikeja, Lagos</ThemedText>
                    </View>
                </View>

                <View style={[styles.boostInfo, {flexDirection:'row', alignItems:'center', marginTop:Spacing.two, width:'100%'}]}>
                    <ThemedText style={{marginRight:Spacing.three}} type="subtitle">⭐</ThemedText>
                    <View style={{flexShrink:1}}>
                        <ThemedText style={{color:"#8A5A0F", fontWeight:700}}>
                            Boost this ad for ₦2,500
                        </ThemedText>
                        <ThemedText style={{color:"#8A5A0F"}} type="small">
                            Get seen 3× faster this week
                        </ThemedText>
                    </View>
                </View>

            </View>
            <View>
                <Button onPress={() => router.push({ pathname: "/detail", params: { id: 1 } })} title="View my ad " icon={'arrow-forward'}/>
                <Button onPress={()=>router.push('/(tabs)')} title="Back to home" type="secondary" style={{marginVertical:Spacing.two}}/>
            </View>
        </Container>
    )
}