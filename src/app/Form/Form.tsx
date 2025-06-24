import { useState, useEffect } from "react";
import { Text } from "@react-navigation/elements";
import { View, Alert } from "react-native";

import LottieView from 'lottie-react-native';
import { CircleDashed, CircleCheck } from "lucide-react-native";

import { itemsUser, ItemsUser } from "@/storage/Users"

import { Input } from "@/components/input";
import { Button } from "@/components/botão";
import { Popup } from "@/components/popUp";
import { styles } from "./style";

export function Form() {

  const [confirm, setConfirm] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  async function handleAdd() {
    if (!name.trim()) {
      return Alert.alert("Adicionar", "Informe o nome para prosseguir.")
    }
    if (!phone.trim()) {
      return Alert.alert("Adicionar", "Informe o telefone para prosseguir.")
    }
    if (!email.trim()) {
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
      console.log("Desconfirma")
      return
    } else {
      setConfirm(true)
      console.log("Confirma")
    }
  }
  
useEffect(()=>{
  console.log(confirm)
}, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preencha os campos</Text>

      <LottieView style={{ width: "50%", height: "20%" }}
        source={require("../../assets/Form.json")}
        autoPlay
        loop
      />


      <View style={styles.subContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.subTitle}>Nome</Text>
          <Input place={"Nome"} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.subTitle}>Email</Text>
          <Input place={"Email"} />
        </View >
        <View style={styles.inputContainer}>
          <Text style={styles.subTitle}>Telefone</Text>
          <Input place={"(00) 00000-0000"} />
        </View>

      </View>

      <View style={{ flexDirection: "row", gap: "8" }} >
        {confirm === true ? (<CircleCheck size={24} color="#AAAAAA" onPress={confirmCad} />) : (<CircleDashed size={24} color="#AAAAAA" onPress={confirmCad} />)}
        <Text onPress={confirmCad}>Ao prosseguir, você confirma estar ciente e de acordo com o uso dos seus dados pessoais conforme as diretrizes da Lei Geral de Proteção de Dados (LGPD).</Text>
      </View>
      <Button title="Confirmar" onPress={handleAdd} />
      <Popup  />
    </View>
  )
}