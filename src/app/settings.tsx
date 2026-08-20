import Container from "@/components/custom-container";
import ProfileCard from "@/components/profileCard";
import SettingsTextsCard from "@/components/settingsTextsCard";
import SettingsToggleCard from "@/components/settingsToggleCard";
import { ThemedText } from "@/components/themed-text";
import Top from "@/components/top3";
import { Spacing } from "@/constants/theme";
import { SETTINGSMENU1, SETTINGSMENU2 } from "@/data/mock";
import useAuthentication from "@/hooks/authHook";
import { Appearance, useColorScheme, View } from "react-native";
import { useStyles } from "../../styles/styles";

export default function Settings(){
    const styles = useStyles();
    const scheme = useColorScheme();
    const handleDarkMode = ()=>{
        Appearance.setColorScheme(scheme==='dark' ? 'light' : 'dark');
    }
    const {logout} = useAuthentication();
    return(
        <Container edges={['bottom', 'top']}>
            <Top title="Settings"/>

            <View style={{paddingHorizontal:Spacing.three, marginVertical:12}}>
                <ThemedText style={{fontSize:17, fontWeight:500, marginBottom:Spacing.two}}>ACCOUNT</ThemedText>
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
                <ThemedText style={{fontSize:17, fontWeight:500, marginBottom:Spacing.two}}>NOTIFICATION</ThemedText>
                <View style={styles.settingsView}>
                    {
                        SETTINGSMENU2.map((item, i) => (
                        <SettingsToggleCard
                        title={item.label} 
                        key={item.label} 
                        icon={item.icon} 
                        end={i + 1 === SETTINGSMENU2.length}
                        onToggle={()=>console.log('hi')}
                        />
                    ))}
                </View>
            </View>

            <View style={{paddingHorizontal:Spacing.three, marginVertical:12}}>
                <ThemedText style={{fontSize:17, fontWeight:500, marginBottom:Spacing.two}}>PRIVACY</ThemedText>
                <View style={styles.settingsView}>
                    <SettingsToggleCard
                        title={"Show phone number on ads"} 
                        icon={"call"} 
                        end={false}
                        onToggle={()=>console.log('hi')}
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
                <ThemedText style={{fontSize:17, fontWeight:500, marginBottom:Spacing.two}}>APP</ThemedText>
                <View style={styles.settingsView}>
                    <SettingsTextsCard
                        title="Language" 
                        icon={"globe"} 
                        end={false}
                        text="English"
                    />
                    <SettingsToggleCard
                        title={"Data saver mode"} 
                        icon={"bar-chart"} 
                        end={false}
                        onToggle={()=>console.log('hi')}
                    />
                    <SettingsToggleCard
                        title={"Dark mode"} 
                        icon={"contrast"} 
                        end={false}
                        onToggle={handleDarkMode}
                        toggled={scheme==="dark"}
                    />
                    <SettingsTextsCard
                        title="App version" 
                        icon={"information-circle-outline"} 
                        end
                        text="1.1.1"
                        iconSize={20}
                    />
                </View>
            </View>

            <View style={{paddingHorizontal:Spacing.three, marginVertical:12}}>
                <ThemedText style={{fontSize:17, fontWeight:500, marginBottom:Spacing.two}}>DANGER ZONE</ThemedText>
                <View style={styles.settingsView}>
                    <SettingsTextsCard
                        title="Log Out" 
                        icon={"ban"} 
                        end={false}
                        onPress={logout}
                    />
                    <SettingsTextsCard
                        title="Delete Account" 
                        icon={"trash"} 
                        end
                    />
                </View>
            </View>

        </Container>
    )
}