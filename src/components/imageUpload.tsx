import { Radius } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { MaterialIcons } from '@expo/vector-icons';
import { ImageBackground, View, } from 'react-native';
import { useStyles } from '../../styles/styles';
import { ThemedText } from './themed-text';

interface ImageUploadProps{
    image:string;
    cover?:boolean;
}
export default function ImageUpload({image, cover}:ImageUploadProps){
    const theme = useTheme();
    const styles = useStyles();
    return(
        <ImageBackground style={styles.imageUpload} source={{uri:image}} imageStyle={{borderRadius:Radius.md}}>
            <View style={styles.imageUploadView}>
                <View style={[styles.cancelView, {alignSelf:'flex-end'}]}>
                    <MaterialIcons name='close' size={18} color={"#FFF"}/>
                </View>
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