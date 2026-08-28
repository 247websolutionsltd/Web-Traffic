import { Colors, Radius, Spacing } from "@/constants/theme";
import useAuthentication from "@/hooks/authHook";
import { useTheme } from "@/hooks/use-theme";
import { InfoProps } from "@/types";
import { Image } from "expo-image";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";
import Button from "./button";
import { ThemedText } from "./themed-text";

interface StoreProps{
    info:InfoProps;
}
export default function Store({info}: StoreProps){
    const styles = useStyles();
    const theme = useTheme();
    const { logo, name, listings, location, _id } = info;
    const { followStore } = useAuthentication();
    return(
        <TouchableOpacity
         style={styles.store}
         onPress={()=>router.navigate({ pathname: "/store", params: { store:_id } })}
        >
            <View style={{flexDirection:"row", alignItems:'center'}}>
                <Image source={logo} style={{width:80, height:80, borderRadius:Radius.md}}/>
                <View style={styles.storeMid}>
                    <View>
                        <ThemedText style={{flexWrap:"wrap"}} type="bold">{name}</ThemedText>
                        {/* <View style={{flexDirection:'row'}}>
                            <ThemedText>{listings.length} ads</ThemedText>
                            <ThemedText style={{marginLeft:Spacing.two}}>{star}★</ThemedText>
                        </View> */}
                    </View>
                    <ThemedText>{location.city}, {location.state}</ThemedText>
                </View>
            </View>
            <Button
             title="Follow" 
             onPress={()=>followStore(_id)} 
             style={{padding:Spacing.two, borderColor:Colors.coral, height:"auto"}} 
             type="secondary"
             textColor={Colors.coral}
             textSize={14}
            />
        </TouchableOpacity>
    )
}