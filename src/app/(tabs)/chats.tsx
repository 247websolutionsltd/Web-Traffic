import Chat from "@/components/chat";
import { Chip } from "@/components/Chip";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { useAuth } from "@/context/AuthContext";
import useAuthentication from "@/hooks/authHook";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "../../../styles/styles";


const FILTERS: { key: "all" | "buying" | "selling"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "buying", label: "Buying" },
  { key: "selling", label: "Selling" },
];

export default function Chats() {
  const [filter, setFilter] = useState<"all" | "buying" | "selling">("all");
  const styles = useStyles();
//   const data = useMemo(
//     () => (filter === "all" ? chatThreads : chatThreads.filter((c: { type: string; }) => c.type === filter)),
//     [filter]
//   );
  const {getBuyerConversations, getStoreConversations} = useAuthentication();
  const {setConversation} = useAuth()
  const [ buyers, setBuyers ] = useState<any>();
  const [ stores, setStores ] = useState<any>();
  const [data, setData] = useState<any>();
  const handleFilter = (key: "all" | "buying" | "selling")=>{
    setFilter(key);
    if(key==='all'){
        setData([...buyers, ...stores]);
    }else if(key==='buying'){
        setData(buyers)
    }else{
        setData(stores);
    }
  }
  useEffect(()=>{
    
    const load = async()=>{
        const token = await AsyncStorage.getItem("token");
        const buyers = await getBuyerConversations(token);
        const stores = await getStoreConversations(token);
        setStores(stores?.conversations || [])
        setBuyers(buyers.conversations);
        setData([...buyers.conversations, ...stores?.conversations || []]);
        // console.log("stores:",buyers.conversations[0])
        // console.log("seller:",stores.conversations[0]._id)
    }
    load();
  },[]);
    return(
        <SafeAreaView style={{flex:1}} edges={["top"]}>
            <ThemedText style={{alignSelf:'center'}} type="title">Chats</ThemedText>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.chipRow}
                style={{flexGrow:0}}
                >
                {FILTERS.map((f) => (
                <Chip key={f.key} label={f.label} active={filter === f.key} onPress={() => handleFilter(f.key)} />
                ))}
            </ScrollView>
            {
                data?.length>0 ?
            <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                keyExtractor={(i, index) => index.toString()}
                renderItem={({item})=>(
                    <Chat
                     listingTitle={item.listing.title} 
                     logo={item.listing.images[0]} 
                     lastMessage={item.lastMessage?.text}
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
        </SafeAreaView>
    )
}