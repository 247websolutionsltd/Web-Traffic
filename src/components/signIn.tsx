// screens/SignUpScreen.tsx
import { FormScreenLayout } from "@/components/form-screen-layout";
import { FormTextInput } from "@/components/form-text-input";
import { useTheme } from "@/hooks/use-theme";
import { SignInFormValues, signInSchema } from "@/schema/signInSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { TextInput, TouchableOpacity, ViewProps } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

export default function SignUp({style}:ViewProps) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
    mode: "onBlur", // validate on blur, not every keystroke
  });

  const onSubmit = async (data: SignInFormValues) => {
    // await api.signUp(data);
    router.navigate('/(tabs)')
  };

  const phoneRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const styles = useStyles();
  const theme = useTheme();

  return (
    <FormScreenLayout 
      onSubmit={handleSubmit(onSubmit)} 
      isSubmitting={isSubmitting} 
      style={style}
      submitLabel="Log In"
    >
      <FormTextInput
        control={control}
        name="phone"
        label="Phone Number"
        error={errors.phone?.message}
        keyboardType="numeric"
        textContentType="none"
        ref={phoneRef}
        returnKeyType="next"
        prefix="🇳🇬 +234"
        onSubmitEditing={() => passwordRef.current?.focus()}
      />
      <FormTextInput
        control={control}
        name="password"
        label="Password"
        error={errors.password?.message}
        ref={passwordRef}
        textContentType="newPassword"
        password
      />
      <TouchableOpacity style={{alignSelf:'flex-end'}} onPress={()=>router.navigate('/setup/reset')}>
        <ThemedText style={{color:theme.coralDark}}>Forgot password?</ThemedText>
      </TouchableOpacity>
    </FormScreenLayout>
  );
}