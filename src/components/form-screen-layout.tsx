// components/form/FormScreenLayout.tsx
import { Colors, Spacing } from "@/constants/theme";
import { Image, TouchableOpacity, View, ViewProps } from "react-native";
import { useStyles } from "../../styles/styles";
import Button from "./button";
import { ThemedText } from "./themed-text";

interface FormScreenLayoutProps extends ViewProps {
  children: React.ReactNode;
  onSubmit: () => void;
  isSubmitting: boolean;
  submitLabel?: string;
}

export function FormScreenLayout({ children, onSubmit, isSubmitting, submitLabel = "Submit", style }: FormScreenLayoutProps) {
  const styles = useStyles();
  return (
    <View style={[style, {flex:1, justifyContent:'space-between'}]}>
      <View>
        {children}
        {
          submitLabel !== "Send Code" &&
        <Button 
          title={submitLabel} 
          onPress={onSubmit} 
          disabled={isSubmitting} 
          icon={submitLabel === "Continue" ? "arrow-forward" : null}
          style={{marginVertical:Spacing.four}}
        />
        }
      </View>
      <View>
        {
          submitLabel === "Send Code" ?
          <Button 
          title={submitLabel} 
          onPress={onSubmit} 
          disabled={isSubmitting}
          style={{marginVertical:Spacing.four}}
          />
          :
          <View style={{marginVertical:Spacing.three}}>
            <View style={styles.dividerRow}>
              <View style={styles.line} />
              <ThemedText type="small" style={{fontWeight:400}}>or continue with</ThemedText>
              <View style={styles.line} />
            </View>

            <View style={styles.socialRow}>
              <TouchableOpacity style={styles.socialBtn}>
                <Image source={require('../../assets/images/google.png')} style={{width:27, height:27, marginRight:5}}/>
                <ThemedText >Google</ThemedText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialBtn}>
                <Image source={require('../../assets/images/apple.png')} style={{width:23, height:23, marginRight:5}} resizeMode="contain"/>
                <ThemedText>Apple</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        }
        <View style={[styles.row, {justifyContent:'center'}]}>
          <ThemedText>
            {submitLabel === "Continue" ? "Already have an account?" : submitLabel === "Send Code" ? "Remembered it?" : "New here?"}
          </ThemedText>
          <TouchableOpacity style={{marginVertical:Spacing.two}}>
            <ThemedText style={{fontWeight:500, color:Colors.coralDark}}>
              {" "}{submitLabel === "Log In" ? "Create an account" : "Log in"}
            </ThemedText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
