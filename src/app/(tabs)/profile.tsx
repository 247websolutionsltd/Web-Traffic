import ProfileCard from "@/components/profileCard";
import Stats from "@/components/stats";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { useAuth } from "@/context/AuthContext";
import { PROFILEMENU } from "@/data/mock";
import useHook from "@/hooks/general-hook";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "../../../styles/styles";


export default function Profile(){
    const styles = useStyles();
    const {user} = useAuth();
    const { getInitials } = useHook();
    return(
        <ScrollView style={styles.profileContainer} showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.profileTop}>
                <View style={styles.profileInit}>
                    <ThemedText style={{fontSize:40, lineHeight:45, color:'#FFF', fontWeight:700}}>{getInitials()}</ThemedText>
                </View>
                <View style={{marginVertical:Spacing.three}}>
                    <ThemedText type="subtitle" style={{color:"#FAF9F7"}}>{user?.firstName} {user?.lastName}</ThemedText>
                    <ThemedText style={{color:"#F0F0F3"}}>{user?.email}</ThemedText>
                </View>
            </SafeAreaView>
            <Stats/>
            <View>
                {
                PROFILEMENU.map((item, i) => (
                <ProfileCard
                 title={item.label} 
                 key={item.label} 
                 onPress={item.onPress} 
                 icon={item.icon}
                 end={i + 1 === PROFILEMENU.length}
                 />
                ))}
            </View>
        </ScrollView>
    )
}