// screens/SignUpScreen.tsx
import { FormScreenLayout } from "@/components/form-screen-layout";
import { FormTextInput } from "@/components/form-text-input";
import { useAuth } from "@/context/AuthContext";
import useAuthentication from "@/hooks/authHook";
import { SignUpFormValues, signUpSchema } from "@/schema/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { TextInput, ViewProps } from "react-native";

export default function SignUp({style}:ViewProps) {
  const { createUser } = useAuthentication();
  const { setPageLoad, setUser } = useAuth();
  const [ error, setError ] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email:"",
      phone: "",
      password: "",
      confirmPassword:"",
    },
    mode: "onBlur", // validate on blur, not every keystroke
  });

  const onSubmit = async (data: SignUpFormValues) => {
    console.log(createUser(data))
    // router.navigate('/setup')
  };

  const phoneRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
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
        name="firstName"
        label="First name"
        error={errors.firstName?.message}
        autoCapitalize="words"
        textContentType="name"
        returnKeyType="next"
        onSubmitEditing={() => lastNameRef.current?.focus()}
      />
      <FormTextInput
        control={control}
        name="lastName"
        label="Last name"
        error={errors.lastName?.message}
        autoCapitalize="words"
        textContentType="name"
        returnKeyType="next"
        ref={lastNameRef}
        onSubmitEditing={() => emailRef.current?.focus()}
      />
      <FormTextInput
        control={control}
        name="email"
        label="Email"
        error={errors.email?.message}
        autoCapitalize="words"
        textContentType="name"
        returnKeyType="next"
        ref={emailRef}
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