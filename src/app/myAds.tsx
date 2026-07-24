import Ad from "@/components/ad";
import { Chip } from "@/components/Chip";
import Container from "@/components/custom-container";
import Top from "@/components/top";
import { Spacing } from "@/constants/theme";
import { listings } from "@/data/mock";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { useStyles } from "../../styles/styles";

const FILTERS = ["Active", "Sold", "Expired"];
export default function CategoryScreen(){
    const [activeFilter, setActiveFilter] = useState("Active");
    const styles = useStyles();
    return(
        <Container edges={['top', 'bottom']}>
            <Top title="Electronics" filter style={{marginHorizontal:Spacing.three}}/>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.chipRow}
                style={{flexGrow:0}}
                >
                {FILTERS.map((f) => (
                    <Chip key={f} label={f} active={f === activeFilter} onPress={() => setActiveFilter(f)} />
                ))}
            </ScrollView>
            <View style={{padding:Spacing.three}}>
                <FlatList
                    data={listings}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Ad listing={item} onPress={() => router.push({ pathname: "/detail", params: { id: item.id } })} />
                    )}
                />
            </View>
        </Container>
    )
}