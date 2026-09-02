import Chat from "@/components/chat";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { useAuth } from "@/context/AuthContext";
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
  const {setConversation} = useAuth()
  const [ chatThreads, setChatThreads ] = useState<any>();
  useEffect(()=>{
    
    const load = async()=>{
        const token = await AsyncStorage.getItem("token");
        const data = await getMyConversations(token);
        setChatThreads(data.conversations);
    }
    load();
  },[]);
    return(
        <Container>
            <ThemedText style={{alignSelf:'center'}} type="title">Chats</ThemedText>
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
                    <Chat
                     listingTitle={item.listing.title} 
                     logo={item.listing.images[0]} 
                     lastMessage={item.lastMessage}
                     lastMessageAt={item.updatedAt}
                     storeName={item.store.name}
                     onPress={() => {
                        setConversation({
                            logo:item.store.logo,
                            name:item.store.name,
                            title:item.listing.title
                        })
                        router.navigate({ pathname: "/chat", params: {
                            conversationId: item._id, 
                            storeId: item.store._id,
                            listingId:item.listing._id,
                        } });
                    }}
                    />
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