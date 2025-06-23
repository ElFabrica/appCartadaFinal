import { useState } from "react";
import { Text } from "@react-navigation/elements";
import { View, Alert } from "react-native";

import { CircleDashed, CircleCheck   } from "lucide-react-native";

import {itemsUser, ItemsUser} from "@/storage/Users"


import { Input } from "@/components/input";
import { Button } from "@/components/botão";

export function Form() {

    const [confirm, setConfirm] = useState(Boolean)
    const [name, setName] = useState(String)
    const [phone, setPhone] = useState(String)
    const [email, setEmail] = useState(String)

    async function handleAdd(){
      if (!name.trim()){
        return Alert.alert("Adicionar", "Informe o nome para prosseguir.")
      }
      if (!phone.trim()){
        return Alert.alert("Adicionar", "Informe o telefone para prosseguir.")
      }
      if (!email.trim()){
        return Alert.alert("Adicionar", "Informe o email para prosseguir.")
      }
      const newItem = {
        id: Math.random().toString(36).substring(2),
        name,
        phone,
        email

      }
      await itemsUser.add(newItem)
      setName("")
      setPhone("")
      setEmail("")
    }
    function confirmCad() {
        if (confirm === true) {
            setConfirm(false)
        }else{
            setConfirm(true)
        }
    }


    return (
        <View>
            <Text>Preencha os campos</Text>

            <Text>Nome</Text>
            <Input place={"Nome"}/>

            <Text>Email</Text>
            <Input place={"Email"}/>

            <Text>Telefone</Text>
            <Input place={"(00) 00000-0000"}/>

            <View style={{flexDirection:"row", gap: "16"}} >
                {confirm === true? (<CircleCheck size={18} color ="#AAAAAA" onPress={() => confirmCad}/>): (<CircleDashed size={18} color ="#AAAAAA" onPress={() => confirmCad}/>) }
                <Text>Ao prosseguir, você confirma estar ciente e de acordo com o uso dos seus dados pessoais conforme as diretrizes da Lei Geral de Proteção de Dados (LGPD).</Text>
            </View>

            <Button title="Confirmar" onPress={() =>handleAdd} />
        </View>
    )
}