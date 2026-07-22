import { Chip } from "@/components/Chip";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { chatThreads } from "@/data/mock";
import { ChatMessage } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, KeyboardAvoidingView, Platform, Pressable, ScrollView, TextInput, View } from "react-native";
import { useStyles } from "../../styles/styles";

const FILTERS = ["All", "Buying", "Selling"];
export default function Chats(){
    const styles = useStyles();
    const [activeFilter, setActiveFilter] = useState("All");
    const { id } = useLocalSearchParams<{ id: string }>();
    const thread = chatThreads.find((c) => c.id === id) ?? chatThreads[0];
    const [messages, setMessages] = useState<ChatMessage[]>(thread.messages);
    const [draft, setDraft] = useState("");

    function handleSend() {
        const text = draft.trim();
        if (!text) return;
        setMessages((prev) => [...prev, { id: `local-${Date.now()}`, fromMe: true, text, time: "now" }]);
        setDraft("");
    }
    return(
        <Container>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : undefined}>
            
                <View style={styles.header}>
                    <Pressable onPress={() => router.back()} style={styles.circleBtn} accessibilityLabel="Go back">
                    <Ionicons name="arrow-back" size={17} color={Colors.ink} />
                    </Pressable>
                    <View style={styles.headerAvatar} />
                    <View style={{ flex: 1 }}>
                    <ThemedText style={styles.headerName}>{thread.personName}</ThemedText>
                    <ThemedText style={styles.headerListing} numberOfLines={1}>
                        {thread.listingTitle}
                    </ThemedText>
                    </View>
                    <Pressable style={styles.circleBtn} accessibilityLabel="Call">
                        <Ionicons name="call-outline" size={16} color={Colors.ink} />
                    </Pressable>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.chipRow}
                    style={{flexGrow:0,}}
                    >
                    {FILTERS.map((f) => (
                        <Chip key={f} label={f} active={f === activeFilter} onPress={() => setActiveFilter(f)} />
                    ))}
                </ScrollView>

                <FlatList
                    data={messages}
                    keyExtractor={(m) => m.id}
                    scrollEnabled={false}
                    contentContainerStyle={styles.messagesList}
                    renderItem={({ item }) => (
                    <View style={[styles.bubbleRow, item.fromMe ? styles.bubbleRowMe : styles.bubbleRowThem]}>
                        <View style={[styles.bubble, item.fromMe ? styles.bubbleMe : styles.bubbleThem]}>
                        <ThemedText style={[styles.bubbleText, item.fromMe && styles.bubbleTextMe]}>{item.text}</ThemedText>
                        </View>
                        <ThemedText style={styles.bubbleTime}>{item.time}</ThemedText>
                    </View>
                    )}
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
                    <Pressable onPress={handleSend} style={styles.sendBtn} accessibilityLabel="Send message">
                    <Ionicons name="send" size={16} color={Colors.white} />
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </Container>
    )
}

