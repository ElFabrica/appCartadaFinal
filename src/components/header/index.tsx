import { View, Image, ImageProps } from "react-native";
import {styles} from "./style.js"

type Props =ImageProps & {
        src: string

}

export function Header({src, ...rest}: Props) {

    return(
        <View style={styles.container}>
            <Image src={require(src)}/>
        </View>
    )
    
}