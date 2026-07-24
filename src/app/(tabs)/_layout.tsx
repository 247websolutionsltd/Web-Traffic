import { Colors } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { router, Tabs } from "expo-router";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type IconName = keyof typeof Ionicons.glyphMap;

const TAB_META: Record<string, { label: string; icon: IconName; iconActive: IconName }> = {
  index: { label: "Home", icon: "home-outline", iconActive: "home" },
  categories: { label: "Categories", icon: "grid-outline", iconActive: "grid" },
  chats: { label: "Chats", icon: "chatbubble-outline", iconActive: "chatbubble" },
  profile: { label: "Profile", icon: "person-outline", iconActive: "person" },
};

interface TabBarRoute {
  key: string;
  name: string;
}

interface TabBarProps {
  state: { index: number; routes: TabBarRoute[] };
  navigation: { navigate: (name: string) => void };
}

function CustomTabBar({ state, navigation }: TabBarProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const routes = state.routes;
  const leftRoutes = routes.slice(0, 2);
  const rightRoutes = routes.slice(2);

  function renderTab(route: TabBarRoute) {
    const meta = TAB_META[route.name];
    if (!meta) return null;
    const isFocused = state.routes[state.index]?.key === route.key;

    return (
      <Pressable
        key={route.key}
        onPress={() => navigation.navigate(route.name)}
        style={styles.tab}
        accessibilityRole="button"
        accessibilityLabel={meta.label}
        accessibilityState={{ selected: isFocused }}
      >
        <Ionicons name={isFocused ? meta.iconActive : meta.icon} size={21} color={isFocused ? Colors.coral : Colors.inkFaint} />
        <Text style={[styles.tabLabel, isFocused && styles.tabLabelActive]}>{meta.label}</Text>
      </Pressable>
    );
  }

  return (
    <View style={[{backgroundColor: theme.card, borderTopColor: theme.line,}, styles.bar, { paddingBottom: Math.max(insets.bottom, 10) }]}>
      {leftRoutes.map(renderTab)}
      <Pressable
        onPress={() => router.push("/")}
        style={styles.fab}
        accessibilityRole="button"
        accessibilityLabel="Post a new ad"
      >
        <Ionicons name="add" size={26} color={Colors.white} />
      </Pressable>
      {rightRoutes.map(renderTab)}
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs tabBar={(props) => <CustomTabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="categories" options={{ title: "Categoriaes" }} />
      <Tabs.Screen name="chats" options={{ title: "Chats" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: 1,
    paddingTop: 10,
    ...(Platform.OS === "android" ? { elevation: 8 } : {}),
  },
  tab: {
    flex: 1,
    alignItems: "center",
    gap: 3,
  },
  tabLabel: {
    // fontFamily: fonts.bodyMedium,
    fontSize: 10,
    color: Colors.inkFaint,
  },
  tabLabelActive: {
    color: Colors.coral,
    // fontFamily: fonts.bodySemibold,
  },
  fab: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: Colors.coral,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -22,
    shadowColor: Colors.coral,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
});
