import Container from "@/components/custom-container";
import Saved from "@/components/saved";
import { ThemedText } from "@/components/themed-text";
import { Colors, Spacing } from "@/constants/theme";
import { favorites, listings } from "@/data/mock";
import { useTheme } from "@/hooks/use-theme";
import { Listing } from "@/types";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, FlatList, TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";

export default function CategoryScreen(){
    const displayFavorites = (fav: string[])=>{
        const data: Listing[] = []
        fav.forEach((id:string)=>{
           listings.map((listing)=>{
            if (listing.id === id){
                data.push(listing);
            }
           })
        })
        return data
    }
    
    const [ favoritesList, setFavoriteList ] = useState([...favorites]);
    const [ favoriteData, setFavorite ] = useState([...displayFavorites(favoritesList)]);
    const handleUnlike = (index:string)=>{
        Alert.alert('Remove from List', 'Are you sure you want to remove this item from your favorite list?', [
        {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        },
        {text: 'OK', onPress: () => {
            const data = [...favoritesList];
            data.splice(data.indexOf(index), 1);
            setFavoriteList(data);
            setFavorite(displayFavorites(data));
        }},
        ]);
    }
    const handleClear = ()=>{
        setFavoriteList([]);
        setFavorite([]);
    }
    const styles = useStyles();
    const theme = useTheme();
    return(
        <Container edges={['top', 'bottom']}>
            <View style={[styles.row, {justifyContent:'space-between', paddingHorizontal:Spacing.three}]}>
                <View style={styles.row}>
                    <TouchableOpacity onPress={()=>router.back()} style={[styles.top2Icon, {marginRight:Spacing.two}]}>
                        <MaterialIcons name="arrow-back" size={23} color={theme.text}/>
                    </TouchableOpacity>
                    <ThemedText type="subtitle">Saved</ThemedText>
                </View>
                <TouchableOpacity onPress={handleClear}>
                    <ThemedText style={{color:theme.coralDark, fontWeight:500}}>Clear all</ThemedText>
                </TouchableOpacity>
            </View>
            <View style={{padding:Spacing.three, flex:1,}}>
                <FlatList
                    data={favoriteData}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(i, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <Saved 
                            listing={item} 
                            onPress={() => router.push({ pathname: "/detail", params: { id: index } })} 
                            unlike = {handleUnlike}
                        />
                    )}
                    ListEmptyComponent={
                        <View style={[styles.empty]}>
                            <MaterialIcons name="favorite-outline" size={42} color={Colors.inkFaint}/>
                            <ThemedText style={{color: Colors.inkFaint}}>Nothing saved yet</ThemedText>
                            <ThemedText style={{color: Colors.inkFaint}} type="small">Tap the heart on any listing to keep it here</ThemedText>
                        </View>
                    }
                />
            </View>
        </Container>
    )
}