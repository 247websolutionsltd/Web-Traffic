import Container from "@/components/custom-container";
import Store from "@/components/store";
import { ThemedText } from "@/components/themed-text";
import { Colors, Spacing } from "@/constants/theme";
import useAuthentication from "@/hooks/authHook";
import { useTheme } from "@/hooks/use-theme";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useStyles } from "../../../styles/styles";

export default function Stores(){
    const styles = useStyles();
    const theme = useTheme();
    const { getStoreList } = useAuthentication();
    const [ stores, setStores ] = useState();
    useEffect(()=>{
        const load = async()=>{
            const data = await getStoreList();
            setStores(data);
            console.log(data)
        }
        load();
    },[]);
    return(
        <Container edges={['top']}>
            <ThemedText style={{alignSelf:'center'}} type="title">Stores</ThemedText>
            <View style={{marginVertical:Spacing.two, paddingHorizontal:Spacing.three}}>
                <ThemedText style={{paddingBottom:Spacing.one}}>Check out our stores</ThemedText>
                {/* <Search placeholder="Find your desired store..."/> */}
            </View>
            <View style={{paddingHorizontal:Spacing.three}}>
            {
                stores?
              <FlatList
                  scrollEnabled={false}
                  data={stores}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                      <Store info={item} />
                  )}
              />
              :
              <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <ActivityIndicator size={30} color={Colors.primary}/>
              </View>
            }
            </View>
        </Container>
    )
}