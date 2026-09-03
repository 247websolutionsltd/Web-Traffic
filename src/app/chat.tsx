import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { useAuth } from "@/context/AuthContext";
import useAuthentication from "@/hooks/authHook";
import useHook from "@/hooks/general-hook";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, FlatList, KeyboardAvoidingView, Platform, Pressable, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "../../styles/styles";


export default function Chats(){
    const theme = useTheme();
    const styles = useStyles();
    const flatListRef = useRef(null);
    // const [activeFilter, setActiveFilter] = useState("All");
    const {getMessages, sendMessage, getStoreById, getListing} = useAuthentication();
    const { conversationId, storeId, listingId } = useLocalSearchParams<{ conversationId: string; storeId: string; listingId:string; }>();
    // const thread = chatThreads.find((c) => c.id === id) ?? chatThreads[0];
    const [messages, setMessages] = useState<any>();
    const [ store, setStore ] = useState<any>();
    const [ listing, setListing ] = useState<any>();
    const {user, sendLoad, setSendLoad} = useAuth();
    const {linter, formatMessageTime} = useHook();
    const load = async()=>{
        const messageThread = await getMessages(conversationId);
        const store = await getStoreById(storeId);
        const listing = await getListing(listingId);
        setStore(store)
        setMessages(messageThread?.messages);
        setListing(listing);
    }
    useEffect(()=>{
        load();

    },[])
    const [draft, setDraft] = useState("");
    const handleSend =  async(draft: string)=> {
        const text = draft.trim();
        if (!text) return;
        setSendLoad(true);
        await sendMessage(conversationId, draft);
        await load();
        setSendLoad(false);
        // setMessages((prev) => [...prev, { id: `local-${Date.now()}`, fromMe: true, text, time: "now" }]);
        setDraft("");
    }
    return(
        <View style={{flex:1}}>
            {
                (store && messages && listing) ?
            <>          
                <SafeAreaView style={styles.header} edges={["top"]}>
                    <Pressable onPress={() => router.back()} style={styles.circleBtn} accessibilityLabel="Go back">
                        <Ionicons name="arrow-back" size={23} color={theme.ink} />
                    </Pressable>
                    <Image style={styles.headerAvatar} source={{uri:store.logo}}/>
                    <View style={{ flex: 1 }}>
                        <ThemedText type="subtitle">{linter(store.name, 10)}</ThemedText>
                        <ThemedText type="mid" numberOfLines={1}>
                            {linter(listing.title)}
                        </ThemedText>
                    </View>
                    <Pressable style={styles.circleBtn} accessibilityLabel="Call">
                        <Ionicons name="call-outline" size={23} color={theme.ink} />
                    </Pressable>
                </SafeAreaView>
                <KeyboardAvoidingView 
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.chatContainer}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
                >
                    <FlatList
                        data={[...messages].reverse()}
                        showsVerticalScrollIndicator={false}
                        ref={flatListRef}
                        keyExtractor={(m) => m._id}
                        inverted
                        contentContainerStyle={styles.messagesList}
                        renderItem={({ item }) => {
                            const fromMe = item.sender._id === user?.id
                            return(
                                <View style={[styles.bubbleRow, fromMe ? styles.bubbleRowMe : styles.bubbleRowThem]}>
                                    <View style={[styles.bubble, fromMe ? styles.bubbleMe : styles.bubbleThem]}>
                                        <ThemedText style={[fromMe && {color:"#FFF"}]} type="mid">{item.text}</ThemedText>
                                    </View>
                                    <ThemedText style={styles.bubbleTime}>{formatMessageTime(item.createdAt)}</ThemedText>
                                </View>
                            )
                        }}
                    />
                    <View style={styles.composer}>
                        <TextInput
                            value={draft}
                            onChangeText={setDraft}
                            placeholder="Type a message…"
                            placeholderTextColor={Colors.inkFaint}
                            style={styles.chatInput}
                            multiline
                        />
                        <Pressable onPress={()=>handleSend(draft)} style={styles.sendBtn} accessibilityLabel="Send message" disabled={sendLoad}>
                            {
                                sendLoad ?
                                <ActivityIndicator size={20} color={"#FFF"}/>
                                :
                                <Ionicons name="send" size={20} color={Colors.white} />
                            }
                        </Pressable>
                    </View>
                </KeyboardAvoidingView>
            </>
            :
             <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <ActivityIndicator size={50} color={Colors.coral}/>
            </View>
            }
        </View>
    )
}

