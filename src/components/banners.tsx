import BannerSlider from "@/components/banner";
import Paginator from "@/components/paginatorBanner";
import { Spacing } from "@/constants/theme";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, View } from "react-native";

const { width } = Dimensions.get("window");
export default function Banner({bannerSliderData}:any) {
  useEffect(() => {
  if (!bannerSliderData.length) return;

  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex =
        prevIndex < bannerSliderData.length - 1 ? prevIndex + 1 : 0;

      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });

      return nextIndex;
    });
  }, 4000);

  return () => clearInterval(interval);
}, [bannerSliderData]);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<any> | null>(null);
  const handlePress = (dealID:string) => {
      router.navigate({
        pathname: '/',
        params: { id:dealID }
      });
  };
  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
  if (viewableItems.length > 0) {
    setCurrentIndex(viewableItems[0].index);
  }
}).current;
const viewConfig = useRef({
  viewAreaCoveragePercentThreshold: 50,
}).current;
  return (
      <View style={{padding:Spacing.three}}>
        <FlatList
        data={bannerSliderData}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        getItemLayout={(data, index) => ({
          length: width-Spacing.five,
          offset: (width-Spacing.five) * index,
          index,
        })}
        ref={flatListRef}
        renderItem={({item})=><View><BannerSlider title={item.title} desc={item.desc} onPress={item.onPress} image={item.image}/></View>}
        />
        <Paginator data={bannerSliderData} currentIndex={currentIndex} />
      </View>
  );
}