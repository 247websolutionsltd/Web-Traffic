import useData from '@/hooks/dataHook';
import { useTheme } from '@/hooks/use-theme';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

  const data = [
    { label: 'Electronics', value: '1' },
    { label: 'Property', value: '2' },
    { label: 'Vehicles', value: '3' },
    { label: 'Jobs', value: '4' },
    { label: 'Fashion', value: '5' },
    { label: 'Home appliances', value: '6' },
    { label: 'Others', value: '7' },
  ];
  const DropdownComponent = () => {
    const {setCategory} = useData();
    const theme = useTheme();
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (isFocus && !value) {
        return (
          <Text style={[styles.label, {backgroundColor: theme.card}, isFocus && { color: 'blue' }]}>
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
          style={[styles.dropdown, {backgroundColor: theme.card}, { borderColor: isFocus ?'blue':theme.line }]}
          placeholderStyle={styles.placeholderStyle}
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
          onChangeText={(text)=>setCategory(text)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
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