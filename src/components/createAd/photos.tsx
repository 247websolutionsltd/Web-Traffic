import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { View } from "react-native";
import { useStyles } from "../../../styles/styles";
import ImageUpload from "../imageUpload";
import { ThemedText } from "../themed-text";

export default function Photos(){
    const theme = useTheme();
    const styles = useStyles();
    const images = [
        {
            image:"https://images.unsplash.com/photo-1779896411955-87ecb3bc091e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
            cover:true
        },
        {
            image:"https://images.unsplash.com/photo-1786367242321-e06954013e12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
            cover:false
        },
        {
            image:"https://images.unsplash.com/photo-1786374227616-3f8a323cb9d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
            cover:false
        },
        {
            image:"https://images.unsplash.com/photo-1786410624831-eefe1de4a6cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
            cover:false
        },
        {
            image:"https://images.unsplash.com/photo-1786276787903-185b1838d267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
            cover:false
        }
    ]
    return(
        <View style={{flex:1}}>
            <View style={{margin:Spacing.two, paddingHorizontal:Spacing.two}}>
                <ThemedText type="subtitle">Add your photos</ThemedText>
                <ThemedText style={{color:theme.textSecondary}}>Listings with 3+ photos get seen twice as often</ThemedText>
            </View>

            <View style={styles.uploadImages}>
                {
                    images.map((item, index)=>(
                        <View key={index} style={{width:'33.33%', padding:Spacing.two}}>
                            <ImageUpload
                                image={item.image}
                                cover={item.cover}
                            />
                        </View>
                    ))
                }
            </View>
        </View>
    )
}