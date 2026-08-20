import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import Top from "@/components/top3";
import { Spacing } from "@/constants/theme";
import { useAuth } from "@/context/AuthContext";
import useAuthentication from "@/hooks/authHook";
import useHook from "@/hooks/general-hook";
import { useTheme } from "@/hooks/use-theme";
import { Image } from "expo-image";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";

export default function Edit(){
    const styles = useStyles();
    const theme = useTheme();
    const {user} = useAuth();
    const { getInitials } = useHook();
    const {changeProfileImage} = useAuthentication();
    return(
        <Container>
            <Top title="Edit account" save/>
            <TouchableOpacity style={{alignItems:'center', marginTop:Spacing.three}} onPress={changeProfileImage}>
                <Image
                 source={{uri:user?.profileImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBCpyQIJSGIUWdn05vYhV4n6Tcf1LzrZSsHHBA8I0XA&s=10"}}
                 style={{width:140, height:140, borderRadius:900}}
                />
            </TouchableOpacity>
            <View style={{padding:Spacing.three}}>
                <View style={{marginVertical:Spacing.two}}>
                    <ThemedText>First name</ThemedText>
                    <View style={[styles.inputView, ]}>
                        <TextInput
                            style={styles.input}
                            value={user?.firstName||""}
                        />
                    </View>
                </View>

                <View style={{marginVertical:Spacing.two}}>
                    <ThemedText>Last name</ThemedText>
                    <View style={[styles.inputView, ]}>
                        <TextInput
                            style={styles.input}
                            value={user?.lastName||""}
                        />
                    </View>
                </View>

                <View style={{marginVertical:Spacing.two}}>
                    <ThemedText>Phone number</ThemedText>
                    <View style={[styles.inputView, ]}>
                        <TextInput
                        style={styles.input}
                        value={user?.phone||""}
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
                        value={user?.email}
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