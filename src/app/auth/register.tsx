import Container from "@/components/custom-container";
import SignUp from "@/components/signUp";
import { ThemedText } from "@/components/themed-text";
import Top from "@/components/top";
import { Spacing } from "@/constants/theme";
import { View } from "react-native";

export default function Register(){
    return(
        <Container style={{paddingHorizontal:Spacing.three}} edges={['bottom', 'top']}>
            <Top />
            <View style={{marginVertical:20}}>
                <ThemedText type="title">Create your account</ThemedText>
                <ThemedText>Takes less than a minute</ThemedText>
            </View>
            <SignUp/>
        </Container>
    )
}