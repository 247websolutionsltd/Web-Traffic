import Ad from "@/components/ad";
import Container from "@/components/custom-container";
import OptionCard from "@/components/option";
import { ThemedText } from "@/components/themed-text";
import { Colors, Radius, Spacing } from "@/constants/theme";
import { useAuth } from "@/context/AuthContext";
import { OPTIONMENU } from "@/data/mock";
import useAuthentication from "@/hooks/authHook";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { ActivityIndicator, FlatList, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "../../styles/styles";

const FILTERS = ["Active", "Sold", "Expired"];
export default function CategoryScreen(){
    const [activeFilter, setActiveFilter] = useState("Active");
    const styles = useStyles();
    const theme = useTheme();
    const optionRef = useRef<BottomSheet>(null);
    const [index, setIndex] = useState(-1);
    const { user } = useAuth();
    const handleOption=()=>{
        setIndex(0)
    }
    // const snapPoints = useMemo(() => ["55%"],['75%']);
    const renderBackdrop = useCallback(
        (props: any) => (
            <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            opacity={0.6}
            pressBehavior="close"
            />
        ),
        []
    );
    const { getSellerListings } = useAuthentication();
    const [ listings, setListings ] = useState<any>();
     useEffect(()=>{
        const load = async()=>{
            const data = await getSellerListings(user?.id || "");
            setListings(data.listings)
        }
        load()
    },[])
    return(
        <View style={{flex:1}}>
        <Container edges={['top', 'bottom']}>
            <View style={[styles.row, {paddingHorizontal:Spacing.three}]}>
                <TouchableOpacity onPress={()=>router.back()} style={[styles.top2Icon, {marginRight:Spacing.two}]}>
                    <MaterialIcons name="arrow-back" size={23} color={theme.text}/>
                </TouchableOpacity>
                <ThemedText type="subtitle">My ads</ThemedText>
            </View>
            {/* <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.chipRow}
                style={{flexGrow:0}}
                >
                {FILTERS.map((f) => (
                    <Chip key={f} label={f} active={f === activeFilter} onPress={() => setActiveFilter(f)} />
                ))}
            </ScrollView> */}
            {
                listings ?
                <View style={{padding:Spacing.three, paddingTop:0}}>
                    <FlatList
                        data={listings}
                        scrollEnabled={false}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <Ad 
                            id={item._id}
                            onPress={() => router.push({ pathname: "/detail", params: { id: item._id } })} 
                            condition={"Live"}
                            onOption={handleOption}
                            />
                        )}
                        ListEmptyComponent={()=>(
                            <View style={styles.absoluteCenter}>
                                <ThemedText type="title" style={{color:theme.textSecondary}}>♡</ThemedText>
                                <ThemedText style={{color:theme.textSecondary}}>No ads yet</ThemedText>
                            </View>
                        )}
                    />
                </View>
                :
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <ActivityIndicator size={55} color={Colors.coral}/>
                </View>
                
                }
            </Container>
            {
                index === 0 &&
                <BottomSheet
                ref={optionRef}
                index={index}
                enableDynamicSizing
                enablePanDownToClose
                onClose={()=>setIndex(-1)}
                backdropComponent={renderBackdrop}
                backgroundStyle={{backgroundColor: theme.paper}}
                handleIndicatorStyle={{backgroundColor:theme.text}}
                >
                <BottomSheetView style={{ flex: 1, backgroundColor: theme.paper, borderRadius:Radius.lg}}>
                    <SafeAreaView edges={['bottom']}>
                        {
                            OPTIONMENU.map((item, i) => (
                            <OptionCard 
                            title={item.label} 
                            key={item.label} 
                            onPress={item.onPress} 
                            icon={item.icon} 
                            color={item.color}
                            background={item.background}
                            />
                        ))}
                    </SafeAreaView>
                </BottomSheetView>
                </BottomSheet>
            }
        </View>
    )
}