// ContactUsScreen.js
import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Importamos un ícono de la librería de expo


const ContactUsScreen = () => {
  const handleSendMessage = () => {
    Alert.alert("Mensaje Enviado", "Gracias por ponerte en contacto con nosotros.");
    // Aquí podrías agregar lógica para enviar el mensaje o guardar la información del formulario
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Contáctanos</Text>
      <Text style={styles.description}>
        Estamos aquí para ayudarte. Si tienes alguna pregunta o comentario, por favor completa el formulario a continuación.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
      />

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
      />

      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Mensaje"
        multiline
      />

      <TouchableOpacity
        style={styles.sendButton}
        onPress={handleSendMessage}
      >
        <Text style={styles.sendButtonText}>Enviar Mensaje</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  messageInput: {
    height: 100,
  },
  sendButton: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ContactUsScreen;
