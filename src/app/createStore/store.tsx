import Container from "@/components/custom-container";
import StoreHeader from "@/components/storeHeader2";
import Stat from "@/components/storeStat";
import { ThemedText } from "@/components/themed-text";
import Top from "@/components/top2";
import { Colors, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { ImageBackground } from "expo-image";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "../../../styles/styles";

export default function Store(){
    const styles = useStyles();
    const theme = useTheme();
    const store = {
      id:"1",
      displayPic: "https://images.unsplash.com/photo-1621768216002-5ac171876625?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcGxlfGVufDB8fDB8fHww",
      headerPic: "https://images.unsplash.com/photo-1785327831299-eddf16a18328?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
      name:"Apple",
      ads: ["2","6"],
      star:"4.8",
      location:"Lagos",
      joined:"2021",
      followers:"1.5m",
      verified:true,
    }
    const { displayPic, name, location, ads, star, joined, followers, verified, headerPic } = store
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
                />
                <Stat
                    topRight="+64"
                    icon="person"
                    title="3,204"
                    desc="Followers"
                    iconBackground={Colors.greenTint}
                    topRightColor={Colors.green}
                />
                <Stat
                    topRight="21 Live"
                    icon="sell"
                    title="248"
                    desc="Total ads"
                    iconBackground={Colors.goldTint}
                    topRightColor={Colors.green}
                />
                <Stat
                    topRight="-3%"
                    icon="message"
                    title="57"
                    desc="Unread chats"
                    iconBackground={Colors.purpleTint}
                    topRightColor={"red"}
                />
            </View>

            <View style={{padding:Spacing.three}}>
                <View style={styles.rowStretch}>
                    <ThemedText type="bold">Recent listings</ThemedText>
                    <TouchableOpacity>
                        <ThemedText type="mid" style={{color:theme.coralDark, fontWeight:600}}>Manage all</ThemedText>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    )
}