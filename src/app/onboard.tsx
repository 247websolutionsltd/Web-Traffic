import Back from "@/components/back-button";
import Button from "@/components/button";
import OnboardingItem from "@/components/onboard";
import Paginator from "@/components/paginator";
import { ThemedText } from "@/components/themed-text";
import useHook from "@/hooks/general-hook";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { onboardingData } from "../../data/onboardData";
import { useStyles } from "../../styles/styles";

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<any> | null>(null);
  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const { isLoading, setIsLoading } = useHook();
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollToNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      finishOnboarding();
    }
  };
  const scrollBack = () => {
    if (currentIndex > 0) {
      flatListRef.current?.scrollToIndex({ index: currentIndex - 1 });
    } else {
      console.log("first")
    }
  };
  const finishOnboarding = async () => {
    setIsLoading(true);
    try {
      setIsLoading(false);
      router.navigate("/");
    } catch (e) {
      setIsLoading(false);
      console.error(e);
    }
  };
  const styles = useStyles();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:"#FAF9F7"}}>
      <TouchableOpacity style={styles.skip} onPress={finishOnboarding}>
        <ThemedText themeColor="textSecondary">Skip</ThemedText>
      </TouchableOpacity>

      <FlatList
        data={onboardingData}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={flatListRef}
      />
      <Paginator data={onboardingData} currentIndex={currentIndex} />
      <View style={onboardStyles.bottom}>
        {
          currentIndex > 0 &&
          <Back onPress={scrollBack}/>
        }
        
        <Button
         onPress={scrollToNext} 
         isLoading={isLoading} 
         title={currentIndex === onboardingData.length - 1 ? "Get Started" : "Next"}
         style={{flex:1}}
         icon={currentIndex === onboardingData.length - 1 ? null : "arrow-forward"}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const onboardStyles = StyleSheet.create({
  bottom:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:20,
    marginTop:20
  }
});
