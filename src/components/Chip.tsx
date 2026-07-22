import { Colors, Radius, Spacing } from "@/constants/theme";
import { Pressable, StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";

interface ChipProps {
  label: string;
  active?: boolean;
  onPress?: () => void;
}

export function Chip({ label, active, onPress }: ChipProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.base, active && styles.active]}
      accessibilityRole="button"
      accessibilityState={{ selected: !!active }}
    >
      <ThemedText style={[styles.label, active && styles.activeLabel, {fontWeight:500}]}>{label}</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 34,
    paddingHorizontal: Spacing.four,
    borderRadius: Radius.pill,
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.line,
    justifyContent: "center",
    marginRight: Spacing.two,
  },
  active: {
    backgroundColor: Colors.ink,
    borderColor: Colors.ink,
  },
  label: {
    // fontFamily: fonts.bodySemibold,
    color: Colors.inkSoft,
  },
  activeLabel: {
    color: Colors.white,
  },
});
