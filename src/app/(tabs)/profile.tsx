import ProfileCard from "@/components/profileCard";
import Stats from "@/components/stats";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "../../../styles/styles";

type IconName = keyof typeof Ionicons.glyphMap;

const MENU: { icon: IconName; label: string; onPress: () => void }[] = [
  { icon: "pricetags-outline", label: "My ads", onPress: () => {router.navigate('/myAds')} },
  { icon: "heart-outline", label: "Saved", onPress: () => {router.navigate('/saved')} },
  { icon: "card-outline", label: "Plans & billing", onPress: () => {} },
  { icon: "settings-outline", label: "Settings", onPress: () => {} },
  { icon: "help-buoy-outline", label: "Help & support", onPress: () => {} },
];
export default function Profile(){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <ScrollView style={styles.profileContainer} showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.profileTop}>
                <View style={styles.profileInit}>
                    <ThemedText style={{fontSize:40, lineHeight:45, color:'#FFF', fontWeight:700}}>TA</ThemedText>
                </View>
                <View style={{marginVertical:Spacing.three}}>
                    <ThemedText type="subtitle" style={{color:"#FAF9F7"}}>Tunde Adebayo</ThemedText>
                    <ThemedText style={{color:"#F0F0F3"}}>Ikeja, Lagos · Member since 2022</ThemedText>
                </View>
            </SafeAreaView>
            <Stats/>
            <View>
                {
                MENU.map((item, i) => (
                <ProfileCard title={item.label} key={item.label} onPress={item.onPress} icon={item.icon}/>
                ))}
            </View>
        </ScrollView>
    )
}