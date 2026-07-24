import { Radius, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Pressable, StyleSheet } from "react-native";
import { ThemedText } from "./themed-text";

interface ChipProps {
  label: string;
  active?: boolean;
  onPress?: () => void;
}

export function Chip({ label, active, onPress }: ChipProps) {
  const theme = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={[{backgroundColor:theme.card, borderColor:theme.line},styles.base, active && {backgroundColor:theme.ink, borderColor:theme.ink}]}
      accessibilityRole="button"
      accessibilityState={{ selected: !!active }}
    >
      <ThemedText style={[{color:theme.inkSoft}, active && {color:theme.card}, {fontWeight:500}]}>{label}</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 34,
    paddingHorizontal: Spacing.four,
    borderRadius: Radius.pill,
    borderWidth: 1,
    justifyContent: "center",
    marginRight: Spacing.two,
  },
});
