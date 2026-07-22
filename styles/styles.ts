import { Colors, Radius, Spacing } from "@/constants/theme";
import { StyleSheet, useColorScheme } from "react-native";

// export type ThemeType = typeof Colors.light;
export function useStyles() {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = colorScheme === "light" ? Colors.light : Colors.dark;

  // Pass the active theme colors into the factory function below
  return createStyles(theme);
}


const createStyles = (theme:any)=>StyleSheet.create({
    button: {
    height:60,
    borderRadius: 16,
    alignItems: "center",
    justifyContent:'center',
    backgroundColor:Colors.primary 
  },
    button2:{
      borderWidth:1,
      borderColor:theme.text,
      alignItems:'center',
      justifyContent:'center',
      height:60,
      borderRadius:16
    },
    row:{
      flexDirection:'row',
      alignItems:'center',
    },
    backButton:{
      borderWidth:1,
      borderColor:theme.text,
      alignItems:'center',
      justifyContent:'center',
      width:'25%',
      marginRight:10,
      height:50,
      borderRadius:16
    },
    skip: {
      position: "absolute",
      top: 50,
      right: 20,
      zIndex: 10,
    },
    splash:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#16213E'
    },
    splashLogo:{
      width:150,
      height:150
    },
    topView:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
    },
    input:{
      flex:1,
    },
    inputView:{
        flexDirection:'row',
        padding: Spacing.two,
        backgroundColor: Colors.card,
        borderRadius: Radius.sm,
        alignItems:'center',
        borderWidth:1,
        borderColor:Colors.line
    },
    inputError:{
      borderColor: Colors.coral,
      shadowColor: Colors.coral,
      shadowOpacity: 0.15,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 0 },
    },
    prefixWrap: {
      borderRightWidth: 1,
      borderRightColor: Colors.line,
      paddingRight: Spacing.two,
      marginRight: Spacing.one,
    },
    errorText: { color: "#DC2626", fontSize: 12, marginTop: 4 },
    dividerRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: Spacing.two,
      marginVertical: Spacing.four,
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: Colors.line,
    },
    dividerText: {
      // fontFamily: fonts.bodyRegular,
      fontSize: 11,
      color: Colors.inkFaint,
    },
    socialRow: {
      flexDirection: "row",
      gap: Spacing.three,
    },
    socialBtn: {
      flex: 1,
      height: 46,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: Colors.line,
      backgroundColor: Colors.card,
      alignItems: "center",
      justifyContent: "center",
      flexDirection:'row'
    },
    socialLabel: {
      // fontFamily: fonts.bodySemibold,
      fontSize: 12,
      color: Colors.ink,
    },
    upload1:{
      width: 150,
      height: 150,
      borderRadius: 600,
      backgroundColor: Colors.coralTint,
      borderWidth: 1.5,
      borderColor: "#D8B6BC",
      borderStyle: "dashed",
      alignItems: "center",
      justifyContent: "center",
      alignSelf:'center',
      marginVertical: Spacing.four
    },
    editBadge: {
      position: "absolute",
      bottom: 7,
      right: 7,
      width: 28,
      height: 28,
      borderRadius: 14,
      backgroundColor: Colors.coral,
      borderWidth: 2,
      borderColor: Colors.paper,
      alignItems: "center",
      justifyContent: "center",
    },
    checkView:{
      width: 150,
      height: 150,
      borderRadius: 600,
      backgroundColor: Colors.greenTint,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: Spacing.three,
      alignSelf:'center'
    },
    topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Spacing.two,
    paddingBottom: Spacing.three,
  },
  topBarLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.three,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 100,
    backgroundColor: Colors.navy,
  },
  deliverTo: {
    // fontFamily: fonts.bodyRegular,
    fontSize: 10.5,
    color: Colors.inkFaint,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  locationText: {
    // fontFamily: fonts.displaySemibold,
    fontSize: 14.5,
    color: Colors.ink,
  },
  bell: {
    width: 44,
    height: 44,
    borderRadius: 60,
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.line,
    alignItems: "center",
    justifyContent: "center",
  },
  bellDot: {
    position: "absolute",
    top: 10,
    right: 11,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.coral,
  },
  searchPlaceholder: {
    // fontFamily: fonts.bodyRegular,
    fontSize: 13,
    color: Colors.inkFaint,
  },
  chipRow: {
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.three,
  },
  sectionTitle: {
    // fontFamily: fonts.displaySemibold,
    fontSize: 15,
    color: Colors.ink,
  },
  seeAll: {
    // fontFamily: fonts.bodySemibold,
    fontSize: 13,
    color: Colors.coralDark,
  },
  categoryGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: Spacing.two,
    paddingHorizontal:Spacing.three
  },
  horizontalList: {
    marginVertical: Spacing.two,
    marginLeft: Spacing.three,
  },
  topIcon:{position:'absolute', paddingVertical:Spacing.two},
  category:{
    backgroundColor:Colors.white,
    flexDirection:'row', 
    marginVertical:Spacing.two,
    padding:12,
    maxWidth:'100%',
    borderRadius:Radius.lg
  },
  categoryImage:{
    width:100,
    height:100,
    backgroundColor:Colors.inkSoft,
    borderRadius:Radius.lg
  },
  categoryRight:{
    padding:Spacing.two,
    paddingVertical:Spacing.one,
    justifyContent:'space-between',
    maxWidth:'70%'
  },

  container: {
    flex: 1,
    backgroundColor: Colors.paper,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.three,
    paddingHorizontal: Spacing.five,
    paddingTop: 56,
    paddingBottom: Spacing.three,
    backgroundColor: Colors.card,
    borderBottomWidth: 1,
    borderBottomColor: Colors.line,
  },
  circleBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: Colors.paper,
    borderWidth: 1,
    borderColor: Colors.line,
    alignItems: "center",
    justifyContent: "center",
  },
  headerAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.navy,
  },
  headerName: {
    // fontFamily: fonts.displaySemibold,
    fontSize: 13.5,
    color: Colors.ink,
  },
  headerListing: {
    // fontFamily: fonts.bodyRegular,
    fontSize: 11,
    color: Colors.inkFaint,
  },
  messagesList: {
    padding: Spacing.five,
    gap: Spacing.three,
  },
  bubbleRow: {
    maxWidth: "80%",
    marginBottom: Spacing.two,
  },
  bubbleRowMe: {
    alignSelf: "flex-end",
    alignItems: "flex-end",
  },
  bubbleRowThem: {
    alignSelf: "flex-start",
    alignItems: "flex-start",
  },
  bubble: {
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two + 2,
  },
  bubbleThem: {
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.line,
    borderTopLeftRadius: 4,
  },
  bubbleMe: {
    backgroundColor: Colors.coral,
    borderTopRightRadius: 4,
  },
  bubbleText: {
    // fontFamily: fonts.bodyRegular,
    fontSize: 13,
    color: Colors.ink,
    lineHeight: 18,
  },
  bubbleTextMe: {
    color: Colors.white,
  },
  bubbleTime: {
    // fontFamily: fonts.bodyRegular,
    fontSize: 9.5,
    color: Colors.inkFaint,
    marginTop: 3,
  },
  composer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: Spacing.two,
    paddingHorizontal: Spacing.five,
    paddingVertical: Spacing.three,
    backgroundColor: Colors.card,
    borderTopWidth: 1,
    borderTopColor: Colors.line,
  },
  chatInput: {
    flex: 1,
    minHeight: 40,
    maxHeight: 100,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.line,
    backgroundColor: Colors.paper,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two + 2,
    // fontFamily: fonts.bodyRegular,
    fontSize: 13,
    color: Colors.ink,
  },
  sendBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.coral,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    // fontFamily: fonts.displayBold,
    fontSize: 20,
    color: Colors.ink,
    paddingHorizontal: Spacing.five,
    paddingTop: Spacing.two,
    marginBottom: Spacing.three,
  },
  body: {
    flex: 1,
    minWidth: 0,
  },
  name: {
    // fontFamily: fonts.displaySemibold,
    fontSize: 13,
    color: Colors.ink,
    marginBottom: 2,
  },
  message: {
    // fontFamily: fonts.bodyRegular,
    fontSize: 12,
    color: Colors.inkFaint,
  },
  meta: {
    alignItems: "flex-end",
    gap: 6,
  },
  time: {
    // fontFamily: fonts.bodyRegular,
    fontSize: 10.5,
    color: Colors.inkFaint,
  },
  unreadBadge: {
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: Colors.coral,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  unreadText: {
    // fontFamily: fonts.bodySemibold,
    fontSize: 10,
    color: Colors.white,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.line,
    marginLeft: Spacing.five + 46 + Spacing.three,
  },
  empty: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
    gap: Spacing.two,
  },
  emptyText: {
    // fontFamily: fonts.bodyMedium,
    fontSize: 12.5,
    color: Colors.inkFaint,
  },
});