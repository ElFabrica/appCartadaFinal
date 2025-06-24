import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface Props {
  title: string;
  description: string;
  onConfirm: () => void;
}

export function Popup({ title, description, onConfirm }: Props) {
  return (
    <View style={styles.overlay}>
      <View style={styles.popup}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>

        <TouchableOpacity style={styles.button} onPress={onConfirm}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
