import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

const MainScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header userName="Rafael Mendes Torres Leal" notifications={2} />

      {/* Conteúdo principal */}
      <View style={styles.content}>
        <Text style={styles.text}>Bem-vindo à tela principal!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
});

export default MainScreen;
