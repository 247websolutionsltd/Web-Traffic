import { useTheme } from "@/hooks/use-theme";
import { ScrollView } from "react-native";
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";

interface ContainerProps extends SafeAreaViewProps{
    backgroundColor?:string;
    scroll?: boolean;
}
export default function Container({children, backgroundColor, style, edges=['top'], scroll=true}:ContainerProps){
    const theme = useTheme();
    return(
        <SafeAreaView style={{flex:1, backgroundColor:backgroundColor || theme.paper}} edges={edges}>
            <ScrollView contentContainerStyle={[{flexGrow:1}, style]} showsVerticalScrollIndicator={false} scrollEnabled={scroll}>
                {children}
            </ScrollView>
        </SafeAreaView>
    )
}