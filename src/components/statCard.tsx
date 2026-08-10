import { useTheme } from "@/hooks/use-theme";
import { Image } from "expo-image";
import { TouchableOpacity } from "react-native";
import { useStyles } from "../../styles/styles";

interface StatCardProps{
    image: string;
}
export default function StatCard({image}:StatCardProps){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <TouchableOpacity>
            <Image style={styles.statCardImage} source={image}/>
        </TouchableOpacity>
    )
}