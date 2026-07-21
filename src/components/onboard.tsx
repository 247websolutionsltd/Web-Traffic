import { Dimensions, Image, StyleSheet, View } from "react-native";
import { ThemedText } from "./themed-text";

const { width } = Dimensions.get("window");

const OnboardingItem = ({ item }: any) => {
  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.textContainer}>
        <View />
        <Image style={styles.image} source={item.image} resizeMode="contain"/>
        <View style={{paddingBottom:25}}>
          <ThemedText type='title' style={{fontSize:32, lineHeight:42, textAlign:'center'}}>{item.title}</ThemedText>
          <ThemedText style={styles.desc}>
            {item.description}
          </ThemedText>
        </View>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
  },
  image: {
    width: "100%",
    height: "60%",
  },
  textContainer: {
    flex: 1,
    justifyContent:'space-between',
    padding:20,
  },
  desc: {
    marginTop: 10,
    opacity: 0.8,
    textAlign:'center'
  },
});