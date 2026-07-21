import { Colors } from "@/constants/theme";
import { ScrollView } from "react-native";
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";

interface ContainerProps extends SafeAreaViewProps{
    backgroundColor?:string;
    scroll?: boolean;
}
export default function Container({children, backgroundColor=Colors.paper, style, edges=['top'], scroll=true}:ContainerProps){
    return(
        <SafeAreaView style={{flex:1, backgroundColor}} edges={edges}>
            <ScrollView contentContainerStyle={[{flexGrow:1}, style]} showsVerticalScrollIndicator={false} scrollEnabled={scroll}>
                {children}
            </ScrollView>
        </SafeAreaView>
    )
}