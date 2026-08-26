import Container from "@/components/custom-container";
import Search from "@/components/searchInput";
import Store from "@/components/store";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { stores } from "@/data/mock";
import { useTheme } from "@/hooks/use-theme";
import { FlatList, View } from "react-native";
import { useStyles } from "../../../styles/styles";

export default function Stores(){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <Container edges={['top']}>
            <ThemedText style={{alignSelf:'center'}} type="title">Stores</ThemedText>
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