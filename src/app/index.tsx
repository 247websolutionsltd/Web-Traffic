import Button from "@/components/button";
import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/hooks/use-theme";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "../../styles/styles";

export default function SplashScreen(){
  const styles = useStyles();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [index, setIndex] = useState(-1);
  const theme = useTheme();

  const snapPoints = useMemo(() => ["55%"],['75%']);
  useEffect(() => {
      const loadTasks = async () => {
          const onboarded = await AsyncStorage.getItem('onboarded');
          if (onboarded === 'true'){
              setIndex(0);
          }else{
            
              router.replace('/onboard');
          }
      };
      loadTasks();
  
  }, []);
  return(
    <SafeAreaView style={styles.splash}>
      <View style={{bottom:20}}>
        <Image source={require('../../assets/images/logo.png')} style={[styles.splashLogo, {marginBottom:10}]}/>
        <ThemedText type="title" themeColor="background" style={{textAlign:'center', color:"#FFF"}}>WebTraffic</ThemedText>
        <ThemedText themeColor="backgroundElement" style={{textAlign:'center', color:"#FFF"}}>Buy and sell near you</ThemedText>
      </View>
      {
        index === 0 &&
        <BottomSheet
          ref={bottomSheetRef}
          index={index}
          snapPoints={snapPoints}
          enableDynamicSizing={false}
          handleComponent={null}
          enablePanDownToClose={false}
        >
          <BottomSheetView style={{ flex: 1, padding: 24, backgroundColor: theme.background}}>
            <ThemedText style={{textAlign:'center', lineHeight:30}} type="title">Buy, sell, and trade near you</ThemedText>
            <ThemedText style={{textAlign:'center', marginTop:10}}>Join thousands of buyers and sellers across Nigeria</ThemedText>
            <View style={{marginVertical:30}}>
              <Button
                onPress={()=>router.navigate('/auth/register')} 
                isLoading={false} 
                title="Create Account"
                style={{marginBottom:10}}
              />
              <Button
                onPress={()=>router.navigate('/auth/logIn')} 
                isLoading={false} 
                title="Log in"
                type="secondary"
              />
            </View>
            <View style={{alignItems:'center'}}>
              <ThemedText style={{textAlign:'center', fontWeight:400, maxWidth:'80%'}} type="small">By continuing you agree to our 
                <ThemedText type="small"> Terms </ThemedText> and 
                <ThemedText type="small"> Privacy policy</ThemedText>
              </ThemedText>
            </View>
          </BottomSheetView>
        </BottomSheet>
      }
    </SafeAreaView>
  );
}
