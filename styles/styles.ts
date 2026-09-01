import { Colors, Radius, Spacing } from "@/constants/theme";
import { Dimensions, StyleSheet, useColorScheme } from "react-native";

// export type ThemeType = typeof Colors.light;
export function useStyles() {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = colorScheme === "light" ? Colors.light : Colors.dark;
  const {width, height} = Dimensions.get('window');
  // Pass the active theme colors into the factory function below
  return createStyles(theme, width, height);
}


const createStyles = (theme:any, width:any, height:any)=>StyleSheet.create({
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
      backgroundColor:"#5c534232",
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
      width: 200,
      height: 200,
      borderRadius: 600,
      backgroundColor: Colors.coralTint,
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
    width: 50,
    height: 50,
    borderRadius: 100,
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
    width: 50,
    height: 50,
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
    fontSize: 14,
    fontWeight:500,
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
    paddingHorizontal:Spacing.two
  },
  listing:{
    width:'50%',
    padding:Spacing.two,
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
    padding:Spacing.two,
    borderRadius:Radius.lg,
    minHeight:120,
    borderWidth:1,
    borderColor:theme.line,
  },
  ad:{
    backgroundColor:theme.card,
    flexDirection:'row', 
    marginVertical:Spacing.two,
    padding:Spacing.two,
    paddingRight:0,
    borderRadius:Radius.lg,
    // minHeight:170,
    justifyContent:'space-between',
    borderWidth:1,
    borderColor:theme.line
  },
  categoryImage:{
    width:100,
    height:100,
    borderRadius:Radius.md
  },
  adImage:{
    width:95,
    height:95,
    backgroundColor:theme.inkSoft,
    borderRadius:Radius.lg
  },
  categoryRight:{
    padding:Spacing.two,
    justifyContent:'space-between',
    flexShrink:1
  },

  container: {
    flex: 1,
    backgroundColor: theme.paper,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.three,
    padding:Spacing.three,
    paddingBottom: Spacing.three,
    backgroundColor: theme.card,
    borderBottomWidth: 1,
    borderBottomColor: theme.line,
  },
  circleBtn: {
    padding:Spacing.two,
    borderRadius: 100,
    backgroundColor: theme.paper,
    borderWidth: 1,
    borderColor: theme.line,
    alignItems: "center",
    justifyContent: "center",
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 60,
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
    padding: Spacing.three,
    gap: Spacing.one,
  },
  bubbleRow: {
    maxWidth: "80%",
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
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.three,
    backgroundColor: theme.card,
    borderTopWidth: 1,
    borderTopColor: theme.line,
  },
  chatInput: {
    flex: 1,
    minHeight: 50,
    maxHeight: 120,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: theme.line,
    backgroundColor: theme.paper,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two + 2,
    // fontFamily: fonts.bodyRegular,
    fontSize: 13,
    color: theme.ink,
    marginRight:Spacing.two
  },
  sendBtn: {
    padding:Spacing.two,
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
    borderRadius:900,
    backgroundColor:Colors.coral,
    alignSelf:'flex-start'
  },
  stats:{
    flexDirection:'row',
    backgroundColor: theme.card,
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
    opacity:0.1,
    bottom:131,
    zIndex:-1,
  },
  profileCard:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
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
  },
  detailView:{
    borderTopLeftRadius:24,
    borderTopRightRadius:24,
    backgroundColor:theme.paper,
    marginTop:-24,
    padding:Spacing.three,
    flex:1,
    justifyContent:'space-between'
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
    padding:Spacing.one,
    paddingHorizontal:Spacing.three,
    borderRadius:Radius.md,
  },
  adType:{
    width:9,
    height:9,
    borderRadius:20,
  },
  optionCircle:{
    width:3.5,
    height:3.5,
    borderRadius:10,
    backgroundColor:Colors.inkFaint,
    marginVertical:0.8
  },
  settingsView:{
    backgroundColor:theme.card,
    borderColor:theme.line,
    borderWidth:1,
    borderRadius:Radius.lg
  },
  toggleView:{
    flexDirection:'row',
    alignItems:'center',
    borderRadius:Radius.pill
  },
  toggleCircle:{
    backgroundColor:"#FFF",
    borderRadius:150,
    margin:4
  },
  store:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    minHeight:120,
    padding:Spacing.three,
    borderRadius:Radius.lg,
    backgroundColor:theme.card,
    marginVertical:Spacing.two,
    borderWidth:1,
    borderColor:theme.line
    
  },
  storeMid:{
    flexShrink:1,
    padding:10,
    justifyContent:'space-between',
  },
  storeHeader:{
    height:'30%',
    padding:Spacing.three
  },
  storeTop:{
    bottom:50,
    backgroundColor:theme.card,
    marginHorizontal:Spacing.four,
    borderRadius:Radius.md
  },
  banner:{
    width:width-Spacing.five,
    height:Spacing.banner,
  },
  bannerView:{
    flex:1,
    backgroundColor:'#00000065',
    padding:Spacing.three,
    justifyContent:'center',
    borderRadius:Radius.lg
  },
  bannerLeft:{
    maxWidth:'55%'
  },
  bannerButton:{
    borderWidth:1,
    borderColor:"#fff",
    borderRadius:Radius.sm,
    alignSelf:'flex-start',
    padding:Spacing.two,
    paddingHorizontal:Spacing.three,
    marginVertical:Spacing.two
  },
  sponsoredImage:{
    height:Spacing.banner,
    marginVertical:Spacing.three
  },
  sponsoredView:{
    flex:1,
    backgroundColor:'#0000005d',
    padding:Spacing.three,
    justifyContent:'center',
    alignItems:'center'
  },
  sponsoredTag:{
    backgroundColor:'#00000093',
    alignSelf:'flex-start',
    padding:Spacing.two,
    borderRadius:Radius.md,
    position:'absolute',
    top:0,
    margin:Spacing.two
  },
  catTest:{
    flexDirection:'row',
    justifyContent:'space-between',
    minHeight:Spacing.banner,
    borderWidth:1,
    borderColor:theme.line,
    backgroundColor:'#00000075',
    paddingBottom:Spacing.three,
    margin:Spacing.two
  },
  catTestLeft:{
    flexShrink:1, 
    maxWidth:'50%',
    justifyContent:'space-between',
  },
  newBottom:{
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'space-between',
    padding:Spacing.three,
  },
  newArrivals:{
    marginVertical:Spacing.three,
    borderWidth:1,
    borderColor:theme.line,
  },
  newArrivalsImage:{
    height:Spacing.banner-50,
    width:'100%',
  },
  categoryCardImage:{
    width:"100%",
    height:120,
    borderTopRightRadius:Radius.sm,
    borderTopLeftRadius:Radius.sm
  },
  categoriesView:{
    flexDirection:'row',
    flexWrap:'wrap',
    padding:Spacing.two,
    marginTop:Spacing.two
  },
  categoriesDataView:{
    width:'50%',
    padding:Spacing.two
  },
  categoriesCard:{
    width:'100%',
    borderWidth:1,
    borderColor:theme.line,
    borderRadius:Radius.sm
  },
  categoriesCardBottom:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:theme.card,
    padding:Spacing.three,
    borderBottomRightRadius:Radius.sm,
    borderBottomLeftRadius:Radius.sm
  },
  categoriesListingNumber:{
    backgroundColor:theme.paper, 
    paddingHorizontal:10,
    borderRadius:Radius.lg
  },
  storeCardView:{
    flex:1, 
    backgroundColor:"#00000048", 
    alignItems:'center', 
    justifyContent:'center',
    borderRadius:Radius.sm
  },
  storeCard:{
    width:"100%", 
    height:120, 
    borderWidth:1, 
    borderColor:theme.line,
    borderRadius:Radius.sm
  },
  search:{
    backgroundColor:theme.card, 
    padding:Spacing.two, 
    borderRadius:Radius.md,
    borderWidth:1,
    borderColor:theme.line
  },
  storeScreen:{
    height:200,
  },
  storeHeaderImage:{
    width:70,
    height:70,
    borderRadius:Radius.md,
  },
  storeHeaderTop:{
    backgroundColor:theme.card,
    borderWidth:1,
    borderColor:theme.line,
    borderRadius:Radius.lg
  },
  storeHeaderImageView:{
    padding:Spacing.one, 
    bottom:Spacing.three, 
    backgroundColor:theme.card, 
    alignSelf:'flex-start',
    borderRadius:Radius.md,
    marginHorizontal:Spacing.four
  },
  verified:{
    borderRadius:90,
    width:20,
    height:20,
    alignItems:'center',
    justifyContent:'center'
  },
  rowStretch:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  scene: {
    padding: 12,
    width,
  },
  tabBar: {
    backgroundColor: theme.paper,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderBottomColor: theme.line,
  },
  indicator: {
    backgroundColor: theme.coralDark,
    height: 2,
    width:80
  },
  label: {
    fontWeight: '600',
    fontSize: 18,
    textTransform: 'none',
  },
  createLabelView:{
    flexDirection:'row',
    margin:Spacing.three,
    marginBottom:0
  },
  createLabel:{
    height:4,
    borderRadius:Radius.md,
  },
  storeAddImageView:{
    width:150, 
    height:150,
    borderWidth:1,
    borderColor:Colors.coral,
    borderRadius:Radius.lg,
    alignItems:"center",
    justifyContent:'center',
    alignSelf:'center',
    backgroundColor:"#FDEBEE55",
    marginVertical:Spacing.three,

  },
  input2:{
    padding: Spacing.two,
    backgroundColor: theme.card,
    borderRadius: Radius.sm,
    borderWidth:1,
    borderColor:theme.line,
    color:theme.text,
    height:150,
    textAlignVertical:'top',
  },
  storeInfoView:{
    marginVertical:Spacing.three,
    borderRadius:Radius.lg,
    backgroundColor:theme.card,
    borderWidth:1,
    borderColor:theme.line,
  },
  storeReviewInfo:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:Spacing.three,
    borderBottomColor:theme.line,
  },
  storeTopEdit:{
    borderWidth:1,
    borderColor:theme.line,
    backgroundColor:theme.paper,
    alignItems:'center',
    borderRadius:Radius.md,
    paddingVertical:Spacing.three
  },
  storeStatIcon:{
    alignSelf:'flex-start', 
    padding:Spacing.two, 
    borderRadius:Radius.sm
  },
  storeStat:{
    padding:Spacing.three,
    backgroundColor:theme.card,
    borderRadius:Radius.md,
    borderWidth:1,
    borderColor:theme.line,
    minHeight:130,
    justifyContent:'space-between'
  },
  storeStats:{
    flexDirection:'row', 
    flexWrap:'wrap',
    padding:Spacing.two
  },
  statCardImage:{
    width:80, 
    height:80,
    borderRadius:Radius.md
  },
  statCard:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:theme.card,
    marginVertical:Spacing.two,
    borderRadius:Radius.lg,
    padding:Spacing.two
  },
  startCardRight:{
    flexShrink:1,
    paddingHorizontal:Spacing.two
  },
  circle:{
    height:8,
    width:8,
    borderRadius:20
  },
  cancelView:{
    padding:Spacing.one,
    borderRadius:50,
    backgroundColor:Colors.black,
  },
  imageUpload:{
    width:'100%',
    height:100,
  },
  imageUploadView:{
    flex:1, 
    backgroundColor:"#00000033",
    borderRadius:Radius.md,
    justifyContent:'space-between',
    padding:6
  },
  coverView:{
    backgroundColor:Colors.black,
    alignSelf:'flex-start',
    padding:Spacing.one,
    paddingHorizontal:Spacing.two,
    borderRadius:Radius.lg
  },
  uploadImages:{
    flexDirection:'row',
    flexWrap:'wrap',
    paddingHorizontal:Spacing.two
  },
  negotiable:{
    margin:Spacing.three,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:theme.card,
    padding:Spacing.three,
    borderRadius:Radius.md,
    borderWidth:1,
    borderColor:theme.line
  },
  createCard:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:Spacing.three,
    backgroundColor:theme.card,
    borderRadius:Radius.md,
    borderWidth:1,
    borderColor:theme.line,
  },
  previewCard:{
    borderRadius:Radius.lg,
    backgroundColor:theme.card,
  },
  previewCardImage:{
    width:'100%',
    height:160,
    padding:Spacing.two
  },
  checkBox:{
    borderRadius:7,
    alignSelf:'flex-start',
    height:22,
    width:22,
    alignItems:'center',
    justifyContent:'center'
  },
  boostInfo:{
    padding:Spacing.three,
    borderRadius:Radius.md,
    backgroundColor:Colors.goldTint,
    marginVertical:Spacing.three,
    flexShrink:1
  },
  liveImage:{
    width:80, 
    height:80,
    borderRadius:Radius.md
  },
  liveCard:{
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    backgroundColor:theme.card,
    borderRadius:Radius.md,
    padding:Spacing.two,
    borderWidth:1,
    borderColor:theme.line,
    marginVertical:Spacing.three
  },
  uploadEmpty:{
    borderWidth:1,
    borderColor:Colors.coral,
    borderRadius:Radius.md,
    borderStyle:'dashed',
    height:100,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:Colors.coralTint
  },
  bottom:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:Spacing.three,
    marginTop:Spacing.three
  },
  tab:{
    width:80, 
    alignItems:'center', 
    paddingVertical:Spacing.one
  },
  absoluteCenter:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  profileEditView:{
    backgroundColor:"#000",
    borderRadius:Radius.pill,
    padding:6
  },
  loadView:{
    flex:1,
    position:'absolute',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height,
    backgroundColor:'#00000055'
  },
  addView:{
    flex:1,
    alignItems:'flex-end',
    justifyContent:'flex-end',
    position:'absolute',
    height,
    width,
    paddingVertical: Spacing.three + 105,
    paddingHorizontal: Spacing.three
  },
  add:{
    padding:12,
    borderRadius:200,
    backgroundColor:Colors.coral
  }
});