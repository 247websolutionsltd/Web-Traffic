import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { useStyles } from "../../styles/styles";

interface RadioProps{
    activeColor: string;
    inactiveColor: string;
    toggled?: boolean;
    size?:number;
    onToggle: ()=>void;
}
export default function Radio({activeColor, inactiveColor, toggled=false, size=45, onToggle}:RadioProps){
    const styles = useStyles();
    const [ toggle, setToggle ] = useState(toggled);
    const handleToggle = ()=>{
        setToggle(!toggle);
        onToggle()
    }
    return(
        <TouchableOpacity 
            onPress={handleToggle}
            style={[
                styles.toggleView, 
                {
                    backgroundColor:toggle?activeColor:inactiveColor,
                    width:size,
                    height:size/2,
                    justifyContent:toggle?'flex-end':'flex-start'
                }
                ]}>
                <View style={[
                    styles.toggleCircle,
                    {
                        width:(size/2) - 6,
                        height:(size/2) - 6
                    }
                    ]}
        />
        </TouchableOpacity>
    )
}