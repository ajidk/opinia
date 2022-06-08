import { Pressable, StyleSheet, Text } from "react-native";

const ItemCard = ({ onPress, width, title, subtitle }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: "33%",
        borderRightWidth: width,
        borderRightColor: "#fff",
      }}
    >
      <Text style={styles.linkTitle}>{title}</Text>
      <Text style={styles.linkSubtitle}>{subtitle}</Text>
    </Pressable>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  card: {
    width: "33%",
    borderRightWidth: 0.5,
    borderRightColor: "#fff",
  },
  linkTitle: {
    fontSize: 14,
    lineHeight: 16,
    color: "#fff",
    textAlign: "center",
    textTransform: "capitalize",
  },
  linkSubtitle: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginTop: 5,
  },
});
