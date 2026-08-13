import { Spacing } from "@/constants/theme";
import { Image } from "expo-image";
import { View } from "react-native";
import { useStyles } from "../../styles/styles";
import Button from "./button";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

export default function NewArrivals({onPress}:{onPress:()=>void}){
    const styles = useStyles();
    return(
        <ThemedView style={styles.newArrivals}>
            <Image
                source={{uri:"https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmclMjBjYXJ0fGVufDB8fDB8fHww"}}
                style={styles.newArrivalsImage}
            />
            <View style={styles.newBottom}>
                <View>
                    <ThemedText type="subtitle">New Arrivals</ThemedText>
                    <ThemedText type="mid">Check out the latest inventory</ThemedText>
                </View>
                <Button
                 title="View all"
                 onPress={onPress}
                 style={{height:30, paddingHorizontal:Spacing.two, borderRadius:5}}
                 textSize={14}
                 icon={"arrow-forward"}
                 />
            </View>
        </ThemedView>
    )
}