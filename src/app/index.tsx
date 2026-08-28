import Button from "@/components/button";
import { ThemedText } from "@/components/themed-text";
import { Radius } from "@/constants/theme";
import useAuthentication from "@/hooks/authHook";
import useButton from "@/hooks/buttonHook";
import { useTheme } from "@/hooks/use-theme";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
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
  const { login1, register1 } = useButton();
  const {getCurrentUser, addCategory, getCategory, getListings, getStoreList, getMyStore} = useAuthentication();
  useEffect(() => {
      GoogleSignin.configure({
        webClientId: '391322710451-hug7a4sg00a7caqh8hlv7ei93ba68mje.apps.googleusercontent.com', 
        offlineAccess: true, 
      });
      const loadTasks = async () => {
          const token = await AsyncStorage.getItem("token");
          const person = await getCurrentUser(token);
          const onboarded = await AsyncStorage.getItem('onboarded');
          if (onboarded === 'true'){
            if(person){
              router.replace('/(tabs)');
            }else{
              setIndex(0);
            }
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
          backgroundStyle={{backgroundColor:theme.background}}
        >
          <BottomSheetView style={{ flex: 1, padding: 24, backgroundColor: theme.background, borderRadius:Radius.lg}}>
            <ThemedText style={{textAlign:'center', lineHeight:30}} type="title">Buy, sell, and trade near you</ThemedText>
            <ThemedText style={{textAlign:'center', marginTop:10}}>Join thousands of buyers and sellers across Nigeria</ThemedText>
            <View style={{marginVertical:30}}>
              <Button
                onPress={register1} 
                isLoading={false} 
                title="Create Account"
                style={{marginBottom:10}}
              />
              <Button
                onPress={login1} 
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
