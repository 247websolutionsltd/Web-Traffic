import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import { useTheme } from "expo-router";
import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  ViewProps
} from "react-native";
import { useStyles } from '../../styles/styles';
import { ThemedText } from "./themed-text";

type Type = "primary" | "secondary";
type MaterialIconName = React.ComponentProps<typeof MaterialIcons>["name"];
interface props extends ViewProps {
  onPress: () => void;
  buttonColor?: string;
  textColor?: string;
  type?: Type;
  isLoading?: boolean;
  title: string;
  textSize?: number;
  icon?: MaterialIconName | null;
  disabled?: boolean
}

export default function Button({
  onPress,
  buttonColor,
  textColor,
  icon,
  type = "primary",
  isLoading = false,
  textSize=16,
  title,
  disabled=false,
  style,
}: props) {
 const theme = useTheme();
 const styles = useStyles();




  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        type === "primary" ? styles.button : styles.button2,
        style,
      ]}
      disabled={disabled}
    >
      {isLoading ? (
        <ActivityIndicator size={23} />
      ) : (
        <View style={styles.row}>
          <ThemedText style={{color:type === "secondary" ? "#000" : '#FFF', fontSize:18}}>{title}</ThemedText>
          {
            icon &&
            <MaterialIcons name={icon} size={22} color={"#FFF"}/>
          }
          
        </View>
      )}
    </TouchableOpacity>
  );
}