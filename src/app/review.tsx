import Button from "@/components/button";
import Container from "@/components/custom-container";
import PreviewCard from "@/components/previewCard";
import ReviewTextsCard from "@/components/reviewTextCard";
import { ThemedText } from "@/components/themed-text";
import { Colors, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";

export default function Review(){
    const theme = useTheme();
    const styles = useStyles();
    const [ checked, setChecked ] = useState(false);
    return(
        <Container edges={['top', 'bottom']}>
            <View style={[styles.row, {paddingHorizontal:Spacing.three}]}>
                <TouchableOpacity onPress={()=>router.back() } style={[styles.top2Icon, {marginRight:10}]}>
                    <MaterialIcons name="arrow-back" size={23} color={theme.text}/>
                </TouchableOpacity>
                <ThemedText type="subtitle">Post your ad</ThemedText>
            </View>
            <View style={{margin:Spacing.two, paddingHorizontal:Spacing.two}}>
                <ThemedText style={{color:theme.textSecondary}}>This is exactly how buyers will see it</ThemedText>
            </View>
            <View style={{padding:Spacing.three}}>
                <PreviewCard
                    image="https://images.unsplash.com/photo-1779896411955-87ecb3bc091e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
                    price="₦850,000"
                    description="iPhone 14 Pro Max, 256GB, Deep Purple"
                />
            </View>
            <View style={[styles.settingsView, {margin:Spacing.three}]}>
                <ReviewTextsCard
                    title="Category"
                    rightDesc="Edit"
                    rightTitle="Electronics"
                    end={false}
                />
                <ReviewTextsCard
                    title="Condition"
                    rightDesc="Edit"
                    rightTitle="Used"
                    end={false}
                />
                <ReviewTextsCard
                    title="Location"
                    rightDesc="Edit"
                    rightTitle="Ikeja, Lagos"
                    end={false}
                />
                <ReviewTextsCard
                    title="Contact"
                    rightDesc="Edit"
                    rightTitle="Chat & Call"
                />
            </View>

            <View style={{flexDirection:'row', paddingRight:Spacing.three, paddingLeft:Spacing.two}}>
                <Pressable style={{padding:Spacing.two, paddingTop:0}} onPress={()=>setChecked(!checked)}>
                    <View style={[styles.checkBox, {backgroundColor:checked?Colors.coral:'transparent', borderWidth:checked?0:0.5}]}>
                        {
                            checked &&
                            <ThemedText style={{color:"#FFF", fontSize:12, lineHeight:12}}>✓</ThemedText>
                        }
                    </View>
                </Pressable>
                <View style={{flexShrink:1}}>
                    <ThemedText type="mid" style={{color:theme.textSecondary}}>This item is mine to sell and doesn't violate WebTraffic's <ThemedText style={{fontWeight:700, color:theme.text}} type="mid">posting guidelines</ThemedText></ThemedText>
                </View>
            </View>

            <Button title="Post your ad" onPress={()=>router.push('/boost')} style={{margin:Spacing.three}}/>
        </Container>
    )
}