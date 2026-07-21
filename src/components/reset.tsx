// screens/SignUpScreen.tsx
import { FormScreenLayout } from "@/components/form-screen-layout";
import { FormTextInput } from "@/components/form-text-input";
import { ResetFormValues, resetSchema } from "@/schema/resetSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { TextInput, ViewProps } from "react-native";
import { useStyles } from "../../styles/styles";

export default function ResetPassword({style}:ViewProps) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetFormValues>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      phone: "",
    },
    mode: "onBlur", // validate on blur, not every keystroke
  });

  const onSubmit = async (data: ResetFormValues) => {
    // await api.signUp(data);
    console.log(data)
  };

  const phoneRef = useRef<TextInput>(null);
  const styles = useStyles();

  return (
    <FormScreenLayout 
      onSubmit={handleSubmit(onSubmit)} 
      isSubmitting={isSubmitting} 
      style={style}
      submitLabel="Send Code"
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
      />
    </FormScreenLayout>
  );
}