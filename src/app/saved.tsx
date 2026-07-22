
import Container from "@/components/custom-container";
import Saved from "@/components/saved";
import { ThemedText } from "@/components/themed-text";
import { Colors, Spacing } from "@/constants/theme";
import { listings } from "@/data/mock";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { router } from "expo-router";
import { FlatList, TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";

const FILTERS = ["Active", "Sold", "Expired"];
export default function CategoryScreen(){
    const styles = useStyles();
    return(
        <Container edges={['top', 'bottom']}>
            <View style={[styles.row, {justifyContent:'space-between', paddingHorizontal:Spacing.three}]}>
                <View style={styles.row}>
                    <TouchableOpacity onPress={()=>router.back()} style={[styles.top2Icon, {marginRight:Spacing.two}]}>
                        <MaterialIcons name="arrow-back" size={23}/>
                    </TouchableOpacity>
                    <ThemedText type="subtitle">Saved</ThemedText>
                </View>
                <TouchableOpacity>
                    <ThemedText style={{color:Colors.coralDark}}>Clear all</ThemedText>
                </TouchableOpacity>
            </View>
            <View style={{padding:Spacing.three}}>
                <FlatList
                    data={listings}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Saved listing={item} onPress={() => router.push({ pathname: "/detail", params: { id: item.id } })} />
                    )}
                />
            </View>
        </Container>
    )
}