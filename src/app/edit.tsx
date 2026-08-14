import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import Top from "@/components/top3";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";

export default function Edit(){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <Container>
            <Top title="Edit account" save/>
            <View style={{alignItems:'center', padding:Spacing.three}}>
                <View style={[styles.profileInit, {alignSelf:'auto'}]}>
                    <ThemedText style={{fontSize:40, lineHeight:45, color:'#FFF', fontWeight:700}}>TA</ThemedText>
                </View>
                <TouchableOpacity style={[styles.profileEditView, {marginRight:-60, marginTop:-30}]}>
                    <MaterialIcons name="edit" size={20} color={"#FFF"}/>
                </TouchableOpacity>
            </View>
            <View style={{padding:Spacing.three}}>
                <View style={{marginVertical:Spacing.two}}>
                    <ThemedText>Full name</ThemedText>
                    <View style={[styles.inputView, ]}>
                        <TextInput
                            placeholder="Enter your brand name"
                            placeholderTextColor={theme.textSecondary}
                            style={styles.input}
                            value="Tunde Adebayo"
                        />
                    </View>
                </View>

                <View style={{marginVertical:Spacing.two}}>
                    <ThemedText>Phone number</ThemedText>
                    <View style={[styles.inputView, ]}>
                        <TextInput
                        placeholder="Enter your brand name"
                        placeholderTextColor={theme.textSecondary}
                        style={styles.input}
                        value="+234 802 123 4567"
                        />
                    </View>
                </View>

                <View style={{marginVertical:Spacing.two}}>
                    <ThemedText>Email address</ThemedText>
                    <View style={[styles.inputView, ]}>
                        <TextInput
                        placeholder="Add an email address"
                        placeholderTextColor={theme.textSecondary}
                        style={styles.input}
                        />
                    </View>
                </View>

                <View style={{marginVertical:Spacing.two}}>
                    <ThemedText>Date of birth <ThemedText style={{color:theme.textSecondary}}>(optional)</ThemedText></ThemedText>
                    <View style={[styles.inputView, ]}>
                        <TextInput
                        placeholder="Not set"
                        placeholderTextColor={theme.textSecondary}
                        style={styles.input}
                        />
                    </View>
                </View>
            </View>
        </Container>
    )
}