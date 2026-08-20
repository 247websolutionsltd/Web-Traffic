import { Spacing } from "@/constants/theme";
import useData from "@/hooks/dataHook";
import { useTheme } from "@/hooks/use-theme";
import { ScrollView, TextInput, View } from "react-native";
import { useStyles } from "../../../styles/styles";
import { Chip } from "../Chip";
import Dropdown from "../dropdown";
import { ThemedText } from "../themed-text";

const FILTERS = ["New", "Used", "Refurbished"];
export default function Description(){
    const theme = useTheme();
    const styles = useStyles();
    const { 
        adTitle, 
        setAdTitle, 
        activeFilter, 
        setActiveFilter, 
        description, 
        setDescription,
    } = useData();
    return(
        <View style={{flex:1, paddingHorizontal:Spacing.three}}>
            <View style={{marginVertical:Spacing.two}}>
                <ThemedText type="subtitle">What are you posting?</ThemedText>
                <ThemedText style={{color:theme.textSecondary}}>Choose one... this shapes the questions we ask next</ThemedText>
            </View>
            <View>
                 <View style={{marginVertical:Spacing.two}}>
                    <ThemedText>Title</ThemedText>
                    <View style={[styles.inputView, ]}>
                        <TextInput
                            placeholder="What is the name of your store?"
                            placeholderTextColor={theme.textSecondary}
                            style={[styles.input, {maxHeight:80}]}
                            onChangeText={(text)=>setAdTitle(text)}
                            value={adTitle}
                            multiline
                            maxLength={70}
                        />
                    </View>
                    <ThemedText style={{textAlign:'right', fontSize:10}}>{adTitle.length}/70</ThemedText>
                </View>

                <View style={{marginVertical:Spacing.two}}>
                    <ThemedText>Condition</ThemedText>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{marginVertical:Spacing.two}}
                        style={{flexGrow:0}}
                        >
                        {FILTERS.map((f) => (
                            <Chip key={f} label={f} active={f === activeFilter} onPress={() => setActiveFilter(f)} />
                        ))}
                    </ScrollView>
                </View>

                <View style={{marginVertical:Spacing.two}}>
                    <ThemedText>Brand</ThemedText>
                    <View style={[styles.inputView, ]}>
                        <TextInput
                        placeholder="Enter your brand name"
                        placeholderTextColor={theme.textSecondary}
                        style={styles.input}
                        />
                    </View>
                </View>

                <View style={{marginVertical:Spacing.two}}>
                    <ThemedText>Category</ThemedText>
                    <Dropdown/>
                </View>
                
                <View style={{marginVertical:Spacing.two}}>
                    <ThemedText>Description</ThemedText>
                    <View style={[styles.inputView, ]}>
                        <TextInput
                        placeholder="Describe your store"
                        placeholderTextColor={theme.textSecondary}
                        style={[styles.input, {minHeight:80, maxHeight:180, textAlignVertical:'top'}]}
                        onChangeText={(text)=>setDescription(text)}
                        value={description}
                        multiline
                        maxLength={1000}
                        />
                    </View>
                    <ThemedText style={{textAlign:'right', fontSize:10}}>{description.length}/1000</ThemedText>
                </View>
            </View>
        </View>
    )
}