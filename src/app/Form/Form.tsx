import { useState } from "react";
import { Text } from "@react-navigation/elements";
import { View } from "react-native";

import { Input } from "@/components/input";
import { Button } from "@/components/botão";

export function Form() {

    const [confirm, SetConfirm] = useState(Boolean)

    return (
        <View>
            <Text>Preencha os campos</Text>

            <Text>Nome</Text>
            <Input place={"Nome"}/>

            <Text>Email</Text>
            <Input place={"Email"}/>

            <Text>Telefone</Text>
            <Input place={"(00) 00000-0000"}/>

            <View style={{flexDirection:"row"}}>
                <Text>Ao prosseguir, você confirma estar ciente e de acordo com o uso dos seus dados pessoais conforme as diretrizes da Lei Geral de Proteção de Dados (LGPD).</Text>
            </View>

            <Button title="Confirmar" />
        </View>
    )
}