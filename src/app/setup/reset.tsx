import Container from "@/components/custom-container";
import ResetPassword from "@/components/reset";
import { ThemedText } from "@/components/themed-text";
import Top from "@/components/top";
import { Spacing } from "@/constants/theme";
import { View } from "react-native";

export default function Reset(){
    return(
        <Container style={{paddingHorizontal:Spacing.three}} edges={['bottom', 'top']}>
            <Top />
            <View style={{marginVertical:20}}>
                <ThemedText type="title">Reset your password</ThemedText>
                <ThemedText>We'll text a reset code to your registered number</ThemedText>
            </View>
            <ResetPassword/>
        </Container>
    )
}