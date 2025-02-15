import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import NotificationIcon from '../../assets/NotificationVector.svg'

interface HeaderProps {
  userName: string;
  notifications?: number;
}

const Header: React.FC<HeaderProps> = ({ userName, notifications = 0 }) => {
  // Pega as iniciais do nome
  const getInitials = (name: string) => {
    const words = name.trim().split(/\s+/); // Remove espaços extras automaticamente
    return words.length > 1
      ? (words[0][0] + words[words.length - 1][0]).toUpperCase()
      : words[0][0].toUpperCase();
  };
  

  return (
    <View style={styles.header}>
      {/* Círculo com as iniciais */}
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{getInitials(userName)}</Text>
      </View>

     

      {/* <NotificationIcon width={120} height={40} /> */}

      {/* Ícone de Notificação */}
      <View style={styles.notificationContainer}>
      <NotificationIcon width="32" height="32" color="#1c1c1c" />
        {notifications > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{ notifications.toString().padStart(2, '0')}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    elevation: 4,
    paddingTop: 40
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#1c1c1c",
    fontSize: 16,
    fontWeight: "bold",
  },
  notificationContainer: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#0500ff",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default Header;
