import { Colors } from "@/constants/theme";
import { StyleSheet, View } from "react-native";
const Paginator = ({ data, currentIndex }: any) => {
  return (
    <View style={styles.container}>
      {data.map((_: any, index: number) => (
        <View
          key={index}
          style={[
            styles.dot,
            currentIndex === index && styles.activeDot,
          ]}
        />
      ))}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 20,
    justifyContent: "center",
    alignItems:'center',
    marginTop:3
  },
  dot: {
    height: 4,
    width: 4,
    borderRadius: 4,
    backgroundColor: "#ebe2e2",
    margin: 3,
  },
  activeDot: {
    backgroundColor: Colors.primary,
    height:6,
    width:6
  },
});