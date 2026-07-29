import Container from "@/components/custom-container";
import ProfileCard from "@/components/profileCard";
import SettingsToggleCard from "@/components/settingsToggleCard";
import { ThemedText } from "@/components/themed-text";
import Top from "@/components/top3";
import { Spacing } from "@/constants/theme";
import { SETTINGSMENU1, SETTINGSMENU2 } from "@/data/mock";
import { View } from "react-native";
import { useStyles } from "../../styles/styles";

export default function Settings(){
    const styles = useStyles();
    return(
        <Container>
            <Top title="Settings"/>

            <View style={{paddingHorizontal:Spacing.three, marginVertical:12}}>
                <ThemedText style={{fontSize:18, fontWeight:500, marginBottom:Spacing.two}}>ACCOUNT</ThemedText>
                <View style={styles.settingsView}>
                    {
                        SETTINGSMENU1.map((item, i) => (
                        <ProfileCard
                        title={item.label} 
                        key={item.label} 
                        onPress={item.onPress} 
                        icon={item.icon} 
                        end={i + 1 === SETTINGSMENU1.length}
                        />
                    ))}
                </View>
            </View>

            <View style={{paddingHorizontal:Spacing.three, marginVertical:12}}>
                <ThemedText style={{fontSize:18, fontWeight:500, marginBottom:Spacing.two}}>NOTIFICATION</ThemedText>
                <View style={styles.settingsView}>
                    {
                        SETTINGSMENU2.map((item, i) => (
                        <SettingsToggleCard
                        title={item.label} 
                        key={item.label} 
                        onPress={item.onPress} 
                        icon={item.icon} 
                        end={i + 1 === SETTINGSMENU1.length}
                        />
                    ))}
                </View>
            </View>

            <View style={{paddingHorizontal:Spacing.three, marginVertical:12}}>
                <ThemedText style={{fontSize:18, fontWeight:500, marginBottom:Spacing.two}}>PRIVACY</ThemedText>
                <View style={styles.settingsView}>
                    <SettingsToggleCard
                        title={"Show phone number on ads"} 
                        onPress={()=>console.log("Hii")} 
                        icon={"call"} 
                        end={false}
                    />
                    <ProfileCard
                        title={"Privacy Policy"} 
                        onPress={()=>console.log("hi")} 
                        icon={"document-text"} 
                        end
                    />
                </View>
            </View>

            <View style={{paddingHorizontal:Spacing.three, marginVertical:12}}>
                <ThemedText style={{fontSize:18, fontWeight:500, marginBottom:Spacing.two}}>APP</ThemedText>
                <View style={styles.settingsView}>
                    <SettingsToggleCard
                        title={"Data saver mode"} 
                        onPress={()=>console.log("Hii")} 
                        icon={"bar-chart"} 
                        end={false}
                    />
                    <ProfileCard
                        title={"Privacy Policy"} 
                        onPress={()=>console.log("hi")} 
                        icon={"document-text"} 
                        end
                    />
                </View>
            </View>

        </Container>
    )
}