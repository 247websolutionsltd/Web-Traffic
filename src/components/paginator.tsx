import { Colors } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { StyleSheet, View } from "react-native";

const Paginator = ({ data, currentIndex }: any) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      {data.map((_: any, index: number) => (
        <View
          key={index}
          style={[
            styles.dot,
            {backgroundColor: theme.inkSoft},
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
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    margin: 5,
  },
  activeDot: {
    backgroundColor: Colors.primary,
    width: 20,
  },
});