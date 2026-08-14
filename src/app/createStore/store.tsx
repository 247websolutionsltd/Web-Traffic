import Container from "@/components/custom-container";
import StatCard from "@/components/statCard";
import StoreHeader from "@/components/storeHeader2";
import Stat from "@/components/storeStat";
import { ThemedText } from "@/components/themed-text";
import Top from "@/components/top2";
import { Colors, Spacing } from "@/constants/theme";
import { ads as adStat, stores } from "@/data/mock";
import { useTheme } from "@/hooks/use-theme";
import { ImageBackground } from "expo-image";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "../../../styles/styles";

export default function Store(){
    const styles = useStyles();
    const theme = useTheme();
    const { displayPic, name, location, ads, star, joined, followers, verified, headerPic } = stores[0];
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
            <View style={styles.storeStats}>
                <Stat
                    topRight="+18%"
                    icon="visibility"
                    title="4,821"
                    desc="Profile views this week"
                    iconBackground={Colors.coralTint}
                    topRightColor={Colors.green}
                    iconColor={theme.coralDark}
                />
                <Stat
                    topRight="+64"
                    icon="person"
                    title="3,204"
                    desc="Followers"
                    iconBackground={Colors.greenTint}
                    topRightColor={Colors.green}
                    iconColor={Colors.green}
                />
                <Stat
                    topRight="21 Live"
                    icon="sell"
                    title="248"
                    desc="Total ads"
                    iconBackground={Colors.goldTint}
                    topRightColor={Colors.green}
                    iconColor={Colors.gold}
                />
                <Stat
                    topRight="-3%"
                    icon="message"
                    title="57"
                    desc="Unread chats"
                    iconBackground={Colors.purpleTint}
                    topRightColor={"red"}
                    iconColor={"#3E3A33"}
                />
            </View>

            <View style={{padding:Spacing.three}}>
                <View style={[styles.rowStretch, {marginBottom:Spacing.two}]}>
                    <ThemedText type="bold">Recent listings</ThemedText>
                    <TouchableOpacity>
                        <ThemedText type="mid" style={{color:theme.coralDark, fontWeight:600}}>Manage all</ThemedText>
                    </TouchableOpacity>
                </View>
                <View>
                    {
                        adStat.map((item, index)=>(
                            <StatCard
                                id={item.id}
                                onPress={() => router.push({ pathname: "/detail", params: { id: item.id } })} 
                                condition={item.condition}
                                key={index}
                            />
                        ))
                    }
                    
                </View>
            </View>
        </Container>
    )
}