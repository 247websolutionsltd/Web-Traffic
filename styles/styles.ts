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
      padding:Spacing.two,
      backgroundColor:"#FAF9F722",
      borderRadius:Radius.md
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
      color: theme.text
    },
    inputView:{
        flexDirection:'row',
        padding: Spacing.two,
        backgroundColor: theme.card,
        borderRadius: Radius.sm,
        alignItems:'center',
        borderWidth:1,
        borderColor:theme.line
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
      borderRightColor: theme.line,
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
      backgroundColor: theme.line,
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
      borderColor: theme.line,
      backgroundColor: theme.card,
      alignItems: "center",
      justifyContent: "center",
      flexDirection:'row'
    },
    socialLabel: {
      // fontFamily: fonts.bodySemibold,
      fontSize: 12,
      color: theme.ink,
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
      borderColor: theme.paper,
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
    color: theme.ink,
  },
  bell: {
    width: 44,
    height: 44,
    borderRadius: 60,
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: theme.line,
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
    color: theme.ink,
  },
  seeAll: {
    // fontFamily: fonts.bodySemibold,
    fontSize: 13,
    color: theme.coralDark,
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
  topIcon:{
    position:'absolute', 
    paddingVertical:Spacing.two,
  },
  top2:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  top2Icon:{
    padding:Spacing.two,
    borderRadius:80,
    backgroundColor:theme.card
  },
  category:{
    backgroundColor:theme.card,
    flexDirection:'row', 
    marginVertical:Spacing.two,
    padding:12,
    maxWidth:'100%',
    borderRadius:Radius.lg
  },
  ad:{
    backgroundColor:theme.card,
    flexDirection:'row', 
    marginVertical:Spacing.two,
    padding:Spacing.three,
    paddingRight:0,
    borderRadius:Radius.lg,
    minHeight:170,
    justifyContent:'space-between',
    alignItems:'center'
  },
  categoryImage:{
    width:90,
    height:90,
    backgroundColor:theme.inkSoft,
    borderRadius:Radius.lg
  },
  adImage:{
    width:95,
    height:95,
    backgroundColor:theme.inkSoft,
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
    backgroundColor: theme.paper,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.three,
    paddingHorizontal: Spacing.five,
    paddingTop: 56,
    paddingBottom: Spacing.three,
    backgroundColor: theme.card,
    borderBottomWidth: 1,
    borderBottomColor: theme.line,
  },
  circleBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: theme.paper,
    borderWidth: 1,
    borderColor: theme.line,
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
    color: theme.ink,
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
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: theme.line,
    borderTopLeftRadius: 4,
  },
  bubbleMe: {
    backgroundColor: Colors.coral,
    borderTopRightRadius: 4,
  },
  bubbleText: {
    // fontFamily: fonts.bodyRegular,
    fontSize: 13,
    color: theme.ink,
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
    backgroundColor: theme.card,
    borderTopWidth: 1,
    borderTopColor: theme.line,
  },
  chatInput: {
    flex: 1,
    minHeight: 40,
    maxHeight: 100,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: theme.line,
    backgroundColor: theme.paper,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two + 2,
    // fontFamily: fonts.bodyRegular,
    fontSize: 13,
    color: theme.ink,
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
    color: theme.ink,
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
    color: theme.ink,
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
    backgroundColor: theme.line,
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
  chat:{
    flexDirection:'row',
    alignItems:'center',
    minHeight:80,
    paddingHorizontal:Spacing.three
  },
  messageNumber:{
    backgroundColor:Colors.coral, 
    width:15,
    height:15,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20
  },
  chatCenter:{
    justifyContent:'space-between', 
    flex:1, 
    padding:Spacing.one,
    paddingHorizontal:Spacing.two
  },
  profileContainer:{
    flexGrow:1,
    backgroundColor:theme.paper
  },
  profileTop:{
    backgroundColor:Colors.navy,
    paddingBottom:Spacing.three,
    paddingHorizontal: Spacing.three
  },
  profileInit:{
    borderWidth:3,
    borderColor:"rgba(255,255,255,0.2)",
    padding:Spacing.four,
    borderRadius:500,
    backgroundColor:Colors.coral,
    alignSelf:'flex-start'
  },
  stats:{
    flexDirection:'row',
    backgroundColor: theme.background,
    justifyContent:'space-between',
    borderRadius:Radius.lg,
    marginHorizontal:Spacing.five,
    height:90,
    bottom:45,
  },
  stat:{
    alignItems:'center', 
    justifyContent:'center',
    width:'33%'
  },
  statCenter:{
    borderLeftWidth:1,
    borderRightWidth:1,
    borderColor:theme.line
  },
  statShadow:{
    backgroundColor:theme.ink,
    opacity:0.04,
    bottom:131,
    zIndex:-1,
  },
  profileCard:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderBottomWidth:1,
    borderColor:theme.line,
    padding:Spacing.three
  },
  menuIconView:{
    padding:Spacing.three,
    backgroundColor:Colors.coralTint,
    borderRadius:10,
    marginRight:Spacing.two
  },
  detailImage:{
    height:350,
    width:'100%',
    backgroundColor:"#C7C2B6",
    paddingHorizontal:Spacing.three
  },
  detailView:{
    borderTopLeftRadius:24,
    borderTopRightRadius:24,
    backgroundColor:theme.paper,
    bottom:24,
    padding:Spacing.three
  },
  badgeSlot: {
    position: "absolute",
    top: 8,
    left: 8,
  },
  detailVerified:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:theme.card,
    padding:Spacing.two,
    borderRadius:Radius.md,
    marginVertical:Spacing.three
  },
  verifiedView:{
    alignItems:'center',
    backgroundColor:Colors.greenTint,
    padding:Spacing.one,
    paddingHorizontal:Spacing.three,
    borderRadius:Radius.md,
  }
});