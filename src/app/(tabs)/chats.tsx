import Chat from "@/components/chat";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import { Colors, Spacing } from "@/constants/theme";
import useAuthentication from "@/hooks/authHook";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
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
    () => (filter === "all" ? chatThreads : chatThreads.filter((c: { type: string; }) => c.type === filter)),
    [filter]
  );
  const {getMyConversations} = useAuthentication();
  const [ chatThreads, setChatThreads ] = useState<any>();
  useEffect(()=>{
    
    const load = async()=>{
        const token = await AsyncStorage.getItem("token");
        const data = await getMyConversations(token);
        setChatThreads(data.conversations)
    }
    load();
  },[]);
    return(
        <Container>
            <ThemedText style={{paddingHorizontal:Spacing.three}} type="subtitle">Chats</ThemedText>
            {/* <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.chipRow}
                style={{flexGrow:0}}
                >
                {FILTERS.map((f) => (
                <Chip key={f.key} label={f.label} active={filter === f.key} onPress={() => setFilter(f.key)} />
                ))}
            </ScrollView> */}
            {
                chatThreads ?
            <FlatList
                data={chatThreads}
                scrollEnabled={false}
                keyExtractor={(i, index) => index.toString()}
                renderItem={({item})=>(
                    <Chat item={item} onPress={() => router.navigate({ pathname: "/chat", params: { id: item.id } })}/>
                )}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={{ paddingBottom: 100 }}
                ListEmptyComponent={
                <View style={styles.empty}>
                    <Ionicons name="chatbubbles-outline" size={32} color={Colors.inkFaint} />
                    <ThemedText style={styles.emptyText}>No conversations here yet</ThemedText>
                </View>
                }
            />
            :
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <ActivityIndicator size={50} color={Colors.coral}/>
            </View>
            }
        </Container>
    )
}