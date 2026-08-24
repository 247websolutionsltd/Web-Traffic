import Button from "@/components/button";
import Container from "@/components/custom-container";
import PreviewCard from "@/components/previewCard";
import ReviewTextsCard from "@/components/reviewTextCard";
import { ThemedText } from "@/components/themed-text";
import { Colors, Spacing } from "@/constants/theme";
import { useAuth } from "@/context/AuthContext";
import useHook from "@/hooks/general-hook";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";

export default function Review(){
    const theme = useTheme();
    const styles = useStyles();
    const [ checked, setChecked ] = useState(false);
    const {form, updateField} = useAuth();
    const {priceFormat} = useHook();
    const handleNext = ()=>{
        if(checked){
            router.push('/boost');
        }else{
            Alert.alert('You must agree to the posting guidelines');
        }
    }
    const dropdownData = [
    { label: 'Electronics', value: '6a8704aa520fa4cc02d244df' },
    { label: 'Property', value: '6a87103a520fa4cc02d244eb' },
    { label: 'Vehicles', value: '6a870fd7520fa4cc02d244ea' },
    { label: 'Jobs', value: 'Jobs' },
    { label: 'Fashion', value: '6a870f5c520fa4cc02d244e8' },
    { label: 'Home appliances', value: 'Home appliances' },
    { label: 'Others', value: 'Others' },
  ];
  const category = dropdownData.find((dat)=>dat.value===form.category)?.label;
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
                    image={form.images[0]}
                    price={`₦${priceFormat(+form.price)}`}
                    description={form.description}
                />
            </View>
            <View style={[styles.settingsView, {margin:Spacing.three}]}>
                <ReviewTextsCard
                    title="Category"
                    rightDesc="Edit"
                    rightTitle={category || ""}
                    end={false}
                />
                <ReviewTextsCard
                    title="Condition"
                    rightDesc="Edit"
                    rightTitle={form.condition}
                    end={false}
                />
                <ReviewTextsCard
                    title="Location"
                    rightDesc="Edit"
                    rightTitle={`${form.city}, ${form.state}`}
                    
                />
                {/* <ReviewTextsCard
                    title="Contact"
                    rightDesc="Edit"
                    rightTitle="Chat & Call"
                /> */}
            </View>

            <View style={{flexDirection:'row', paddingRight:Spacing.three, paddingLeft:Spacing.two}}>
                <Pressable style={{padding:Spacing.two, paddingTop:0}} onPress={()=>setChecked(!checked)}>
                    <View style={[styles.checkBox, {backgroundColor:checked?Colors.coral:Colors.coralTint, borderWidth:checked?0:0.5}]}>
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

            <Button title="Post your ad" onPress={handleNext} style={{margin:Spacing.three}}/>
        </Container>
    )
}