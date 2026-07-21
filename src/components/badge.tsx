import { Colors, Radius } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";

type Tone = "gold" | "green" | "coral" | "ink";

const toneMap: Record<Tone, { bg: string; fg: string }> = {
  gold: { bg: Colors.goldTint, fg: "#8A5A0F" },
  green: { bg: Colors.greenTint, fg: Colors.green },
  coral: { bg: Colors.coralTint, fg: Colors.coralDark },
  ink: { bg: "#EFEFEF", fg: Colors.inkSoft },
};

export function Badge({ label, tone = "coral" }: { label: string; tone?: Tone }) {
  const t = toneMap[tone];
  return (
    <View style={[styles.base, { backgroundColor: t.bg }]}>
      <Text style={[styles.label, { color: t.fg }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: Radius.sm,
    alignSelf: "flex-start",
  },
  label: {
    // fontFamily: fonts.bodySemibold,
    fontSize: 10,
    letterSpacing: 0.2,
    textTransform: "uppercase",
  },
});
