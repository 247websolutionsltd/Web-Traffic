import Container from "@/components/custom-container";
import PreviewCard from "@/components/previewCard";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";

export default function Review(){
    const theme = useTheme();
    const styles = useStyles();
    return(
        <Container>
            <View style={[styles.row, {paddingHorizontal:Spacing.three}]}>
                    <TouchableOpacity onPress={()=>router.back() } style={[styles.top2Icon, {marginRight:10}]}>
                        <MaterialIcons name="arrow-back" size={23} color={theme.text}/>
                    </TouchableOpacity>
                    <ThemedText type="subtitle">Post an ad</ThemedText>
                </View>
            <View style={{margin:Spacing.two, paddingHorizontal:Spacing.two}}>
                <ThemedText style={{color:theme.textSecondary}}>This is exactly how buyers will see it</ThemedText>
            </View>
            <View style={{padding:Spacing.three}}>
                <PreviewCard
                    image="https://images.unsplash.com/photo-1779896411955-87ecb3bc091e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
                    price="₦850,000"
                    description="iPhone 14 Pro Max, 256GB, Deep Purple"
                />
            </View>
        </Container>
    )
}