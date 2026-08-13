import { Radius } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Category } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./themed-text";

export function CategoryTile({ category, onPress }: { category: Category; onPress?: () => void }) {
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrap} accessibilityRole="button" accessibilityLabel={category.name}>
      <View style={[styles.iconWrap, { backgroundColor: category.tint }]}>
        <Ionicons name={category.icon} size={22} />
      </View>
      <ThemedText type="small" numberOfLines={2} style={{textAlign:'center'}}>
        {category.name}
      </ThemedText>
    </TouchableOpacity>
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
});
