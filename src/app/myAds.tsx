import Ad from "@/components/ad";
import { Chip } from "@/components/Chip";
import Container from "@/components/custom-container";
import OptionCard from "@/components/option";
import { ThemedText } from "@/components/themed-text";
import { Radius, Spacing } from "@/constants/theme";
import { ads, OPTIONMENU } from "@/data/mock";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import { useCallback, useRef, useState } from "react";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "../../styles/styles";

const FILTERS = ["Active", "Sold", "Expired"];
export default function CategoryScreen(){
    const [activeFilter, setActiveFilter] = useState("Active");
    const styles = useStyles();
    const theme = useTheme();
    const optionRef = useRef<BottomSheet>(null);
    const [index, setIndex] = useState(-1);
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
    return(
        <View style={{flex:1}}>
        <Container edges={['top', 'bottom']}>
            <View style={[styles.row, {paddingHorizontal:Spacing.three}]}>
                <TouchableOpacity onPress={()=>router.back()} style={[styles.top2Icon, {marginRight:Spacing.two}]}>
                    <MaterialIcons name="arrow-back" size={23} color={theme.text}/>
                </TouchableOpacity>
                <ThemedText type="subtitle">My ads</ThemedText>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.chipRow}
                style={{flexGrow:0}}
                >
                {FILTERS.map((f) => (
                    <Chip key={f} label={f} active={f === activeFilter} onPress={() => setActiveFilter(f)} />
                ))}
            </ScrollView>
            <View style={{padding:Spacing.three}}>
                <FlatList
                    data={ads}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Ad 
                        id={item.id}
                        onPress={() => router.push({ pathname: "/detail", params: { id: item.id } })} 
                        condition={item.condition}
                        onOption={handleOption}
                        />
                    )}
                />
            </View>
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