import { Chip } from "@/components/Chip";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { chatThreads } from "@/data/mock";
import { Ionicons } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { useStyles } from "../../../styles/styles";


const FILTERS: { key: "all" | "buying" | "selling"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "buying", label: "Buying" },
  { key: "selling", label: "Selling" },
];

export default function Chats() {
  const [filter, setFilter] = useState<"all" | "buying" | "selling">("all");
  const styles = useStyles();

  const data = useMemo(
    () => (filter === "all" ? chatThreads : chatThreads.filter((c) => c.type === filter)),
    [filter]
  );
    return(
        <Container>
            <ThemedText style={styles.title}>Chats</ThemedText>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.chipRow}
                style={{flexGrow:0}}
                >
                {FILTERS.map((f) => (
                <Chip key={f.key} label={f.label} active={filter === f.key} onPress={() => setFilter(f.key)} />
                ))}
            </ScrollView>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={{ paddingBottom: 100 }}
                ListEmptyComponent={
                <View style={styles.empty}>
                    <Ionicons name="chatbubbles-outline" size={32} color={Colors.inkFaint} />
                    <ThemedText style={styles.emptyText}>No conversations here yet</ThemedText>
                </View>
                }
            />
        </Container>
    )
}