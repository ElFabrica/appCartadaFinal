import { Text } from "@react-navigation/elements";
import { View } from "react-native";

import { Input } from "@/components/input";
import { Button } from "@/components/botão";

export function Form() {

    return (
        <View>
            <Text>Preencha os campos</Text>

            <Text>Nome</Text>
            <Input place={"Nome"}/>

            <Text>Email</Text>
            <Input place={"Email"}/>

            <Text>Telefone</Text>
            <Input place={"(00) 00000-0000"}/>

            <Text></Text>

            <Button title="Confirmar" />
        </View>
    )
}