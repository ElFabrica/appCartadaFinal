import { View, Text, Image } from "react-native";
import { Button } from "@/components/botão";
import LottieView from 'lottie-react-native';

import { Header } from "@/components/header";
import { styles } from "./style";

import { StackRoutesProps } from "@/routes/StackRoutes";

export function Home( {navigation}: StackRoutesProps<"home">){
    return(
        <View style={styles.container}>
            <View>
              {/*  <Header/>*/}
            </View>
            <Text style={styles.title}>Seja bem vindo a Cartada Final</Text>
                   {/* <LottieView
          source={require('/')}
          autoPlay
          loop
        />*/}

            <Button title={"Iniciar"} onPress={() => navigation.navigate("form")}/>
            
        </View>
    )

}