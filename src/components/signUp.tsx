// screens/SignUpScreen.tsx
import { FormScreenLayout } from "@/components/form-screen-layout";
import { FormTextInput } from "@/components/form-text-input";
import { SignUpFormValues, signUpSchema } from "@/schema/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { TextInput, ViewProps } from "react-native";

export default function SignUp({style}:ViewProps) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      password: "",
      confirmPassword:"",
    },
    mode: "onBlur", // validate on blur, not every keystroke
  });

  const onSubmit = async (data: SignUpFormValues) => {
    // await api.signUp(data);
    router.navigate('/setup')
  };

  const phoneRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  return (
    <FormScreenLayout 
      onSubmit={handleSubmit(
        onSubmit,
        (errors) => {
          console.log("Validation Errors:", errors);
        }
      )}
      isSubmitting={isSubmitting} 
      style={style}
      submitLabel="Continue"
    >
      <FormTextInput
        control={control}
        name="fullName"
        label="Full name"
        error={errors.fullName?.message}
        autoCapitalize="words"
        textContentType="name"
        returnKeyType="next"
        onSubmitEditing={() => phoneRef.current?.focus()}
      />
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
        onSubmitEditing={() => confirmPasswordRef.current?.focus()}
        password
      />
      <FormTextInput
        control={control}
        name="confirmPassword"
        label="Confirm Password"
        error={errors.confirmPassword?.message}
        ref={confirmPasswordRef}
        textContentType="newPassword"
        password
      />
    </FormScreenLayout>
  );
}