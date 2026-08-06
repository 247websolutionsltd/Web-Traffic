import Container from "@/components/custom-container";
import Search from "@/components/searchInput";
import Store from "@/components/store";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { stores } from "@/data/mock";
import { FlatList, View } from "react-native";

export default function Stores(){
    return(
        <Container style={{paddingHorizontal:Spacing.three}}>
            <ThemedText type="title">Stores</ThemedText>
            <ThemedText >Browse everything on WebTraffic by category</ThemedText>
            <View style={{marginVertical:Spacing.three}}>
              <Search placeholder="Find your desired store..."/>
            </View>
            <View>
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