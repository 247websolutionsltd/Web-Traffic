import Category from "@/components/categoryCard";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { useAuth } from "@/context/AuthContext";
import useAuthentication from "@/hooks/authHook";
import { useTheme } from "@/hooks/use-theme";
import { Key, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { useStyles } from "../../../styles/styles";

export default function Categories(){
    const styles = useStyles();
    const {categories} = useAuth();
    const { getCategory } = useAuthentication();
    
    const theme = useTheme();
    useEffect(()=>{
        const load = async()=>{
            await getCategory();
        }
        load()
    },[])
    return(
        <Container>
            <ThemedText style={{alignSelf:'center'}} type="title">Categories</ThemedText>
            {
                categories ?
                <View style={styles.categoriesView}>
                    {
                        categories.map((item: { image: string; _id: string; name: string; }, index: Key | null | undefined)=>(
                            <View style={styles.categoriesDataView} key={index}>
                                <Category
                                    image={item.image}
                                    category={item.name}
                                    id={item._id}
                                />
                            </View>
                        ))
                    }
                </View>
                :
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <ActivityIndicator size={50} color={Colors.coral}/>
                </View>
            }
        </Container>
    )
}