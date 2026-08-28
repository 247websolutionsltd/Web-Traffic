import { Colors, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Image } from "expo-image";
import { router } from "expo-router";
import { View, ViewProps } from "react-native";
import { useStyles } from "../../styles/styles";
import Edit from "./storeEdit";
import { ThemedText } from "./themed-text";

interface StoreHeaderProps extends ViewProps{
    image: string;
    name: string;
    location: string;
    date: string;
    ad: string[];
    rating: string;
    followers: string;
    verified: boolean;
    id: string;
}
export default function StoreHeader({image, name, location, date, ad, rating , followers, verified, id, style}:StoreHeaderProps){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <View style={[styles.storeHeaderTop, style]}>
            <View style={[styles.row, {}]}>
                <View style={styles.storeHeaderImageView}>
                    <Image source={{uri:image}} style={styles.storeHeaderImage}/>
                </View>
                <View>
                    <View style={[styles.row,{paddingTop:Spacing.three}]}>
                        <ThemedText type="subtitle">{name}</ThemedText>
                        <View style={[styles.verified,{backgroundColor:verified?Colors.greenTint:Colors.coralTint, marginLeft:Spacing.one}]}>
                            <ThemedText style={{color:verified?Colors.green:Colors.coral}} type="small">{verified?"✓":"✕"}</ThemedText>
                        </View>
                    </View>
                    <ThemedText style={{fontSize:15}}>{location} · Joined {date}</ThemedText>
                </View>
            </View>

            <View style={[styles.rowStretch, {padding:Spacing.three}]}>
                <ThemedText type="mid">{ad.length} ads</ThemedText>
                <ThemedText type="mid">{rating}★ rating</ThemedText>
                <ThemedText type="mid">{followers} followers</ThemedText>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between', padding:Spacing.two}}>
                <Edit icon="visibility" title="View Store" onPress={()=>router.navigate({ pathname: "/store", params: { store:id } })}/>
                <Edit icon="create" title="Edit Store"/>
                <Edit icon="add" title="Post ad" onPress={()=>router.navigate('/create')}/>
            </View>

        </View>
    )
}