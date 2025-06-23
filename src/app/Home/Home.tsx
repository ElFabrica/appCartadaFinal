import { View, Text, Image } from "react-native";
import { Button } from "@/components/botão";
import LottieView from 'lottie-react-native';

import { StackRoutesProps } from "@/routes/StackRoutes";

export function Home( {navigation}: StackRoutesProps<"home">){
    return(
        <View>
            <View>
                <Image source={require("/")} />
            </View>
            <Text>Seja bem vindo a Cartada Final</Text>
                    <LottieView
          source={require('/')}
          autoPlay
          loop
        />

            <Button title={"Iniciar"} onPress={() => navigation.navigate("form")}/>
            
        </View>
    )

}