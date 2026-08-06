import Container from "@/components/custom-container";
import Search from "@/components/searchInput";
import Store from "@/components/store";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { stores } from "@/data/mock";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { FlatList, TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";

export default function Stores(){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <Container edges={['top','bottom']}>
            <View style={[styles.row, {paddingHorizontal:Spacing.three}]}>
                <TouchableOpacity onPress={()=>router.back()} style={[styles.top2Icon, {marginRight:Spacing.two}]}>
                    <MaterialIcons name="arrow-back" size={23} color={theme.text}/>
                </TouchableOpacity>
                <ThemedText type="subtitle">Stores</ThemedText>
            </View>
            <View style={{marginVertical:Spacing.three, paddingHorizontal:Spacing.three}}>
                <ThemedText style={{paddingBottom:Spacing.one}}>Check out our stores</ThemedText>
                <Search placeholder="Find your desired store..."/>
            </View>
            <View style={{paddingHorizontal:Spacing.three}}>
              <FlatList
                  scrollEnabled={false}
                  data={stores}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                      <Store info={item} />
                  )}
              />
            </View>
        </Container>
    )
}