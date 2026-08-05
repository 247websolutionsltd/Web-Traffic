import { Spacing } from "@/constants/theme";
import { Image, ImageBackground } from "expo-image";
import { View } from "react-native";
import { useStyles } from "../../styles/styles";
import Button from "./button";
import { ThemedText } from "./themed-text";

interface CatTestProps{
    image: string;
    title: string;
    desc: string;
}
export default function CatTest({image, title, desc}:CatTestProps){
    const styles = useStyles();
    return(
        <ImageBackground
            source={{uri:image}}
            style={{marginVertical:Spacing.three}}
        >
            <View style={styles.catTest}>
            <Image
                source={require('../../assets/images/sportTest.png')}
                style={{width:120, marginLeft:Spacing.three}}
                contentFit="contain"
            />
            <View style={styles.catTestLeft}>
                <View/>
                <View>
                    <ThemedText type="subtitle" style={{flexWrap:'wrap', color:"#FFF"}}>{title}</ThemedText>
                    <ThemedText type="small" style={{flexWrap:'wrap', color:"#FFF"}}>{desc}</ThemedText>
                </View>
                <Button
                    title="Check it out" 
                    onPress={()=>console.log('here')} 
                    style={{height:40, alignSelf:'flex-start', marginTop:Spacing.two, paddingHorizontal:Spacing.two}}
                    textSize={13}
                />
            </View>
            </View>
        </ImageBackground>
    )
}