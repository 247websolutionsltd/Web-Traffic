import { Badge } from "@/components/badge";
import { Colors, Radius, Spacing } from "@/constants/theme";
import { formatNaira } from "@/data/mock";
import useAuthentication from "@/hooks/authHook";
import { useTheme } from "@/hooks/use-theme";
import { Listing } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./themed-text";

interface CardProps {
  listing: Listing;
  onPress?: () => void;
  saved?: boolean;
}

export function ListingCardCompact({ listing, onPress, saved=false }: CardProps) {
  const theme = useTheme();
  const {toggleFavorite} = useAuthentication();
  return (
    <TouchableOpacity onPress={onPress} style={[styles.compactCard, {backgroundColor: theme.card, borderColor: theme.line,}]}>
      <ImageBackground style={[styles.compactImage]} source={{uri:listing.images[0]}}>
        <View style={{flex:1, backgroundColor:'#00000044'}}>
          {listing.tag === "featured" && (
            <View style={styles.badgeSlot}>
              <Badge label="Featured" tone="gold" />
            </View>
          )}
          <TouchableOpacity
            onPress={(e) => {
              toggleFavorite(listing._id);
            }}
            style={[styles.heart, {backgroundColor: theme.backgroundElement,}]}
            accessibilityLabel={saved ? "Remove from saved" : "Save listing"}
          >
            <Ionicons name={saved ? "heart" : "heart-outline"} size={22} color={saved ? Colors.coral : theme.ink} />
          </TouchableOpacity>
          {listing.tag.toLowerCase() === "sold out" && (
            <View style={styles.soldOverlay}>
              <Text style={styles.soldText}>Sold out</Text>
            </View>
          )}
        </View>
      </ImageBackground>
      <View style={[styles.compactInfo]}>
        <View>
          <ThemedText style={{fontWeight:600}}>{formatNaira(listing.price)}</ThemedText>
          <ThemedText style={{fontSize:14}} numberOfLines={1}>
            {listing.title}
          </ThemedText>
        </View>
        <View style={styles.locRow}>
          <Ionicons name="location-outline" size={10} color={Colors.inkFaint} />
          <ThemedText type="small">{listing.location.city}, {listing.location.state}</ThemedText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export function ListingCardRow({ listing, onPress }: CardProps) {
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={onPress} style={[styles.rowCard, {backgroundColor: theme.card, borderColor: theme.line,}]}>
      <View style={[styles.rowThumb, { backgroundColor: ["#E7E4DE", "#D8D4CB"][0] }]}>
        {listing.tag.toLowerCase() === "sold" && (
          <View style={styles.soldOverlaySmall}>
            <Text style={styles.soldTextSmall}>Sold</Text>
          </View>
        )}
      </View>
      <View style={styles.rowBody}>
        {listing.tag.toLowerCase() === "featured" && <Badge label="Featured" tone="gold" />}
        <Text style={[styles.rowTitle, {color: theme.ink,}]} numberOfLines={2}>
          {listing.title}
        </Text>
        <View style={styles.locRow}>
          <Ionicons name="location-outline" size={11} color={Colors.inkFaint} />
          <Text style={styles.rowMeta}>
            {listing.location.city}, {listing.location.state} · {listing.createdAt}
          </Text>
        </View>
        <Text style={[styles.rowPrice, {color: theme.coralDark,}]}>{formatNaira(listing.price)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  compactCard: {
    width: "100%",
    borderRadius: Radius.md,
    borderWidth: 1,
    overflow: "hidden",
    marginRight: Spacing.three,
  },
  compactImage: {
    height: 140,
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
    width: 30,
    height: 30,
    borderRadius: 100,
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
    minHeight:120,
    justifyContent:'space-between',
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
    borderWidth: 1,
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
    
  },
  rowMeta: {
    // fontFamily: fonts.bodyRegular,
    fontSize: 10.5,
    color: Colors.inkFaint,
  },
  rowPrice: {
    // fontFamily: fonts.displaySemibold,
    fontSize: 14,
    marginTop: 2,
  },
});
