// components/FormTextInput.tsx
import { useTheme } from "@/hooks/use-theme";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { useState } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";
import { ThemedText } from "./themed-text";

interface FormTextInputProps<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: Path<T>;
  label: string;
  error?: string;
  password?: boolean;
  ref?: any;
  prefix?: string;
}

export function FormTextInput<T extends FieldValues>({
  control,
  name,
  label,
  error,
  password,
  ref,
  prefix,
  ...textInputProps
}: FormTextInputProps<T>) {
  const styles = useStyles();
  const [ secure, setSecure ] = useState(true);
  const theme = useTheme();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref: fieldRef } }) => (
        <View  style={{marginVertical:10}}>
          <ThemedText style={{marginBottom:5}}>{label}</ThemedText>
            <View style={[styles.inputView, error && styles.inputError]}>
              {prefix && (
                <View style={styles.prefixWrap}>
                  <ThemedText type="small">{prefix}</ThemedText>
                </View>
              )}
              <TextInput 
                style={styles.input} 
                secureTextEntry={password && secure}
                onBlur={onBlur}
                placeholderTextColor={theme.text}
                onChangeText={onChange}
                value={value}
                accessibilityLabel={label}
                accessibilityHint={error ? `Error: ${error}` : undefined}
                ref={(node) => {
                  fieldRef(node);
                  if (typeof ref === "function") ref(node);
                  else if (ref) ref.current = node;
                }}
                {...textInputProps}
              />
              {
                  password &&
                  <TouchableOpacity style={{padding:8}} onPress={()=>setSecure(!secure)}>
                      {
                          secure ?
                          <MaterialIcons name="visibility" color="#B2BCC9" size={20} />
                          :
                          <MaterialIcons name="visibility-off" color="#B2BCC9" size={20} />
                      }
                  </TouchableOpacity>
                  
              }
          </View>
          {error ? <ThemedText style={styles.errorText}>{error}</ThemedText> : null}
        </View>
      )}
    />
  );
}