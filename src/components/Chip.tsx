import { Colors, Radius, Spacing } from "@/constants/theme";
import { Pressable, StyleSheet, Text } from "react-native";

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
      <Text style={[styles.label, active && styles.activeLabel]}>{label}</Text>
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
    fontSize: 12.5,
    color: Colors.inkSoft,
  },
  activeLabel: {
    color: Colors.white,
  },
});
