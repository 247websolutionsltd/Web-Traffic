import { ThemedText } from "@/components/themed-text";
import { Image } from "expo-image";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "../../styles/styles";

export default function GetStartedScreen(){
  const styles = useStyles();
  return(
    <SafeAreaView style={styles.splash}>
      <View style={{bottom:20}}>
        <Image source={require('../../assets/images/logo.png')} style={[styles.splashLogo, {marginBottom:10}]}/>
        <ThemedText type="title" themeColor="background" style={{textAlign:'center'}}>WebTraffic</ThemedText>
        <ThemedText themeColor="backgroundElement" style={{textAlign:'center'}}>Buy and sell near you</ThemedText>
      </View>
    </SafeAreaView>
  );
}