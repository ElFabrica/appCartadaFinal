import { TextInput, TextInputProps } from "react-native";
import {styles} from "./style"

type Props =TextInputProps & {
        place: string
}

export function Input({place, ...rest}: Props) {

    return(
        <TextInput style={styles.input} placeholder={place} >
        </TextInput>
    )
    
}