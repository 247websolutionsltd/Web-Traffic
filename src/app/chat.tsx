import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { chatThreads } from "@/data/mock";
import { useTheme } from "@/hooks/use-theme";
import { ChatMessage } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, KeyboardAvoidingView, Platform, Pressable, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "../../styles/styles";


export default function Chats(){
    const theme = useTheme();
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
        <Container edges={["bottom"]}>            
            <SafeAreaView style={styles.header} edges={["top"]}>
                <Pressable onPress={() => router.back()} style={styles.circleBtn} accessibilityLabel="Go back">
                    <Ionicons name="arrow-back" size={23} color={theme.ink} />
                </Pressable>
                <View style={styles.headerAvatar} />
                <View style={{ flex: 1 }}>
                    <ThemedText type="subtitle">{thread.personName}</ThemedText>
                    <ThemedText type="mid" numberOfLines={1}>
                        {thread.listingTitle}
                    </ThemedText>
                </View>
                <Pressable style={styles.circleBtn} accessibilityLabel="Call">
                    <Ionicons name="call-outline" size={23} color={theme.ink} />
                </Pressable>
            </SafeAreaView>
            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
            >
                <FlatList
                    data={messages}
                    keyExtractor={(m) => m.id}
                    scrollEnabled={false}
                    contentContainerStyle={styles.messagesList}
                    renderItem={({ item }) => (
                        <View style={[styles.bubbleRow, item.fromMe ? styles.bubbleRowMe : styles.bubbleRowThem]}>
                            <View style={[styles.bubble, item.fromMe ? styles.bubbleMe : styles.bubbleThem]}>
                                <ThemedText style={[item.fromMe && {color:"#FFF"}]} type="mid">{item.text}</ThemedText>
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
                        <Ionicons name="send" size={20} color={Colors.white} />
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </Container>
    )
}

