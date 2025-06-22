import { View, Text } from "react-native";

import { StackRoutesProps } from "@/routes/StackRoutes";

export default function Home( {navigation}: StackRoutesProps<"home">){
    return(
        <View>
            <Text>Olá mundo</Text>
        </View>
    )

}