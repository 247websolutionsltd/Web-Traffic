import { Radius } from '@/constants/theme';
import { useAuth } from '@/context/AuthContext';
import { useTheme } from '@/hooks/use-theme';
import { MaterialIcons } from '@expo/vector-icons';
import { ImageBackground, TouchableOpacity, View, } from 'react-native';
import { useStyles } from '../../styles/styles';
import { ThemedText } from './themed-text';

interface ImageUploadProps{
    image:string;
    cover?:boolean;
    index:number;
}
export default function ImageUpload({image, cover, index}:ImageUploadProps){
    const theme = useTheme();
    const styles = useStyles();
    const {removeImage} = useAuth();
    return(
        <ImageBackground style={styles.imageUpload} source={{uri:image}} imageStyle={{borderRadius:Radius.md}}>
            <View style={styles.imageUploadView}>
                <TouchableOpacity style={[styles.cancelView, {alignSelf:'flex-end'}]} onPress={()=>removeImage(index)}>
                    <MaterialIcons name='close' size={18} color={"#FFF"}/>
                </TouchableOpacity>
                {
                    cover &&
                    <View style={styles.coverView}>
                        <ThemedText style={{color:"#FFF", fontWeight:700, fontSize:11}}>COVER</ThemedText>
                    </View>
                }
                
            </View>
        </ImageBackground>
    )
}