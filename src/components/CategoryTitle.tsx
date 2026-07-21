import { Colors, Radius } from "@/constants/theme";
import { Category } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "./themed-text";

export function CategoryTile({ category, onPress }: { category: Category; onPress?: () => void }) {
  return (
    <Pressable onPress={onPress} style={styles.wrap} accessibilityRole="button" accessibilityLabel={category.name}>
      <View style={[styles.iconWrap, { backgroundColor: category.tint }]}>
        <Ionicons name={category.icon} size={22} color={Colors.coralDark} />
      </View>
      <ThemedText type="small" numberOfLines={2}>
        {category.name}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: "23%",
    alignItems: "center",
    gap: 7,
  },
  iconWrap: {
    width: 54,
    height: 54,
    borderRadius: Radius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    // fontFamily: fonts.bodyMedium,
    fontSize: 10,
    color: Colors.inkSoft,
    textAlign: "center",
    lineHeight: 13,
  },
});
