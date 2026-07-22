import { View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

export default function Stats(){
    const styles = useStyles();
    return(
        <View style={{maxHeight:70}}>
            <View style={styles.stats}>
                <View style={styles.stat}>
                    <ThemedText type="subtitle">14</ThemedText>
                    <ThemedText type="small">Active ads</ThemedText>
                </View>
                <View style={[styles.stat, styles.statCenter]}>
                    <ThemedText type="subtitle">4.9</ThemedText>
                    <ThemedText type="small">Rating</ThemedText>
                </View>
                <View style={styles.stat}>
                    <ThemedText type="subtitle">32</ThemedText>
                    <ThemedText type="small">Sold</ThemedText>
                </View>
            </View>
            <View style={[styles.stats,styles.statShadow]}/>
        </View>
    )
}