import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/hooks/use-theme";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";
import Load from "./load";

interface ContainerProps extends SafeAreaViewProps{
    backgroundColor?:string;
    scroll?: boolean;
}
export default function Container({children, backgroundColor, style, edges=['top'], scroll=true}:ContainerProps){
    const theme = useTheme();
    const {
        pageLoad
    } = useAuth();
    return(
        <SafeAreaView style={{flex:1, backgroundColor:backgroundColor || theme.paper}} edges={edges}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
            >
                <ScrollView 
                contentContainerStyle={[{flexGrow:1, paddingBottom:30}, style]} 
                showsVerticalScrollIndicator={false} 
                scrollEnabled={scroll} 
                overScrollMode="never"
                keyboardShouldPersistTaps="handled"
                alwaysBounceVertical={false}
                >
                
                    {children}
                </ScrollView>
                {
                    pageLoad &&
                    <Load/>
                }
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}