import { Spacing } from '@/constants/theme';
import { useAuth } from '@/context/AuthContext';
import { useTheme } from '@/hooks/use-theme';
import { MaterialIcons } from "@expo/vector-icons";
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
  iconLeft?: MaterialIconName | null;
  disabled?: boolean
}

export default function Button({
  onPress,
  buttonColor,
  textColor,
  icon,
  type = "primary",
  isLoading,
  textSize=18,
  title,
  disabled=false,
  style,
  iconLeft,
}: props) {
 const theme = useTheme();
 const styles = useStyles();
 const {loading} = useAuth();
 const btnLoad = isLoading === undefined ? loading : isLoading;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        type === "primary" ? styles.button : styles.button2,
        style,
      ]}
      disabled={disabled}
    >
      {btnLoad ? (
        <ActivityIndicator size={27} color={"#FFF"}/>
      ) : (
        <View style={styles.row}>
          {
            iconLeft &&
            <MaterialIcons name={iconLeft} size={22} color={"#FFF"} style={{marginRight:Spacing.one}}/>
          }
          <ThemedText
           style={{color:type === "secondary" ? textColor || theme.text : '#FFF', fontSize:textSize}}
            type='bold'>
              {title}
            </ThemedText>
          {
            icon &&
            <MaterialIcons name={icon} size={textSize || 22} color={"#FFF"}/>
          }
          
        </View>
      )}
    </TouchableOpacity>
  );
}