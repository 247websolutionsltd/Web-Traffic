import Container from "@/components/custom-container";
import SignIn from "@/components/signIn";
import { ThemedText } from "@/components/themed-text";
import Top from "@/components/top";
import { Spacing } from "@/constants/theme";
import { View } from "react-native";

export default function Register(){
    return(
        <Container style={{paddingHorizontal:Spacing.three}} edges={['bottom', 'top']}>
            <Top />
            <View style={{marginVertical:20}}>
                <ThemedText type="title">Welcome back</ThemedText>
                <ThemedText>Log in to manage your ads and chats</ThemedText>
            </View>
            <SignIn/>
        </Container>
    )
}