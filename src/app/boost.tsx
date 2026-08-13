import Button from "@/components/button";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";

export default function Boost(){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <Container style={{paddingHorizontal:Spacing.three, justifyContent:'space-between'}} edges={['top', 'bottom']}>
            <View style={{flex:1}}>
                <View style={[styles.row]}>
                    <TouchableOpacity onPress={()=>router.back() } style={[styles.top2Icon, {marginRight:10}]}>
                        <MaterialIcons name="arrow-back" size={23} color={theme.text}/>
                    </TouchableOpacity>
                    <ThemedText type="subtitle">Boost your ad</ThemedText>
                </View>

                <View style={{paddingVertical:Spacing.three}}>
                    <ThemedText type="subtitle">Get seen 3× faster</ThemedText>
                    <ThemedText style={{color:theme.textSecondary}} type="mid">Optional — you can post for free and boost later from My adss</ThemedText>
                </View>

                <View style={styles.settingsView}>
                    <View style={[styles.rowStretch, {padding:Spacing.three, borderBottomWidth:1, borderColor:theme.line}]}>
                        <ThemedText type="bold">⭐ Feature for 7 days</ThemedText>
                        <ThemedText style={{fontWeight:700, color:theme.coralDark}}>₦2,500</ThemedText>
                    </View>
                    <View style={[styles.rowStretch, {padding:Spacing.three}]}>
                        <ThemedText type="bold">🔝 Bump to top now</ThemedText>
                        <ThemedText style={{fontWeight:700, color:theme.coralDark}}>₦1,000</ThemedText>
                    </View>
                </View>

                <View style={styles.boostInfo}>
                    <ThemedText style={{color:"#8A5A0F"}} type="small">
                        💡 Featured ads on the Gold plan get 2 slots included free each month.
                    </ThemedText>
                </View>
            </View>
            <View>
                <Button onPress={()=>router.push('/')} title="Boost for ₦2,500 " icon={'arrow-forward'}/>
                <Button onPress={()=>router.push('/live')} title="Post without boosting" type="secondary" style={{marginVertical:Spacing.two}}/>
            </View>
        </Container>
    )
}