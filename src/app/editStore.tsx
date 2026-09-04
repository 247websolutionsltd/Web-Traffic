import Button from "@/components/button";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import Top from "@/components/top3";
import { Spacing } from "@/constants/theme";
import { useAuth } from "@/context/AuthContext";
import useAuthentication from "@/hooks/authHook";
import useHook from "@/hooks/general-hook";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground } from "expo-image";
import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";

export default function Edit(){
    const styles = useStyles();
    const theme = useTheme();
    const {store} = useAuth();
    const { getInitials } = useHook();
    const {changeProfileImage, updateStore} = useAuthentication();
    const [name, setName] = useState(store?.name || "");
    const [description, setDescription] = useState(store?.description || "");
    const [city, setCity] = useState(store?.location.city || "");
    const [state, setState] = useState(store?.location.state || "");
    const [phone, setPhone] = useState(store?.phone || "");
    // useEffect(()=>{
    //     console.log(store);
    // },[])
    const data = {
        name:name || "",
        description:description || "",
        city:city || "",
        state:state || "",
        phone:phone || ""
    }
    return(
        <Container edges={["top", "bottom"]}>
            <Top title="Edit account"/>
            <TouchableOpacity style={{alignItems:'center', marginTop:Spacing.three}} onPress={changeProfileImage}>
                <ImageBackground
                 source={{uri:store?.logo || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBCpyQIJSGIUWdn05vYhV4n6Tcf1LzrZSsHHBA8I0XA&s=10"}}
                 imageStyle={{borderRadius:900}}
                 style={{width:140, height:140 }}
                >
                    <View style={styles.addCenter}>
                        <Ionicons name="add" size={40} color={"#FFF"} />
                    </View>
                </ImageBackground>
            </TouchableOpacity>
            <View style={{padding:Spacing.three}}>
                <View style={{marginVertical:Spacing.two}}>
                    <ThemedText>Name</ThemedText>
                    <View style={[styles.inputView, ]}>
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={setName}
                        />
                    </View>
                </View>

                <View style={{marginVertical:Spacing.two}}>
                    <ThemedText>Description</ThemedText>
                    <TextInput
                        style={styles.input2}
                        multiline
                        value={description}
                        onChangeText={setDescription}
                    />
                </View>

                <View style={{marginVertical:Spacing.two}}>
                    <ThemedText>City</ThemedText>
                    <View style={[styles.inputView, ]}>
                        <TextInput
                            style={styles.input}
                            value={city}
                            onChangeText={setCity}
                        />
                    </View>
                </View>

                <View style={{marginVertical:Spacing.two}}>
                    <ThemedText>State</ThemedText>
                    <View style={[styles.inputView, ]}>
                        <TextInput
                            style={styles.input}
                            value={state}
                            onChangeText={setState}
                        />
                    </View>
                </View>

                <View style={{marginVertical:Spacing.two}}>
                    <ThemedText>Phone number</ThemedText>
                    <View style={[styles.inputView, ]}>
                        <TextInput
                        style={styles.input}
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="numeric"
                        />
                    </View>
                </View>

                {/* <View style={{marginVertical:Spacing.two}}>
                    <ThemedText>Email address</ThemedText>
                    <View style={[styles.inputView, ]}>
                        <TextInput
                        placeholder="Add an email address"
                        placeholderTextColor={theme.textSecondary}
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        />
                    </View>
                </View> */}
            </View>
            <Button onPress={()=>updateStore(data)} title="SAVE" style={{marginHorizontal:Spacing.three}}/>
        </Container>
    )
}