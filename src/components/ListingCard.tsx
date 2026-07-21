import { Badge } from "@/components/badge";
import { Colors, Radius, Spacing } from "@/constants/theme";
import { formatNaira } from "@/data/mock";
import { Listing } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ThemedText } from "./themed-text";

interface CardProps {
  listing: Listing;
  onPress?: () => void;
}

export function ListingCardCompact({ listing, onPress }: CardProps) {
  const [saved, setSaved] = useState(false);
  return (
    <Pressable onPress={onPress} style={styles.compactCard}>
      <View style={[styles.compactImage, { backgroundColor: listing.imageColors[0] }]}>
        {listing.featured && (
          <View style={styles.badgeSlot}>
            <Badge label="Featured" tone="gold" />
          </View>
        )}
        <Pressable
          onPress={(e) => {
            e.stopPropagation?.();
            setSaved((s) => !s);
          }}
          style={styles.heart}
          accessibilityLabel={saved ? "Remove from saved" : "Save listing"}
        >
          <Ionicons name={saved ? "heart" : "heart-outline"} size={13} color={saved ? Colors.coral : Colors.ink} />
        </Pressable>
        {listing.soldOut && (
          <View style={styles.soldOverlay}>
            <Text style={styles.soldText}>Sold out</Text>
          </View>
        )}
      </View>
      <View style={styles.compactInfo}>
        <ThemedText style={{fontWeight:600}}>{formatNaira(listing.price)}</ThemedText>
        <ThemedText style={{fontSize:14}} numberOfLines={1}>
          {listing.title}
        </ThemedText>
        <View style={styles.locRow}>
          <Ionicons name="location-outline" size={10} color={Colors.inkFaint} />
          <ThemedText type="small">{listing.location}</ThemedText>
        </View>
      </View>
    </Pressable>
  );
}

export function ListingCardRow({ listing, onPress }: CardProps) {
  return (
    <Pressable onPress={onPress} style={styles.rowCard}>
      <View style={[styles.rowThumb, { backgroundColor: listing.imageColors[0] }]}>
        {listing.soldOut && (
          <View style={styles.soldOverlaySmall}>
            <Text style={styles.soldTextSmall}>Sold</Text>
          </View>
        )}
      </View>
      <View style={styles.rowBody}>
        {listing.featured && <Badge label="Featured" tone="gold" />}
        <Text style={styles.rowTitle} numberOfLines={2}>
          {listing.title}
        </Text>
        <View style={styles.locRow}>
          <Ionicons name="location-outline" size={11} color={Colors.inkFaint} />
          <Text style={styles.rowMeta}>
            {listing.location} · {listing.postedAt}
          </Text>
        </View>
        <Text style={styles.rowPrice}>{formatNaira(listing.price)}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  compactCard: {
    width: 156,
    backgroundColor: Colors.card,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.line,
    overflow: "hidden",
    marginRight: Spacing.three,
  },
  compactImage: {
    height: 128,
    position: "relative",
  },
  badgeSlot: {
    position: "absolute",
    top: 8,
    left: 8,
  },
  heart: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.92)",
    alignItems: "center",
    justifyContent: "center",
  },
  soldOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(27,27,35,0.45)",
    alignItems: "center",
    justifyContent: "center",
  },
  soldText: {
    color: Colors.white,
    // fontFamily: fonts.displaySemibold,
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  soldOverlaySmall: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(27,27,35,0.45)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Radius.sm,
  },
  soldTextSmall: {
    color: Colors.white,
    // fontFamily: fonts.displaySemibold,
    fontSize: 9,
    textTransform: "uppercase",
  },
  compactInfo: {
    padding: Spacing.three,
  },
  compactPrice: {
    // fontFamily: fonts.displaySemibold,
    fontSize: 14,
    color: Colors.ink,
  },
  compactTitle: {
    // fontFamily: fonts.bodyRegular,
    fontSize: 11,
    color: Colors.inkSoft,
    marginTop: 2,
    marginBottom: 4,
  },
  locRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  compactLoc: {
    // fontFamily: fonts.bodyRegular,
    fontSize: 9.5,
    color: Colors.inkFaint,
  },
  rowCard: {
    flexDirection: "row",
    gap: Spacing.three,
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.line,
    borderRadius: Radius.md,
    padding: Spacing.two + 2,
    marginBottom: Spacing.three,
  },
  rowThumb: {
    width: 84,
    height: 84,
    borderRadius: Radius.sm,
    flexShrink: 0,
  },
  rowBody: {
    flex: 1,
    gap: 4,
    justifyContent: "center",
  },
  rowTitle: {
    // fontFamily: fonts.displaySemibold,
    fontSize: 13,
    color: Colors.ink,
  },
  rowMeta: {
    // fontFamily: fonts.bodyRegular,
    fontSize: 10.5,
    color: Colors.inkFaint,
  },
  rowPrice: {
    // fontFamily: fonts.displaySemibold,
    fontSize: 14,
    color: Colors.coralDark,
    marginTop: 2,
  },
});
