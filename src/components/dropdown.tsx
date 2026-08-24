import { useAuth } from '@/context/AuthContext';
import useData from '@/hooks/dataHook';
import { useTheme } from '@/hooks/use-theme';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

  const data = [
    { label: 'Electronics', value: '6a8704aa520fa4cc02d244df' },
    { label: 'Property', value: '6a87103a520fa4cc02d244eb' },
    { label: 'Vehicles', value: '6a870fd7520fa4cc02d244ea' },
    { label: 'Jobs', value: 'Jobs' },
    { label: 'Fashion', value: '6a870f5c520fa4cc02d244e8' },
    { label: 'Home appliances', value: 'Home appliances' },
    { label: 'Others', value: 'Others' },
  ];
  const DropdownComponent = () => {
    const {setCategory} = useData();
    const theme = useTheme();
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const {form, updateField} = useAuth();

    const renderLabel = () => {
      if (isFocus && !value) {
        return (
          <Text style={[styles.label, {backgroundColor: theme.card}, isFocus && { color: theme.text }]}>
            Enter a Category
          </Text>
        );
      }
      return null;
    };

    return (
      <View>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, {backgroundColor: theme.card}, { borderColor: isFocus ?'blue':theme.line, }]}
          placeholderStyle={styles.placeholderStyle}
          searchPlaceholderTextColor={theme.textSecondary}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Enter a category' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            updateField("category", item.value)
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <MaterialIcons
                style={{marginRight: 5,}}
                color={isFocus ? 'blue' : theme.textSecondary}
                name="category"
                size={18}
            />
          )}
        />
      </View>
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    dropdown: {
      height: 50,
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    label: {
      position: 'absolute',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });